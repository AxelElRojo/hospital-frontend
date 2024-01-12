import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import VisitedPreviously from './VisitedPreviously';
import PatientRegister from './PatientRegister';
import PublicConsultationRegister from './PublicConsultationRegister';
const PublicConsultation = () => {
	const [visitedPreviously, setVisitedPreviously] = useState(null);
	const [phone, setPhone] = useState("");
	return (
		<Container className='shadow login-box align-self-center mx-auto w-25 p-2 rounded text-white'>
			{visitedPreviously === null ?
				<VisitedPreviously setVisitedPreviously={setVisitedPreviously} setPhone={setPhone}/>
				: (visitedPreviously ?
				<PublicConsultationRegister phone={phone}/>
				:
				<PatientRegister afterSubmit={setVisitedPreviously} width='w-75'/>)
			}
		</Container>
	);
}
export default PublicConsultation;