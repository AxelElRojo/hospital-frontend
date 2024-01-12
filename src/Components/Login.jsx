import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
const Login = ({onLogin, setIsPatient}) => {
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
    <Form className='shadow w-25 pt-3 p-2 rounded text-white align-self-center mx-auto login-box'>
      <Form.Group className="text-start" controlId="loginForm.user">
        <Form.Label>Código de Usuario</Form.Label>
        <Form.Control type="text" className='mb-3' onChange={setUsername}/>
      </Form.Group>
      <Form.Group className="text-start" controlId="loginForm.passwd">
        <Form.Label>Contraseña</Form.Label>
        <Form.Control type="password" className='mb-3' onChange={setPassword}/>
      </Form.Group>
      <Row className='mt-5'>
        <Form.Group className="mb-3 text-center w-50" controlId="loginForm.submit">
          <Button type='submit' onClick={handleLogin}>Iniciar sesión</Button>
        </Form.Group>
        <Form.Group className="mb-3 text-center w-50" controlId="loginForm.submit" onClick={() => setIsPatient(true)}>
          <Button className='btn-secondary' type='submit'>¿Eres paciente?</Button>
        </Form.Group>
      </Row>
    </Form>
  );
};
export default Login;