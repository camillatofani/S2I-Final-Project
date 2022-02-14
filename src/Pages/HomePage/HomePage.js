/* ==== React ==== */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
/* ==== Containers & Component ==== */
import { Button } from 'react-bootstrap';
import { FormAdd, Loading, ListToDo } from '../../Components';
import { toast } from 'react-toastify';
import { BsCheckAll, BsPower } from 'react-icons/bs';
/* ==== Services ==== */
import { getNames, createName, removeName } from '../../Services/ClientAPI/ClientApi';


const HomePage = () => {
	const [name, setName] = useState('');
	const [loading, setLoading] = useState(false);
	const [names, setNames] = useState([]);

	useEffect(() => {
		loadNames();
	}, [])

	const loadNames = () => {
		getNames()
		.then((res) => setNames(res.data));
	}

	const handleSubmit = (e) => {
		e.preventDefault();
		setLoading(true);
		createName({ name })
		.then((res) => {
			setLoading(false);
			setName('');
			toast.success(`${res.data.name} is created`);
			loadNames();
		})
		.catch((err) => {
			setLoading(false);
			if (err.response.status === toast.error(err.response.data));
		});
	};

	const handleRemove = (id, name) => {
		if (window.confirm(`Are your sure wanted to delete ${name}?`)) {
			setLoading(true);
			removeName(id)
				.then((res) => {
				setLoading(false);
				toast.error(`${name} is deleted`);
				loadNames();
			})
			.catch((err) => {
				if (err.response.status === 400) {
					setLoading(false);
					toast.error(err.response.data);
				}
			});
		}
	};

	const nameOwnerApp = localStorage.getItem('nameOwner');

	return (
		<div className='contentPadding'>
			{ loading ? ( <Loading /> ) : (
				<>
					<h1><BsCheckAll /> ToDo
						{ ( nameOwnerApp === 'undefined' ) ? 
							( <span> of Stranger</span>) :
							( <span>  of {nameOwnerApp}</span> )
						}
					</h1>
					<FormAdd
						handleSubmit={handleSubmit}
						name={name}
						setName={setName}
					/>
					<ListToDo names={names} handleRemove={handleRemove} />
					<Link to={'/'}>
						<Button variant='danger' type='submit' size='lg'><BsPower className='iconLog' /> Logout</Button>
					</Link>
				</>
			)}
		</div>
	);
}

export default HomePage;
