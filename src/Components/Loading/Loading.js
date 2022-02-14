/* ==== React ==== */
import React from 'react';
/* ==== Containers & Component ==== */
import Loader from './Loader';
/* ==== Style ====*/
import css from './Loading.module.css';


const Loading = () => {
	return (
		<div className={css.loading}>
			<Loader />
		</div>

	);
}

export default Loading;
