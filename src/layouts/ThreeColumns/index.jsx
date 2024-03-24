import React from 'react';

import './index.scss';

export const ThreeColumns = ({ children }) => {
    return (
        <div class="container clearfix">
            <div class="left">左</div>
            <div class="right">右</div>
            <div class="content">内容</div>
        </div>
    )
}

