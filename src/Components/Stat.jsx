import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const Stat = ({icon, type, qty}) => {
	return (
		<Row className='py-3 vw-max-50 rounded bg-black text-pearl'>
			<Col md={1} className='d-inline-flex align-items-center ms-3'>
				<FontAwesomeIcon icon={icon} className='text-pearl' size='2xl'/>
			</Col>
			<Col className='text-center mx-3'>
				<strong className='text-uppercase'>{type}</strong>
				<br/>
				{qty}
			</Col>
		</Row>
	);
}
export default Stat;