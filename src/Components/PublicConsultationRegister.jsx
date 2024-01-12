import { useEffect, useState } from 'react';
import React from 'react';
import {Form, Button, Row} from 'react-bootstrap';
import Select from 'react-select';
import requests from '../Util/Requests';
import ReCAPTCHA from 'react-google-recaptcha';
const PublicConsultationRegister = ({phone}) => {
	const [specialties, setSpecialties] = useState([]);
	useEffect( () => {
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
	return (
		<Form>
			<Form.Group className="text-start" controlId="patient.telefono">
				<Form.Label>Número de teléfono</Form.Label>
				<Form.Control type="tel" value={phone} className='mb-3' name='telefono'/>
			</Form.Group>
			<Form.Group className="text-start mb-3" controlId="consultation.especialidad">
				<Form.Label>Tipo</Form.Label>
				<Select className='text-black' options={specialties} name='especialidad'/>
			</Form.Group>
			<Form.Group className="text-start" controlId="consultation.razon">
				<Form.Label>Razón</Form.Label>
				<Form.Control type="text" className='mb-3' name='razon'/>
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
			<Form.Group className="my-4" controlId="consultation.captcha">
				<ReCAPTCHA className='mx-auto' sitekey={process.env.REACT_APP_GOOGLE_SITEKEY}/>
			</Form.Group>
			<Form.Group className="my-4 text-center" controlId="consultation.submit">
				<Button type='submit'>Agendar Consulta</Button>
			</Form.Group>
		</Form>
	);
}
export default PublicConsultationRegister;