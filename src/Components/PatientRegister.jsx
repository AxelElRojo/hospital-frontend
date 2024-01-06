import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import requests from '../Util/Requests';
const handleSubmit = (event) => {
	event.preventDefault();
	const patient = {};
	patient.name = event.target.elements.name.value;
	patient.lastname = event.target.elements.lastname.value;
	patient.tel = event.target.elements.tel.value;
	patient.email = event.target.elements.email.value;
	patient.address = event.target.elements.address.value;
	requests.post('pacientes', patient, (response) => {
		alert("Alta exitosa :)");
	}, (error) => {
		console.error(error);
	});
}
const PatientRegister = () => {
	return (
		<Form className='mx-auto w-50 p-2 rounded text-white' onSubmit={handleSubmit}>
			<Form.Group className="text-start" controlId="patient.nombre">
				<Form.Label>Nombres</Form.Label>
				<Form.Control type="text" className='mb-3' name='nombre'/>
			</Form.Group>
			<Form.Group className="text-start" controlId="patient.apellido">
				<Form.Label>Apellidos</Form.Label>
				<Form.Control type="text" className='mb-3' name='apellido'/>
			</Form.Group>
			<Form.Group className="text-start" controlId="patient.telefono">
				<Form.Label>Número de teléfono</Form.Label>
				<Form.Control type="tel" className='mb-3' name='telefono'/>
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
				<Button type='submit'>Registrar Paciente</Button>
			</Form.Group>
		</Form>
	);
}
export default PatientRegister;