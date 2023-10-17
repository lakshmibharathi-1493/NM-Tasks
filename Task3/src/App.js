import React, { useState } from 'react';

function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
      if (username !== '' && password !== '') {
      setLoggedIn(true);
    }
  };

  return (
    <div className="App">
      {loggedIn ? (
        <div>
          <h2>Welcome, {username}!</h2>
          <p>You are logged in.</p>
        </div>
      ) : (
        <form onSubmit={handleLogin}>
          <h2>Login</h2>
          <label>
            RegisterNumber:
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </label>
          <br />
          <label>
            Password:
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <br />
          <button type="submit">Log In</button>
        </form>
      )}
    </div>
  );
}

export default App;
