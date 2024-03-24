import React from 'react';

import './index.scss';

export const TwoColumns = ({ children }) => {
    return (
        <div className='container clearfix'>
            <div className='left'>定宽</div>
            <div className='right'>
                <p>自适应</p>
                <p>自适应1</p>
                <p>自适应2</p>
            </div>
        </div>
    )
}
