import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const handleLogin = () => {
    console.log(username);
    if (username && password) {
      onLogin(username);
    } else {
      alert('Ingrese usuario y contraseña.');
    }
  };
  return (
    <Form className='shadow w-25 p-2 bg-secondary rounded text-white' onSubmit={handleLogin}>
      <Form.Group className="mb-3" controlId="loginForm.user">
        <Form.Label>Código de Usuario</Form.Label>
        <Form.Control type="text" onChange={setUsername} placeholder=""/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="loginForm.passwd">
        <Form.Label>Contraseña</Form.Label>
        <Form.Control type="password" placeholder="" onChange={setPassword}/>
      </Form.Group>
      <Form.Group className="mb-3 text-center" controlId="loginForm.submit">
        <Button type='submit'>Iniciar sesión</Button>
      </Form.Group>
    </Form>
  );
};
export default Login;