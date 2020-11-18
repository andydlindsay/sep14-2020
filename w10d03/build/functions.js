"use strict";
const sayHello = (name, age) => {
    return `hello ${name}`;
};
const returnValue = sayHello('Carol');
const returningNothing = (num) => {
    console.log(num + num);
};
returningNothing(2);
const returningPromise = (num) => {
    return new Promise((res, rej) => {
        res(num);
    });
};
const returnValue2 = returningPromise(2);
const higherOrderFn = (cb) => {
    cb('hello');
};
higherOrderFn((title) => {
    return false;
});
