import React from 'react';
import styles from './styles.less';
import { debounce } from 'lodash';

export default class extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.loadMoreHandler = this.loadMoreHandler.bind(this);
    }

    // componentDidMount() {
    //     // 滚动的时候，自动调用
    //     const wrapper = this.refs.wrapper;
    //     const loadMoreFn = this.props.loadMoreFn;

    //     // 触发频率
    //     window.addEventListener('scroll', () => {
    //         // 计算
    //         const top = wrapper.getBoundingClientRect().top;
    //         const windowHeight = window.screen.height;

    //         if (top && top < windowHeight) {
    //             loadMoreFn();
    //         }
    //     })
    // }

    // 频繁触发，使用`节流/防抖`策略，进行优化
    // 通过 debounce 进行
    componentDidMount() {
        const wrapper = this.refs.wrapper;
        const loadMoreFn = this.props.loadMoreFn;

        function callback() {
            const top = wrapper.getBoundingClientRect().top;
            const windowHeight = window.screen.height;

            if (top && top < windowHeight) {
                loadMoreFn();
            }
        }

        window.addEventListener('scroll', debounce(callback, 100));
    }

    loadMoreHandler() {
        this.props.loadMoreFn();
    }

    render() {
        return (
            <div className={styles['load-more']} ref="wrapper">
                <span onClick={this.loadMoreHandler}>加载更多</span>
                load more
            </div>
        );
    }
}
