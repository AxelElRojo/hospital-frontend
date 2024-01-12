import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import requests from '../Util/Requests';
const handleSubmit = (event) => {
	event.preventDefault();
	const patient = {};
	patient.nombre = event.target.elements.nombre.value;
	patient.apellido = event.target.elements.apellido.value;
	patient.telefono = event.target.elements.telefono.value;
	patient.email = event.target.elements.email.value;
	patient.direccion = event.target.elements.direccion.value;
	requests.post('pacientes', patient, (response) => {
		alert("Alta exitosa :)");
	}, (error) => {
		console.error(error);
	});
}
const PatientRegister = ({afterSubmit, width, setPhone}) => {
	return (
		<Form className={`container mx-auto ${width} p-2 rounded text-white`} onSubmit={handleSubmit}>
			<Row>
				<Form.Group className="text-start w-50" controlId="patient.nombre">
					<Form.Label>Nombres</Form.Label>
					<Form.Control type="text" className='mb-3' name='nombre'/>
				</Form.Group>
				<Form.Group className="text-start w-50" controlId="patient.apellido">
					<Form.Label>Apellidos</Form.Label>
					<Form.Control type="text" className='mb-3' name='apellido'/>
				</Form.Group>
			</Row>
			<Form.Group className="text-start" controlId="patient.telefono">
				<Form.Label>Número de teléfono</Form.Label>
				<Form.Control type="tel" className='mb-3' onChange={() => {if(setPhone) setPhone(this.value)}} name='telefono'/>
			</Form.Group>
			<Form.Group className="text-start" controlId="patient.email">
				<Form.Label>Email</Form.Label>
				<Form.Control type="email" className='mb-3' name='email'/>
			</Form.Group>
			<Form.Group className="text-start" controlId="patient.direccion">
				<Form.Label>Dirección</Form.Label>
				<Form.Control type="text" className='mb-3' name='direccion'/>
			</Form.Group>
			<Form.Group className="my-4 text-center" controlId="patient.submit">
				<Button type='submit' onClick={() => {if(afterSubmit) afterSubmit(true)}}>Registrar Paciente</Button>
			</Form.Group>
		</Form>
	);
}
export default PatientRegister;