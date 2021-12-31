import React from 'react';
import { Link } from 'react-router-dom';
import styles from './item.less';

export default function ({ data }) {
    return (
        <Link to={`/detail/${data.id}`}>
            <div className={styles['list-item']}>
                <div className={styles['item-img-container']}>
                    <img src={data.img}></img>
                </div>
                <div className={styles['item-content']}>
                    <div className={styles['item-title']}>
                        {data.title}
                        <div className={styles['item-subTitle']}>
                            {data.subTitle}
                        </div>
                    </div>
                    <div className={styles['item-price-container']}>
                        <div className={styles['item-price']}>&yen;{data.price}</div>
                        <div className={styles['item-number']}>月售{data.number}</div>
                    </div>
                </div>
            </div>
        </Link>
    );
}
