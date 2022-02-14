/* ==== Containers & Component ==== */
import { Form, Button } from 'react-bootstrap';


const FormUpdate = ({handleSubmit, name, setName}) => {
	return (
		<>
			<Form onSubmit={handleSubmit} className='todoForm'>
				<Form.Control
					size='lg'
					type='text'
					placeholder='Update the ToDo'
					value={name}
					onChange={(e) => setName(e.target.value)}
					autoFocus
					required
					className='itemTodoForm'
				/>
				<Button	className='itemTodoForm' variant='success' type='submit' size='lg'>
					Update
				</Button>
			</Form>
		</>
	);
}

export default FormUpdate;
