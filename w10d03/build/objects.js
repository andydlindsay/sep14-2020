"use strict";
// const User = class {
//   constructor(name, password) {
//     this.name = name;
//     this.password = password;
//     this.loggedIn = false;
//   }
const myObj = {
    name: 'Andy',
    password: '1234',
    avatarUrl: '12312341241.jpg',
    friend: { deepDarkSecret: false, voice: 'light' }
};
const myObjCopy = Object.assign(Object.assign({}, myObj), { name: 'Carol' });
const myUsers = [];
myUsers.push(myObj);
// myUsers.push({ name: 'Bob' });
