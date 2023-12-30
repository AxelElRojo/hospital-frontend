import React from 'react';
import Stats from './Stats';
import Row from 'react-bootstrap/Row';
import Header from './Header';
import Container from 'react-bootstrap/Container';
import PatientRegister from './PatientRegister';
import PatientTable from './PatientTable';
const Dashboard = ({ username, onLogout }) => {
  return (
    <>
      <Header username={username} onLogout={onLogout}/>
      <Container>
        <Row className='p-1 my-2'>
          <Stats/>
        </Row>
        <Row>
          <PatientTable/>
        </Row>
      </Container>
    </>
  );
};
export default Dashboard;