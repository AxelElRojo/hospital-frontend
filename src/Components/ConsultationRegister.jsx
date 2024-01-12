import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import requests from '../Util/Requests';
import Select from 'react-select';
const handleSubmit = (event) => {
	event.preventDefault();
	const consultation = {};
	consultation.paciente = event.target.elements.paciente.value;
	consultation.fecha = event.target.elements.fecha.value;
	consultation.hora = event.target.elements.hora.value;
	consultation.especialidad = event.target.elements.especialidad.value;
	consultation.razon = event.target.elements.razon.value;
	requests.post('consultas', consultation, (response) => {
		alert("Alta exitosa :)");
	}, (error) => {
		console.error(error);
	});
}
const ConsultationRegister = ({specialties, patients}) => {
	return (
		<Form className='container mx-auto w-50 p-2 rounded text-white' onSubmit={handleSubmit}>
			<Form.Group className="text-start mb-3" controlId="consultation.paciente">
				<Form.Label>Paciente</Form.Label>
				<Select className='text-black' name='paciente' options={patients}/>
			</Form.Group>
			<Row>
				<Form.Group className="text-start w-50" controlId="consultation.date">
					<Form.Label>Fecha</Form.Label>
					<Form.Control type="date" className='mb-3' name='fecha'/>
				</Form.Group>
				<Form.Group className="text-start w-50" controlId="consultation.time">
					<Form.Label>Hora</Form.Label>
					<Form.Control type="time" className='mb-3' name='hora'/>
				</Form.Group>
			</Row>
			<Form.Group className="text-start mb-3" controlId="consultation.especialidad">
				<Form.Label>Especialidad</Form.Label>
				<Select className='text-black' options={specialties} name='especialidad'/>
			</Form.Group>
			<Form.Group className="text-start" controlId="consultation.razon">
				<Form.Label>Razón</Form.Label>
				<Form.Control type="text" className='mb-3' name='razon'/>
			</Form.Group>
			<Form.Group className="my-4 text-center" controlId="doctor.submit">
				<Button type='submit'>Agendar Consulta</Button>
			</Form.Group>
		</Form>
	);
}
export default ConsultationRegister;