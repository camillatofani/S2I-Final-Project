/* ==== Containers & Component ==== */
import { Form, Button } from 'react-bootstrap';


const FormAdd = ({handleSubmit, name, setName}) => {
	return (
		<Form onSubmit={handleSubmit} className='todoForm'>
			<Form.Control
				size='lg'
				type='text'
				placeholder='Enter new ToDo'
				value={name}
				onChange={(e) => setName(e.target.value)}
				autoFocus
				className='itemTodoForm'
			/>
			<Button	className='itemTodoForm' variant='success' type='submit' size='lg'>
				Add
			</Button>
			<Button	className='itemTodoForm' variant='dark' type='submit'  size='lg'
				onClick={() => setName('')}>
				Cancel
			</Button>
		</Form>
	);
}

export default FormAdd;
