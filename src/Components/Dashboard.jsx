import React, { useState } from 'react';
import Stats from './Stats';
import Row from 'react-bootstrap/Row';
import Header from './Header';
import Container from 'react-bootstrap/Container';
import PatientRegister from './PatientRegister';
import PatientTable from './PatientTable';
function renderEntity(entity, action){
	switch(entity){
		case 'patient':
			return action === 'new' ? <PatientRegister/> : action === 'search' ? <PatientTable/> : <></>
		case 'consultation':
			return <></>//action === 'new' ? <ConsultationRegister/> : action === 'search' ? <ConsultationTable/> : <></>
		case 'doctor':
			return <></>//action === 'new' ? <DoctorRegister/> : action === 'search' ? <DoctorTable/> : <></>
		case 'prescription':
			return <></>//action === 'new' ? <PrescriptionRegister/> : action === 'search' ? <PrescriptionTable/> : <></>
		default:
			return <></>//action === 'new' ? <PatientRegister/> : action === 'search' ? <PatientTable/> : <></>
	}
}
const Dashboard = ({ username, onLogout }) => {
	const [entity, setEntity] = useState('');
	const [action, setAction] = useState('');
	return (<>
		<Header username={username} onLogout={onLogout} setEntity={setEntity} setAction={setAction}/>
		<Container>
			<Row className='p-1 my-2'>
				<Stats/>
			</Row>
			<Row className='my-5'></Row>
			<Row>{renderEntity(entity, action)}</Row>
		</Container>
	</>);
};
export default Dashboard;