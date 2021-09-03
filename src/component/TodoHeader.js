import header from '../css/header.module.css';

function TodoHeader({ todoContent, changeTodo, addTodo }) {
  return (
    <header className={header.header}>
      <div className={header.section}>
        <h1 className={header.logo}>TODO APP</h1>
        <div className={header.form}>
          <button
            type="button"
            className={header['form-btn']}
            onClick={addTodo}
          >
            <img src="add_button.svg" alt="" className={header['form-img']} />
          </button>
          <input
            type="text"
            className={header['form-text']}
            placeholder="새 할 일을 입력해주세요."
            onChange={changeTodo}
            name="todoContent"
            value={todoContent}
          />
        </div>
      </div>
    </header>
  );
}

export default TodoHeader;
