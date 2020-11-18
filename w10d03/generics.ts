interface IContainer<A, B> {
  title: string;
  content: A;
  somethingElse: B;
}

const stringContainer: IContainer<string, number> = {
  title: 'string container',
  content: 'something',
  somethingElse: 7
};

// const numberContainer: IContainer<number> = {
//   title: 'number container',
//   content: 42
// };
