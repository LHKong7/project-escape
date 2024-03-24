import React, { useEffect, useCallback } from 'react';
import './index.scss';

import { debounce, throttle } from 'lodash';

export const ScrollContainer = () => {
    const [count, setCount] = React.useState(0);
    const containerRef = React.useRef();

    const scrollCount = useCallback(() => {
        console.log('scrollCount trigger')
        setCount((count) => count + 1);
    }, [])

    useEffect(() => {
        document.addEventListener('scroll', debounce(scrollCount, 1000));

        return () => {
            document.removeEventListener('scroll', scrollCount);
        }
    }, [])

    return (
        <div className='scroll-container' ref={containerRef}>
            <div className='scroll-sticky'>{`the current count is ${count}`}</div>
        </div>
    )
}
