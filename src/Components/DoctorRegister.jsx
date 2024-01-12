import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import requests from '../Util/Requests';
import Select from 'react-select';
const handleSubmit = (event) => {
	event.preventDefault();
	const doctor = {};
	doctor.nombre = event.target.elements.nombre.value;
	doctor.apellido = event.target.elements.apellido.value;
	doctor.telefono = event.target.elements.telefono.value;
	doctor.email = event.target.elements.email.value;
	doctor.direccion = event.target.elements.direccion.value;
	requests.post('doctores', doctor, (response) => {
		alert("Alta exitosa :)");
	}, (error) => {
		console.error(error);
	});
}
const DoctorRegister = ({specialties}) => {
	return (
		<Form className='container mx-auto w-50 p-2 rounded text-white' onSubmit={handleSubmit}>
			<Row>
				<Form.Group className="text-start w-50" controlId="doctor.nombre">
					<Form.Label>Nombres</Form.Label>
					<Form.Control type="text" className='mb-3' name='nombre'/>
				</Form.Group>
				<Form.Group className="text-start w-50" controlId="doctor.apellido">
					<Form.Label>Apellidos</Form.Label>
					<Form.Control type="text" className='mb-3' name='apellido'/>
				</Form.Group>
			</Row>
			<Form.Group className="text-start" controlId="doctor.telefono">
				<Form.Label>Número de teléfono</Form.Label>
				<Form.Control type="tel" className='mb-3' name='telefono'/>
			</Form.Group>
			<Form.Group className="text-start" controlId="doctor.email">
				<Form.Label>Email</Form.Label>
				<Form.Control type="email" className='mb-3' name='email'/>
			</Form.Group>
			<Form.Group className="text-start" controlId="doctor.direccion">
				<Form.Label>Dirección</Form.Label>
				<Form.Control type="text" className='mb-3' name='direccion'/>
			</Form.Group>
			<Form.Group className="text-start" controlId="doctor.especialidad">
				<Form.Label>Especialidad</Form.Label>
				<Select className='text-black' options={specialties} name='especialidad'/>
			</Form.Group>
			<Form.Group className="my-4 text-center" controlId="doctor.submit">
				<Button type='submit'>Registrar Doctor</Button>
			</Form.Group>
		</Form>
	);
}
export default DoctorRegister;