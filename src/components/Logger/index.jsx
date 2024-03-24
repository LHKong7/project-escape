import { useState, useEffect } from "react";
const Logger = (function (){
    let _logMsg = ''; // dacbac
    console.log('x'); 
    return (msg) => msg ? _logMsg=`${_logMsg}${msg}` : _logMsg;
})();

export const Test = () => {
    const [count, setCount] = useState(0);
    Logger('a');

    useEffect(() => {
        Logger('b');

        const i = setInterval(() => {
            setCount((count) => count + 1);
            
            if (count<3){
                Logger(count);
            }
        }, 1000);

        return ()=>{
            clearInterval(i);
        }
    }, []);

    Logger('c');

    console.log(Logger()); 
        
    return <span>{`${count}`}</span>;
};

Logger('d');
