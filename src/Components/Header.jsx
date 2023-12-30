import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import HeaderItems from './HeaderItems';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { Container } from 'react-bootstrap';
const Header = ({onLogout}) => {
	return (
		<Navbar className="d-flex bg-dark shadow" fixed="left">
			<Nav className='d-inline-flex flex-column gap-5 justify-content-around'>
				<Navbar.Brand href="#home" className='text-center mx-auto fs-3 align-self-start text-pearl'>
					MED-SYS
				</Navbar.Brand>
				<Container className='py-4 my-5'>
					<HeaderItems/>
				</Container>
				<FontAwesomeIcon onClick={onLogout} icon={faRightFromBracket} className='hover-click text-pearl' size='2xl'/>
			</Nav>
	  	</Navbar>
	);
}
export default Header;