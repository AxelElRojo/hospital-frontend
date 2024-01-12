import React from 'react';
import Form from 'react-bootstrap/Form';
import {Row, Button} from 'react-bootstrap'
const VisitedPreviously = ({setVisitedPreviously}) => {
	return (
		<Form.Group className="text-start mx-auto" controlId="loginForm.user">
			<Form.Label>¿Has venido antes con nosotros?</Form.Label>
			<Row className='mx-auto text-center'>
				<Form.Group className="mx-auto mb-3 w-50">
					<Button onClick={() => setVisitedPreviously(true)}>Sí</Button>
				</Form.Group>
				<Form.Group className="mx-auto mb-3 w-50">
					<Button className='btn-danger' onClick={() => setVisitedPreviously(false)}>No</Button>
				</Form.Group>
			</Row>
		</Form.Group>
	);
}
export default VisitedPreviously;