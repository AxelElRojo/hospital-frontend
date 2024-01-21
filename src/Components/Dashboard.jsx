import React, { useState, useEffect } from 'react';
import Stats from './Stats';
import Row from 'react-bootstrap/Row';
import Header from './Header';
import Container from 'react-bootstrap/Container';
import PatientRegister from './PatientRegister';
import DoctorRegister from './DoctorRegister';
import ConsultationRegister from './ConsultationRegister';
import EntityTable from './EntityTable';
import TopBar from './TopBar';
import fetcher from '../Util/FetchData';
function renderEntity(entity, action, items, specialties, selPatients){
	switch(entity){
		case 'patient':
			if(action === 'new')
				return <PatientRegister width='w-50'/>;
			else if(action === 'search')
				return <EntityTable title="pacientes" list={items[0]}/>;
		break;
		case 'consultation':
			if(action === 'new')
				return <ConsultationRegister specialties={specialties} patients={selPatients}/>;
			else if(action === 'search')
				return <EntityTable title="consultas" list={items[1]}/>;
		break;
		case 'doctor':
			if(action === 'new')
				return <DoctorRegister specialties={specialties}/>;
			else if(action === 'search')
				return <EntityTable title="doctores" list={items[2]}/>;
		break;
		case 'prescription':
			if(action === 'new')
				return <PatientRegister/>;
			else if(action === 'search')
				return <EntityTable title="recetas" list={items[3]}/>;
		break;
		default:
			return <></>;
	}
	return <></>;
}
const Dashboard = ({ username, onLogout }) => {
	const [entity, setEntity] = useState('');
	const [action, setAction] = useState('');
	const [patients, setPatients] = useState([]);
	const [consultations, setConsultations] = useState([]);
	const [doctors, setDoctors] = useState([]);
	const [prescriptions, setPrescriptions] = useState([]);
	const [specialties, setSpecialties] = useState([]);
	const [selPatients, setSelPatients] = useState([]);
	useEffect(() => {
		fetcher.pacientes(setPatients, setSelPatients);
		fetcher.consultas(setConsultations);
		fetcher.doctores(setDoctors);
		fetcher.specialties(setSpecialties);
	}, []);
	return (<>
		<Header username={username} onLogout={onLogout} setEntity={setEntity} setAction={setAction}/>
		<Container>
			<Row className='p-1 my-2'>
				<TopBar/>
				<Stats/>
			</Row>
			<Row className='my-5'></Row>
			<Row>{renderEntity(entity, action, [patients, consultations, doctors, prescriptions], specialties, selPatients)}</Row>
		</Container>
	</>);
};
export default Dashboard;