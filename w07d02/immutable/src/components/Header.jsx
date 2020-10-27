// import React from 'react';

const Header = (props) => {
  console.log(props);

  const { webpageTitle } = props;

  return (
    <div>
      <h1>{webpageTitle}</h1>
    </div>
  );
};

export const helper = () => {};

export default Header;
