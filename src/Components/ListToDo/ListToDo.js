/* ==== React ==== */
import { Link } from 'react-router-dom';
/* ==== Containers & Component ==== */
import { BsFillTrashFill, BsFillPencilFill } from 'react-icons/bs';
/* ==== Style ====*/
import css from './ListToDo.module.css';
/* ==== Props ==== */
import PropTypes from 'prop-types';


const ListToDo = props => {
    const { names, handleRemove } = props;
    return (
        <>
            { names && names.map((item) => (
                <div key={item.id} className={css.todo}>
                    <div className={css.todoColText}>
                        <h4>{item.title}</h4>
                    </div>
                    <div className={css.todoColInput}>
                        <Link to={`/update/${item.id}`}>
                            <BsFillPencilFill className={css.icon} />
                        </Link>
                        <span onClick={() => handleRemove(item.id, item.title)}>
                            <BsFillTrashFill className={css.delete} />
                        </span>
                    </div>
                </div>
            ))}
        </>
    );
}

ListToDo.defaultProps = {
    names: null,
};

const { array } = PropTypes;

ListToDo.propTypes = {
    names: array,
};

export default ListToDo;