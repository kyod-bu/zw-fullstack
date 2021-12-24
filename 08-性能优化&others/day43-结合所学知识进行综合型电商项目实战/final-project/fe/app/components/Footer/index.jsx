import React from 'react';
import { Link } from 'react-router-dom';
import styles from './index.less';

const menu = [
    {
        label: '首页',
        router: '/'
    },
    {
        label: '我的',
        router: '/about'
    }
];

export default class extends React.Component {
    render() {
        return (
            <div className={styles['footer-list']}>
                {
                    menu.map(item => {
                        return (
                            <div className={styles['footer-item']}>
                                {/* <div></div> */}
                                <Link to={item.router}>{item.label}</Link>
                            </div>
                        );
                    })
                }
            </div>
        );
    }
}
