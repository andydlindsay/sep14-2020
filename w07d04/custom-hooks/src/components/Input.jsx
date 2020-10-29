import useInput from '../hooks/useInput';

const Input = () => {
  const usernameInput = useInput('');
  const passwordInput = useInput('');

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`You have logged in with username ${usernameInput.value} and password ${passwordInput.value}`);
  };

  return (
    <div>
      <h2>Login Form</h2>
      <form onSubmit={handleSubmit}>

        <label>Username:</label>
        <input
          value={usernameInput.value}
          onChange={usernameInput.onChange} 
        />
        <button type="button" onClick={usernameInput.clear}>Clear input!</button>
        <br/>

        <label>Password:</label>
        <input
          {...passwordInput}
        />
        <br/>

        <button type="submit">Login!</button>
      
      </form>
    </div>
  );
};

export default Input;
