import { Button, Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faPen } from '@fortawesome/free-solid-svg-icons';
import requests from '../Util/Requests';
function remove(entity, id, afterSubmit){
	console.log(id);
	if(window.confirm('¿Estás de seguro de que quieres borrarlo?')){
		requests.delete(entity, id, (response) => {
			afterSubmit();
			alert('Eliminación exitosa');
		}, (error) => console.log(error));
	}
}
const EntityManage = ({id, type, afterSubmit}) => {
	return (<Container>
		<FontAwesomeIcon icon={faTrash} className='mx-4 hover-click' onClick={() => remove(type, id, afterSubmit)}/>
		<FontAwesomeIcon icon={faPen} className='hover-click'/>
	</Container>);
}
export default EntityManage;