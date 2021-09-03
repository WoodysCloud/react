import todolist from '../css/todolist.module.css';
import status from '../css/status.module.css';

function TodoStatus({ number }) {
  return (
    <section className={todolist.section}>
      <div className={status.section}>
        <div className={status.left}>{number}개 남음</div>
        <div className="status-filter">
          <button type="button" className={status.btn}>
            전체목록
          </button>
          <button type="button" className={status.btn}>
            남은목록
          </button>
          <button type="button" className={status.btn}>
            완료목록
          </button>
        </div>
        <div className="status-clear">
          <button type="button" className={status.btn}>
            완료목록삭제
          </button>
        </div>
      </div>
    </section>
  );
}

export default TodoStatus;
