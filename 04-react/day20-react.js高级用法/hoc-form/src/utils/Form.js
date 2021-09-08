import React from 'react';
import AsyncValidator from 'async-validator';

class InputComponent extends React.Component {
    render() {
        const { form } = this.props;

        return (
            <div>
                <input
                    {...form.getFieldProps(
                        'inputKey',
                        {
                            validator: [
                                {min: 2, max: 20, message: '用户名长度 2～20'}
                            ]
                        }
                    )}
                />
                <div {...form.getFieldError('inputKey')} />
            </div>
        );
    }
}

function FormCreate(options) {
    const store = {};
    return function (WrappedComponent) {
        return class HOCWrappedComponent extends React.Component {
            constructor(props) {
                super(props);
                this.getFieldProps = this.getFieldProps.bind(this);
            }

            getFieldProps(fieldKey, options) {
                const self = this;
                const validator = new AsyncValidator({[fieldKey]: options.validator});
                return {
                    value: store[fieldKey] && store[fieldKey].value,
                    onInput(e) {
                        const value = e.target.value;
                        store[fieldKey] = {...store[fieldKey], value};
                        validator.validate({[fieldKey]: value})
                            .then(() => {
                                store[fieldKey].error = null;
                                self.forceUpdate();
                            })
                            .catch(({errors}) => {
                                store[fieldKey].error = errors.map(error => error.message);
                                self.forceUpdate();
                            })
                    }
                };
            }

            getFieldData(fieldKey) {
                return store[fieldKey] && store[fieldKey].value;
            }

            getFieldError = (fieldKey) => {
                return {
                    children: store[fieldKey] && store[fieldKey].error
                };
            }

            render() {
                const form = {
                    getFieldProps: this.getFieldProps,
                    getFieldError: this.getFieldError
                };

                return (
                    <WrappedComponent form={form}></WrappedComponent>
                );
            }
        }
    }
}

const FormCreateComponent = FormCreate({data: 'hello world'})(InputComponent);

export default class extends React.Component {
    render() {
        return (
            <FormCreateComponent />
        );
    }
};
