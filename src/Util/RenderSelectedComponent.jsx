import PatientRegister from '../Components/PatientRegister';
import DoctorRegister from '../Components/DoctorRegister';
import ConsultationRegister from '../Components/ConsultationRegister';
import EntityTable from '../Components/EntityTable';
function renderSelectedComponent(entity, action, items, fetchers, specialties, selPatients){
	switch(entity){
		case 'patient':
			if(action === 'new')
				return <PatientRegister width='w-50' afterSubmit={fetchers[0]}/>;
			else if(action === 'search')
				return <EntityTable title="pacientes" afterSubmit={fetchers[0]} list={items[0]}/>;
		break;
		case 'consultation':
			if(action === 'new')
				return <ConsultationRegister afterSubmit={fetchers[1]} specialties={specialties} patients={selPatients}/>;
			else if(action === 'search')
				return <EntityTable title="consultas" afterSubmit={fetchers[1]} list={items[1]}/>;
		break;
		case 'doctor':
			if(action === 'new')
				return <DoctorRegister afterSubmit={fetchers[2]} specialties={specialties}/>;
			else if(action === 'search')
				return <EntityTable title="doctores" afterSubmit={fetchers[2]} list={items[2]}/>;
		break;
		case 'prescription':
			if(action === 'new')
				return <PatientRegister/>;
			else if(action === 'search')
				return <EntityTable title="recetas" afterSubmit={fetchers[3]} list={items[3]}/>;
		break;
		default:
			return <></>;
	}
	return <></>;
}
export default renderSelectedComponent;