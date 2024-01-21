import React from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button, Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faPen } from '@fortawesome/free-solid-svg-icons';
import requests from '../Util/Requests';
const EntityTable = ({title, list}) => {
	function remove(entity, index, id){
		if(window.confirm('¿Estás de seguro de que quieres borrarlo?')){
			requests.delete(entity, id, (response) => {
				alert('Eliminación exitosa');
				list.splice(index, 1);
			}, (error) => console.log(error));
	
		}
	}
	list.forEach((entry, i) => {
		var id = entry.id.repeat(1);
		entry.modificacion = <Container><FontAwesomeIcon icon={faTrash} className='mx-4 hover-click' onClick={() => remove(title, i, id)}/><FontAwesomeIcon icon={faPen} className='hover-click'/></Container>
		//delete entry.id;
	});
	console.log(list);
	return (<DataTable value={list} header={<h5 className='text-start'>{title}</h5>} className='text-black tabla-lista mt-5 align-middle mx-auto text-uppercase shadow p-4'>
		{Object.keys(list[0]).map((col, i) => (
			<Column key={col} field={col} header={col} sortable/>
		))}
	</DataTable>);
}
export default EntityTable;