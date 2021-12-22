class StringSchema {
    constructor() {
        this._test = [];
    }

    test(info) {
        this._test.push(info);
    }

    length(len, message) {
        this.test({
            message,
            test: (value) => {
                return "string" === typeof value && value.length <= len;
            },
        });

        return this;
    }

    min(min, message) {
        this.test({
            message,
            test: (value) => {
                return "string" === typeof value && value.length >= min;
            },
        });
        return this;
    }

    isValid(value) {
        for(const info of this._test) {
            const { message, test } = info;
            const ret = test(value);
            if (!ret) {
                return message;
            }
        }
        return "";
    }
}

module.exports = {
    StringSchema,
};
