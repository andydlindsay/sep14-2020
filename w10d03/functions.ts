const sayHello = (name: string, age?: number): boolean | string => {
  return `hello ${name}`;
};

const returnValue = sayHello('Carol');

const returningNothing = (num: number): void => {
  console.log(num + num);
};

returningNothing(2);

const returningPromise = (num: number): Promise<number> => {
  return new Promise((res, rej) => {
    res(num);
  });
};

const returnValue2 = returningPromise(2);

const higherOrderFn = (cb: (a: string) => boolean): void => {
  cb('hello');
};

higherOrderFn((title: string) => {
  return false;
});
