/* ==== Constant ==== */
import { todoApp } from '../../Constant/Constant';
/* ==== Axios ==== */
import axios from 'axios';

export const getNames = async () => {
	return await axios.get(todoApp)
};

export const createName = async (name) => {
	return await axios.post(todoApp, name)
};

export const getName = async (id) => {
	return await axios.get(`${todoApp}${id}`)
};

export const removeName = async (id) => {
	return await axios.delete(`${todoApp}${id}`)
};

export const updateName = async (id, name) => {
	return await axios.put(`${todoApp}${id}`, name)
};
