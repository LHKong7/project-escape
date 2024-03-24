export const myPromise = () => new Promise((resolve, reject) => {
    setTimeout(() => {
        reject('Success!');
    }, 2500);
    console.log("isMyPromise still execute")
    return;
});

