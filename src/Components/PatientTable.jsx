import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import requests from '../Util/Requests';
const PatientTable = () => {
	const [patients, setPatients] = useState([]);
	useEffect(() => {
		requests.get('pacientes', {}, (response) => {
				setPatients(response.data);
				console.log(patients);
			}, (error) => {
				console.error(error);
			});
	}, []);
	return (<DataTable value={patients} className='text-white mt-5 align-middle mx-auto text-uppercase shadow p-5 rounded bg-secondary' tableStyle={{minWidth: '50rem'}}>
		<Column field="nombre" header="Nombre"></Column>
		<Column field="apellido" header="Apellido" sortable></Column>
		<Column field="telefono" header="Teléfono"></Column>
		<Column field="email" header="Correo"></Column>
		<Column field="direccion" header="Dirección"></Column>
	</DataTable>);
}
export default PatientTable;