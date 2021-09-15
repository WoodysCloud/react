import todolist from '../css/todolist.module.css';
import todoitem from '../css/todoitem.module.css';
import { useState, useRef } from 'react';
import { useEffect } from 'react/cjs/react.development';
import axios from 'axios';
import { baseURL } from '../App';
import { getAllData } from '../App';

function TodoItem({ todo, removeTodo, setTodoArray }) {
  // input에다 focus
  const editInputRef = useRef(null);

  const [edited, setEdited] = useState(false); // useState 매개변수는 초기값
  const [newText, setNewText] = useState(todo.todoContent); // 기존의 있던 값을 그대로 두고 수정할 수 있도록

  // mark 태그를 클릭했을 때, edited = true가 되면서 input창이 나오면 되겠다.

  useEffect(() => {
    // input focus
    if (edited) {
      // input이 실행되었을때 <=> edited=true일때
      editInputRef.current.focus();
    }
  }, [edited]); // 빈 배열로 두면 렌더링 될때 처음 한번만 실행, 변수 넣으면 변경될때마다 실행

  const onClickEdit = () => {
    setEdited(true); // 비동기방식이라 요청 보내놓고 바로 밑에꺼 시도. 원하는건 input값 받고 밑에 코드 수행
  };

  const onChangeEditInput = (event) => {
    // input값을 실시간으로 event라는 매개변수에 저장
    const { name, value } = event.target;
    setNewText(value);
  };

  // 수정할 텍스트를 적고, enter키를 눌렀을 때 통신을 진행하고, 새로운 배열값을 결과값으로 받은 후
  // 이를 todoArr에 적용 (setTodoArray)
  const onPressSubmit = async (id) => {
    // enter키 눌렀을 때 통신
    // method : PUT
    // url : /todos/:id
    // response 값 중 배열을 setTodoArray를 통해 초기화한 후 edited를 false로 변환
    try {
      const newTodo = {
        todoContent: newText, // 수정할 텍스트
      };
      const response = await axios({
        method: 'PUT',
        url: `${baseURL}/todos/${id}`,
        data: newTodo, // 바디값 받아오기
      });
      if (response.status === 200) {
        // console.log(response.data.data);
        const result = await getAllData(); // parsing 주의(서버에서 확인)
        console.log(result);
        // console.log(result);
        setTodoArray(result);
        setEdited(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  // check를 한다 안한다에 따라 데이터베이스의 데이터값 변경
  const onChangeChecked = async (id, checked) => {
    const response = await axios({
      method: 'PUT',
      url: `${baseURL}/todos/${id}`,
      data: {
        todoContent: todo.todoContent, // 수정안함
        checked: !checked, // 서버에 checked 데이터 추가
      },
    });
    if (response.status === 200) {
      const result = await getAllData();
      setTodoArray(result);
    }
  };

  return (
    <li className={todoitem['todo-item']}>
      <input
        type="checkbox"
        className={todoitem.check}
        checked={todo.checked} // checked=1 or true라면, 체크박스에 check
        onChange={() => {
          onChangeChecked(todo.id, todo.checked); // 매개변수 사용 시 익명함수로 넣어줘야 함
        }}
      />
      {/* 자바스크립트 구문 작성 {} */}
      {/* 커서 이동하면 수정 가능하도록,  */}
      {
        // 코드가 참이다? => ?() 실행, 거짓이다? => :() 실행
        edited ? (
          <input
            ref={editInputRef} // DOM객체에 연결
            value={newText}
            className={todoitem.edit_input}
            onChange={onChangeEditInput}
            onKeyPress={(event) => {
              if (event.key === 'Enter') {
                onPressSubmit(todo.id);
              }
            }}
          />
        ) : (
          // 체크가 되어 있는 경우
          <mark
            className={
              todo.checked === 1 ? todoitem.text_checked : todoitem.text
            }
            onClick={onClickEdit}
          >
            {todo.todoContent}
          </mark>
        )
      }

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

function TodoList({ todoArray, removeTodo, setTodoArray }) {
  // props형태로 App.js에서 받아오기
  return (
    <section className={todolist.section}>
      <ul className="todo-list">
        {todoArray.map(function (todo) {
          return (
            <TodoItem
              todo={todo}
              key={todo.id}
              removeTodo={removeTodo}
              setTodoArray={setTodoArray} // props형태로 App.js에서 받아오기
            />
          );
        })}
      </ul>
    </section>
  );
}

export default TodoList;
