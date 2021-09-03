import todolist from '../css/todolist.module.css';
import todoitem from '../css/todoitem.module.css';

function TodoItem({ todo, removeTodo }) {
  return (
    <li className={todoitem['todo-item']}>
      <input type="checkbox" className={todoitem.check} />
      <mark className={todoitem.text}>{todo.todoContent}</mark>
      <button
        type="button"
        className={todoitem.del}
        onClick={function () {
          return removeTodo(todo.id);
        }}
      >
        <img src="add_button.svg" alt="" className={todoitem.img} />
      </button>
    </li>
  );
}

function TodoList({ todoArray, removeTodo }) {
  return (
    <section className={todolist.section}>
      <ul className="todo-list">
        {todoArray.map(function (todo) {
          return <TodoItem todo={todo} key={todo.id} removeTodo={removeTodo} />;
        })}
      </ul>
    </section>
  );
}

export default TodoList;
