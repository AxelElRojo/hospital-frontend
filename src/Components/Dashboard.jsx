import React, { useState, useEffect } from 'react';
import Stats from './Stats';
import Row from 'react-bootstrap/Row';
import Header from './Header';
import Container from 'react-bootstrap/Container';
import TopBar from './TopBar';
import fetcher from '../Util/FetchData';
import renderSelectedComponent from '../Util/RenderSelectedComponent';
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
		fetcher.especialidades(setSpecialties);
	}, []);
	const items = [patients, consultations, doctors, prescriptions];
	const fetchers = [
		() => fetcher.pacientes(setPatients, setSelPatients),
		() => fetcher.consultas(setConsultations),
		() => fetcher.doctores(setDoctors),
		() => fetcher.especialidades(setSpecialties)
	];
	return (<>
		<Header username={username} onLogout={onLogout} setEntity={setEntity} setAction={setAction}/>
		<Container>
			<Row className='p-1 my-2'>
				<TopBar/>
				<Stats/>
			</Row>
			<Row className='my-5'></Row>
			<Row>{renderSelectedComponent(entity, action, items, fetchers, specialties, selPatients)}</Row>
		</Container>
	</>);
};
export default Dashboard;