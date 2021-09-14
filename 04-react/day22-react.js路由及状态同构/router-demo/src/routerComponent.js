import React from 'react';
import { createBrowserHistory } from 'history';
import { match as matchPath } from 'path-to-regexp';

// matchPath('/about/:id', '/about/test');

const history = createBrowserHistory();

// 监听 URL 变化，确定需要渲染组件
export class Route extends React.Component {
    componentWillMount() {
        history.listen((location, action) => {
            console.log('history.listen:::', location, action);
            this.forceUpdate();
        });
    }

    render() {
        const {
            path,
            component: Component,
            render
        } = this.props;

        const pathname = window.location.pathname;
        const matcher = matchPath(path);
        const match = matcher(pathname);
        console.log('match:::', match);

        if (!match) return null;

        if (Component) {
            return (<Component match={match} />);
        }

        if (render) {
            return render({match});
        }

        return null;
    }
}

// const matchPath = (targetPath, currentPath) => targetPath === currentPath;

// 触发 URL 的变化
export class Link extends React.Component {
    handleClick = (e) => {
        e.preventDefault(); // 移除默认行为（如：a标签的跳转）
        history.push(this.props.to);
    }

    render() {
        const { to, children } = this.props;

        return (
            <a href={to} onClick={this.handleClick}>{children}</a>
        )
    }
}
