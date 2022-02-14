/* ==== React ==== */
import React, { useState, useEffect } from 'react';
import { useParams,	useNavigate } from 'react-router-dom';
/* ==== Containers & Component ==== */
import { FormUpdate, Loading } from '../../Components';
import { toast } from 'react-toastify';
import { BsCheckAll, BsArrowLeftShort } from 'react-icons/bs';
/* ==== Services ==== */
import { getName, updateName } from '../../Services/ClientAPI/ClientApi';
/* ==== Style ==== */
import css from './UpdatePage.module.css';


const UpdatePage = () => {

	const [name, setName] = useState('');
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		loadName();
	}, []);

	const params = useParams();
	const currentLications = params.id;
	let navigate = useNavigate();

	const loadName = () => {
		getName(currentLications)
		.then((res) => setName(res.data.name));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setLoading(true);
		updateName(currentLications, {name})
		.then((res) => {
			setLoading(false);
			setName('');
			toast.success(`${res.data.name} is updated`);
			navigate('/app');
		})
		.catch((err) => {
			setLoading(false);
			if (err.response.status === 400) toast.error(err.response.data);
		});
	};

	return(
		<div className='contentPadding'>
			{ loading ? <Loading /> : <h1><BsCheckAll /> ToDo Update</h1> }
			<FormUpdate
				handleSubmit={handleSubmit}
				name={name}
				placeholder={name}
				setName={setName}
			/>
			<a href='/app' className={css.back}><BsArrowLeftShort className={css.arrowBack} /> Back</a>
		</div>
	);
 }

 export default UpdatePage;
