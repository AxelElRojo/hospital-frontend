import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
const HeaderItems = ({setEntity, setAction}) => {
	return (
		<Accordion flush className='text-uppercase text-center p-3' data-bs-theme="dark">
			<Accordion.Item eventKey="0">
				<Accordion.Header onClick={() => setEntity('doctor')}>DOCTORES</Accordion.Header>
				<Accordion.Body>
					<p className='hover-click' onClick={() => setAction('new')}>Registrar</p>
					<hr/>
					<p className='hover-click' onClick={() => setAction('search')}>Buscar</p>
				</Accordion.Body>
			</Accordion.Item>
			<Accordion.Item eventKey="1">
				<Accordion.Header onClick={() => setEntity('patient')}>PACIENTES</Accordion.Header>
				<Accordion.Body>
					<p className='hover-click' onClick={() => setAction('new')}>Registrar</p>
					<hr/>
					<p className='hover-click' onClick={() => setAction('search')}>Buscar</p>
				</Accordion.Body>
			</Accordion.Item>
			<Accordion.Item eventKey="2">
				<Accordion.Header onClick={() => setEntity('consultation')}>CONSULTAS</Accordion.Header>
				<Accordion.Body>
					<p className='hover-click' onClick={() => setAction('new')}>Registrar</p>
					<hr/>
					<p className='hover-click' onClick={() => setAction('search')}>Buscar</p>
				</Accordion.Body>
			</Accordion.Item>
		</Accordion>
	);
}
export default HeaderItems;