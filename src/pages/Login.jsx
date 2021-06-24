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

  function verifyInput() {
    const emailRegex = /^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/gm;
    return user.trim() !== '' && emailRegex.test(email);
  }


  function handleChange(event) {
    setUser(event.target.value);
    setEmail(event.target.value);
    if (verifyInput()) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }

  }


  
  return (
    <>
      <div className="login">
        <input
          type="text"
          name="user"
          placeholder="Digite seu nome"
          onChange={ (event) => handleChange(event)}
          value={ user }
        />

        <input
          type="text"
          name="email"
          placeholder="Digite seu email"
          onChange={(event) => handleChange(event)}
          value={ email }
        />
      </div>
      <Button
        className="btn"
        disabled={ isButtonDisabled }
        onClick={ setTokenToStorage }
      >
        Jogar
      </Button>
    </>
  )
}

export default Login;
