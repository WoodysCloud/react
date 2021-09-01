import todoitem from '../css/todoitem.module.css';

function TodoItem() {

    return(
        <li className={todoitem['todo-item']}>
            <input type="checkbox" className={todoitem.check} />
            <mark className={todoitem.text}>할일 todo</mark>
            <button type="button" className={todoitem.del}>
                <img src="add_button.svg" alt="" className={todoitem.img} />
            </button>
        </li>
    );

}

export default TodoItem;