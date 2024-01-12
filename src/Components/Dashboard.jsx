import React, { useState, useEffect } from 'react';
import requests from '../Util/Requests';
import Stats from './Stats';
import Row from 'react-bootstrap/Row';
import Header from './Header';
import Container from 'react-bootstrap/Container';
import PatientRegister from './PatientRegister';
import DoctorRegister from './DoctorRegister';
import ConsultationRegister from './ConsultationRegister';
import EntityTable from './EntityTable';
import TopBar from './TopBar';
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
		requests.get('pacientes', {}, (response) => {
				setPatients(response.data);
				let newPatients = [];
				response.data.forEach((value) => {
					newPatients.push({'value': value.id, 'label': value.nombre + ' ' + value.apellido});
				});
				setSelPatients(newPatients);
			}, (error) => {
				console.error(error);
		});
		requests.get('consultas', {}, (response) => {
				setConsultations(response.data);
			}, (error) => {
				console.error(error);
		});
		requests.get('doctores', {}, (response) => {
				setDoctors(response.data);
			}, (error) => {
				console.error(error);
		});
		requests.get('especialidades', {}, (response) => {
			let newSpecialties = [];
			response.data.forEach((value) => {
				newSpecialties.push({'value': value.id, 'label': value.nombre});
			});
			console.log(newSpecialties);
			setSpecialties(newSpecialties);
		}, (error) => {
			console.error(error);
		});
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