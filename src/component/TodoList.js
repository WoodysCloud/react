import todolist from '../css/todolist.module.css';

function TodoList({children}) {

    return(
        <section className={todolist.section}>
            <ul className="todo-list">
                {children}
            </ul>
        </section>
    );

}

export default TodoList;