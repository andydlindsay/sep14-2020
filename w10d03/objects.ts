// const User = class {
//   constructor(name, password) {
//     this.name = name;
//     this.password = password;
//     this.loggedIn = false;
//   }

//   login() {
//     this.loggedIn = true;
//   }
// };

interface IUser {
  id?: number;
  name: string;
  password: string;
  avatarUrl: string;
  created_at?: Date;
  friend: IFriend;
  friends?: (number | string | IFriend)[];
}

interface IFriend {
  id?: number;
  deepDarkSecret: boolean;
  voice: string;
}

const myObj: IUser = {
  name: 'Andy',
  password: '1234',
  avatarUrl: '12312341241.jpg',
  friend: { deepDarkSecret: false, voice: 'light' }
};

const myObjCopy: IUser = { ...myObj, name: 'Carol' };

const myUsers: IUser[] = [];

myUsers.push(myObj);
// myUsers.push({ name: 'Bob' });
