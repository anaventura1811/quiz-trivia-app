import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Button from '../components/Button';

function Login() {
  const [user, setUser] = useState('');
  const [email, setEmail] = useState('');
  const [isButtonDisabled, setButtonDisabled] = useState(true);
  const [tokenId, setToken] = useState('');

  const history = useHistory();

  useEffect(() => {
    handleToken();
  }, []);

  useEffect(() => {
    const emailRegex = /^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/gm;
    if (user.trim() !== '' && emailRegex.test(email)) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [user, email])

  async function handleToken() {
    const request = await fetch('https://opentdb.com/api_token.php?command=request');
    const data = await request.json();
    const { token } = data;
    setToken(token);
  }

  async function setTokenToStorage(event) {
    event.preventDefault();
    localStorage.setItem('token', tokenId);
    // disparar actions --> 
    history.push('/game');
  }

  return (
    <>
      <div className="login">
        <input
          type="text"
          name="user"
          placeholder="Digite seu nome"
          onChange={  (event) => setUser(event.target.value) }
          value={ user }
        />

        <input
          type="text"
          name="email"
          placeholder="Digite seu email"
          onChange={(event) => setEmail(event.target.value)}
          value={ email }
        />
      </div>
      <Button
        className="btn"
        disabled={ isButtonDisabled }
        onClick={ (event) => setTokenToStorage(event) }
      >
        Jogar
      </Button>
    </>
  )
}

export default Login;
