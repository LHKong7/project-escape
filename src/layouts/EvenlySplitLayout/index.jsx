import React from 'react';

import './index.scss';

export const EvenlySplitLayout = ({ children }) => {
    return (
        <div class="container clearfix">
            <div class="item item1"></div>
            <div class="item item2"></div>
            <div class="item item3"></div>
            <div class="item item4"></div>
        </div>
    )
}
