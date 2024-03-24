import React from 'react';
import cx from 'classnames';

import verticalAlignment from './verticalAlignment.module.scss';
import centerAlignment from './centering.module.scss';
import styles from './styles.module.scss';

export const CustomLayouts = ({ children }) => {
    return (
        <div className={cx(styles.parent, centerAlignment.parent)}>
            <div className={cx(styles.child, centerAlignment.child)}>
                Child 1
            </div>
            {/* <div className={verticalAlignment.childTwo}>child 2</div> */}
        </div>
    )
}
