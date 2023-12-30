import React from 'react';
import NavDropdown from 'react-bootstrap/NavDropdown';
const HeaderEntity = ({title}) => {
	return (
		<NavDropdown title={title} className='bg-dark text-uppercase text-white text-center' flush>
			<NavDropdown.Item href="#" className="text-pearl bg-dark">Registrar</NavDropdown.Item>
			<NavDropdown.Item href="#" className="text-pearl bg-dark">Buscar</NavDropdown.Item>
		</NavDropdown>
	);
}
export default HeaderEntity;