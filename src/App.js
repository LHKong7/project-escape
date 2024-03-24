import React, { useEffect } from 'react';

import './App.css';

// Layout:
import { InfiniteLayout } from './layouts/InfiniteLayout';
import { HorizontalCenterLayout } from './layouts/horizontalCenter';
import { TwoColumns } from './layouts/TwoColumns';
// import { CustomLayouts } from './components/customLayouts';
// import { Test } from './components/Logger';
// import { ScrollContainer } from './components/scrollContainer';
import Counter from './components/Counter';
import { PositionedElement } from './components/PositionedElement';

import { BFC } from './meaninglessComps/BFC';
import { FloatLayout } from './meaninglessComps/Float';
import { BorderTriangle } from './meaninglessComps/BorderTriangle';
import { ClosureTrap } from './components/ClosureTrap';
import { PickThemeComp } from './components/PickThemeComp';
import { ImageGallery } from './components/ImageGallery';

// images:
import homer from './assets/homer.png';
import marge from './assets/marge.png';
import bart from './assets/bart.png';
import lisa from './assets/lisa.png';
import maggie from './assets/maggie.png';


function App() {
  
  // const rqf = () => {
  //   console.log("Rerendering")
  // }

  // useEffect(() => {
  //   window.addEventListener('requestAnimationFrame', rqf);

  //   return (
  //     window.removeEventListener('requestAnimationFrame', rqf)
  //   )
  // }, [])

  return (
    <ImageGallery content={[homer, marge, bart, lisa, maggie]} />
  );
}

export default App;
