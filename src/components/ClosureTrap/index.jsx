import React, { useState } from 'react';

export const ClosureTrap = ({ children }) => {
    const [value, setValue] = useState(1)

    const log = () => {
      setTimeout(() => {
        alert(value)
      }, 3000);
    }
  
    return (
      <div>
        <p>FunctionComponent</p>
        <div>value: {value}</div>
        <button onClick={log}>alert</button>
        <button onClick={() => setValue(value + 1)}>add</button>
      </div>
    )
}

