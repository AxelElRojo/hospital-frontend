import axios from "axios";
const requests = {};
requests.post = (endpoint, data, onSuccess, onError) => {
	axios({
		method: 'post',
		url: `${process.env.REACT_APP_API_PROTOCOL}://${process.env.REACT_APP_API_ROOT}:${process.env.REACT_APP_API_PORT}/${endpoint}`,
		data: data
	}).then(onSuccess).catch(onError);
}
requests.get = (endpoint, data, onSuccess, onError) => {
	axios({
		method: 'get',
		url: `${process.env.REACT_APP_API_PROTOCOL}://${process.env.REACT_APP_API_ROOT}:${process.env.REACT_APP_API_PORT}/${endpoint}`,
		data: data
	}).then(onSuccess).catch(onError);
}
requests.delete = (endpoint, id, onSuccess, onError) => {
	axios({
		method: 'delete',
		url: `${process.env.REACT_APP_API_PROTOCOL}://${process.env.REACT_APP_API_ROOT}:${process.env.REACT_APP_API_PORT}/${endpoint}/${id}`,
	}).then(onSuccess).catch(onError);
}
requests.put = (endpoint, data, onSuccess, onError) => {
	axios({
		method: 'put',
		url: `${process.env.REACT_APP_API_PROTOCOL}://${process.env.REACT_APP_API_ROOT}:${process.env.REACT_APP_API_PORT}/${endpoint}`,
		data: data
	}).then(onSuccess).catch(onError);
}
export default requests;