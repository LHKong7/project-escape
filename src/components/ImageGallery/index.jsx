import React from 'react';

import './index.scss';

function enterDroppable(elem) {
    elem.style.background = 'pink';
}

function leaveDroppable(elem) {
    elem.style.background = '';
}

export const ImageGallery = ({ content }) => {
    const containerRef = React.useRef();

    const onMouseDown = (e) => {
        e.preventDefault();
        console.log('Mouse down');
        const currentEl = e.target;
        const clonedEl = currentEl.cloneNode(true);
        let shiftX = e.clientX - currentEl.getBoundingClientRect().left;
        let shiftY = e.clientY - currentEl.getBoundingClientRect().top;


        // (1) prepare to moving: make absolute and on top by z-index
        clonedEl.style.position = 'absolute';
        clonedEl.style.zIndex = 1000;
        clonedEl.style.opacity = 0.3;
        clonedEl.classList.remove('droppable');
        // move it out of any current parents directly into body
        // containerRef.current.append(clonedEl);
        document.body.append(clonedEl);
        const moveAt = (pageX, pageY) => {
            clonedEl.style.left = pageX - shiftX + 'px';
            clonedEl.style.top = pageY - shiftY + 'px';
        }

        // move our absolutely positioned ball under the pointer
        moveAt(e.pageX, e.pageY);

        // potential droppable that we're flying over right now
        let currentDroppable = null;
        function onMouseMove(e) {
            moveAt(e.pageX, e.pageY);
            // elemBelow is the element below the ball, may be droppable
            clonedEl.hidden = true;
            let elemBelow = document.elementFromPoint(e.clientX, e.clientY);
            clonedEl.hidden = false;
            if (!elemBelow) return;
            let droppableBelow = elemBelow.closest('.droppable');

            if (currentDroppable != droppableBelow) {
                // we're flying in or out...
                // note: both values can be null
                //   currentDroppable=null if we were not over a droppable before this event (e.g over an empty space)
                //   droppableBelow=null if we're not over a droppable now, during this event
            
                if (currentDroppable) {
                    // the logic to process "flying out" of the droppable (remove highlight)
                    leaveDroppable(currentDroppable);
                }
                currentDroppable = droppableBelow;
                if (currentDroppable) {
                    // the logic to process "flying in" of the droppable
                    enterDroppable(currentDroppable);
                }
            }
        }
        document.addEventListener('mousemove', onMouseMove);

        // (3) drop the ball, remove unneeded handlers
        const onMouseUp = (e) => {
            clonedEl.remove();
            document.removeEventListener('mousemove', onMouseMove);
            currentEl.onmouseup = null;
        }
        clonedEl.addEventListener('mouseup', onMouseUp);
    }

    React.useEffect(() => {
        // if (containerRef) {
        //     containerRef.current.addEventListener('mousedown', onMouseDown);
        // }
        containerRef.current.addEventListener('mousedown', onMouseDown);

        return () => {
            // if (containerRef) {
            //     containerRef.current.removeEventListener('mousedown', onMouseDown);
            // }
            containerRef.current.removeEventListener('mousedown', onMouseDown);
        }
    }, []);

    return (
        <div draggable={false} ref={containerRef} className='image-gallery-container'>
            {
                content instanceof Array
                ?
                content.map((item) => {
                    return (
                        <div className='image-wrapper droppable'>
                            <img src={item} />
                        </div>
                    )
                })
                :
                null
            }
        </div>
    )
}
