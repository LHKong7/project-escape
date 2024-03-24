import React from 'react';

import styles from './style.module.scss';

export const InfiniteLayout = ({
    children
}) => {
    return (
        <div className={styles.infiniteLayout}>
            {children}
        </div>
    );
}
