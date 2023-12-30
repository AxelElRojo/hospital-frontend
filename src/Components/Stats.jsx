import React, { useEffect, useState } from 'react';
import Stat from './Stat';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import requests from '../Util/Requests';
import { faUser, faUserDoctor, faCalendarCheck } from '@fortawesome/free-solid-svg-icons';
const Stats = () => {
	const [pacientes, setPacientes] = useState(-1);
	const [doctores, setDoctores] = useState(-1);
	const [consultas, setConsultas] = useState(-1);
	useEffect(() => {
		requests.get('cantidades', {}, (response) => {
			setPacientes(response.data[0].pacientes);
			setDoctores(response.data[0].doctores);
			setConsultas(response.data[0].consultas);
		}, (error) => console.log(error));
	}, []);
	return (
		<Row sm={2} md={4} lg={6} className='justify-content-center mt-5'>
			<Col className='mx-2'>
				<Stat icon={faUser} type={"Pacientes"} qty={pacientes}/>
			</Col>
			<Col className='mx-2'>
				<Stat icon={faUserDoctor} type={"Doctores"} qty={doctores}/>
			</Col>
			<Col className='mx-2'>
				<Stat icon={faCalendarCheck} type={"Consultas"} qty={consultas}/>
			</Col>
		</Row>
	);
}
export default Stats;