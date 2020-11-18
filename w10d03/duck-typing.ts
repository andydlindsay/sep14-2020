interface INewUser {
  username: string;
  password: string;
}

const login = (user: INewUser): boolean => {
  user.username;
  return true;
};

const myUser = {
  username: 'Dean',
  password: '1234',
  extraValue: 'something'
};

login(myUser);
