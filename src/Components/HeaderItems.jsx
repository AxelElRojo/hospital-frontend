import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
const HeaderItems = () => {
	return (
		<Accordion flush className='text-uppercase text-center p-3'>
			<Accordion.Item eventKey="0" className='text-pearl bg-dark'>
				<Accordion.Header>DOCTORES</Accordion.Header>
				<Accordion.Body>
					Registrar
					<hr/>
					Buscar
				</Accordion.Body>
			</Accordion.Item>
			<Accordion.Item eventKey="1" className='text-pearl bg-dark'>
				<Accordion.Header>PACIENTES</Accordion.Header>
				<Accordion.Body>
					Registrar
					<hr/>
					Buscar
				</Accordion.Body>
			</Accordion.Item>
			<Accordion.Item eventKey="2" className='text-pearl bg-dark'>
				<Accordion.Header>CONSULTAS</Accordion.Header>
				<Accordion.Body>
					Registrar
					<hr/>
					Buscar
				</Accordion.Body>
			</Accordion.Item>
		</Accordion>
	);
}
export default HeaderItems;