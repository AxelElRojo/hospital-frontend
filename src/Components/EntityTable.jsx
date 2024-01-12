import React from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
const EntityTable = ({title, list}) => {
	console.log(list);
	return (<DataTable value={list} header={<h5 className='text-start'>{title}</h5>} className='text-black tabla-lista mt-5 align-middle mx-auto text-uppercase shadow p-4'>
		{Object.keys(list[0]).map((col, i) => (
			<Column key={col} field={col} header={col} sortable/>
		))}
	</DataTable>);
}
export default EntityTable;