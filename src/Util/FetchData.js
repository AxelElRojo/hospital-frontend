import requests from "./Requests";
const fetcher = {};
fetcher.pacientes = (setPatients, setSelPatients) => {
	requests.get('pacientes', {}, (response) => {
		setPatients(response.data);
		let newPatients = [];
		response.data.forEach((value) => {
			newPatients.push({'value': value.id, 'label': value.nombre + ' ' + value.apellido});
		});
		setSelPatients(newPatients);
	}, (error) => {
		console.error(error);
});
}
fetcher.consultas = (setConsultations) => {
	requests.get('consultas', {}, (response) => {
		setConsultations(response.data);
	}, (error) => {
		console.error(error);
	});
}
fetcher.doctores = (setDoctors) => {
	requests.get('doctores', {}, (response) => {
		setDoctors(response.data);
	}, (error) => {
		console.error(error);
	});
}
fetcher.especialidades = (setSpecialties) => {
	requests.get('especialidades', {}, (response) => {
		let newSpecialties = [];
		response.data.forEach((value) => {
			newSpecialties.push({'value': value.id, 'label': value.nombre});
		});
		console.log(newSpecialties);
		setSpecialties(newSpecialties);
	}, (error) => {
		console.error(error);
	});
}
export default fetcher;