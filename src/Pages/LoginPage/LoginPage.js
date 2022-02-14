/* ==== React ==== */
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
/* ==== Containers & Component ==== */
import { Form, Button } from 'react-bootstrap';
import { BsCheckAll, BsPower } from 'react-icons/bs';


function LoginPage() {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const nameOwner = watch('nameOwner');
    return (
        <div className='contentPadding'>
            <h1><BsCheckAll /> Welcome to ToDo App</h1>
            <p>If you want you can register with your name or your nickname</p>
            <Form onSubmit={handleSubmit(
                localStorage.setItem('nameOwner', `${nameOwner}`)
            )}>
                <Form.Control
				    size='lg'
                    {...register('nameOwner', { required: 'This value is required',
                        minLength: {
                            value: 3,
                            message: 'Min lenght is 3.'
                        }
                    })}
                    placeholder='Name of the owner'
                />
                <p>{ errors.nameOwner?.message }</p>
                <Link to={'/app'}>
                    <Button variant='success' type='submit' size='lg'><BsPower className='iconLog' /> Login</Button>
                </Link>
            </Form>
            { ( nameOwner === undefined ) ? <br/> :
                (
                <div><hr /><p>You are registering as:</p>
                <h3>{nameOwner}</h3></div>
                )
            }
        </div>
	);
}

export default LoginPage;
