import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import HeaderItems from './HeaderItems';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { Container } from 'react-bootstrap';
const Header = ({onLogout, setEntity, setAction}) => {
	return (
		<Navbar className="d-flex bg-dark shadow" fixed="left">
			<Nav className='flex-column justify-content-between vh-100 py-5'>
				<Navbar.Brand onClick={() => {setEntity(''); setAction('')}} className='hover-click text-center mx-auto fs-3 text-pearl'>
					MED-SYS
				</Navbar.Brand>
				<Container>
					<HeaderItems setEntity={setEntity} setAction={setAction}/>
				</Container>
				<FontAwesomeIcon onClick={onLogout} icon={faRightFromBracket} className='hover-click text-pearl ' size='2xl'/>
			</Nav>
	  	</Navbar>
	);
}
export default Header;