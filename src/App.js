// ../: 상위폴더
// ./: 현재폴더
import './App.css';
import TodoHeader from './component/TodoHeader';
import TodoMain from './component/TodoMain';
import TodoList from './component/TodoList';
// import TodoItem from './component/TodoItem';
import TodoStatus from './component/TodoStatus';
import TodoFooter from './component/TodoFooter';
import { useState, useRef, useEffect } from 'react';
import axios from 'axios';

// 중복 url 기본 설정
export const baseURL = 'http://localhost:3000'; // 변수도 export/import 가능

export const getAllData = async () => {
  // 통신 진행 후 결과값 받아오는 함수
  const response = await axios({
    method: 'GET',
    url: `${baseURL}/todos`,
  });

  const result = response.data.data;
  return result; // return하면 promise 객체 반환
};

function App() {
  // 기본 데이터(객체) 배열
  const [todoArray, setTodoArray] = useState([]);

  // 기본 데이터 배열의 추가/삭제를 위한 객체 변수
  const [todoInput, setTodoInput] = useState({
    todoContent: '',
  });

  // 첫번째 매개변수에 코드(콜백method), 두번째 매개변수에 배열(변수), 배열이 변경될때 코드 실행
  // 배열에 아무것도 없을 경우, 최초 1회 실행
  useEffect(() => {
    console.log('최초 1회 실행');
    // url : /todos
    // method : get
    axios({
      method: 'GET',
      url: `${baseURL}/todos`,
    })
      .then((response) => {
        // console.log(response);
        // console.log(response.data);
        console.log(response.data.data);
        const result = response.data.data; // 원하는 배열데이터
        setTodoArray(result); // 빈 객체(todoArray)에 초기화 => setTodoArray에 변경사항 담김
      })
      .catch((error) => {
        // promise error catch
        console.log(error);
      });
  }, []);

  // 페이지를 처음 렌더링할 때, 서버에 전체 리스트 정보를 요청(함수코드)해서, 전체 데이터를 가져온 다음, useState를 통해서 todoArray에

  // 구조 분해 할당
  const { todoContent } = todoInput;

  // input에 텍스트 입력시 todoInput에 데이터 업데이트, 화면에 텍스트 표시 리렌더링하는 함수
  const changeTodo = (e) => {
    // onChange 이벤트가 발생되었을 때 이벤트 객체에서 name, value를 받아옴
    const { name, value } = e.target;

    // todoInput 객체에 새로 받아온 데이터를 set
    setTodoInput({
      ...todoInput, // spread연산자를 이용하여 기존 데이터 불러오기
      [name]: value, // "Dynamic Key"(확장성) => value는 onChange와 짝꿍, input이 많아지면 객체로 데이터 받아서 동적생성
    });
  };

  // useRef()에 매개변수값을 넣어주면 해당 값이 current property값으로 설정
  // const nextId = useRef(todoArray.length + 1);

  // 버튼 클릭시 input에 입력되어 있는 텍스트를 기본 데이터 배열에 추가 / 리렌더링
  const addTodo = async () => {
    // async 사용, 매개변수 앞에 코딩
    // 기본 데이터 배열에 넣어줄 객체
    const newTodo = {
      // id: nextId.current,
      todoContent: todoContent,
    };

    // 정해진 url로 "data를 body값에 객체로 보내준다"
    // method: POST
    // url: /todos
    // body: { id, todoContent }

    try {
      const response = await axios({
        // axios 앞에 await, response 변수에 함수 저장
        method: 'POST',
        url: `${baseURL}/todos`,
        data: newTodo,
      });
      if (response.status === 200) {
        const result = await getAllData(); // 위에 async
        setTodoArray(result); // [...todoArray, newTodo]
        setTodoInput({
          todoContent: '',
        });
      }
      console.log(response);

      // nextId.current++;
    } catch (error) {
      console.log(error);
    }
  };

  const removeTodo = async (id) => {
    // method: delete
    // url: /todos/:id
    try {
      const response = await axios({
        method: 'DELETE',
        url: `${baseURL}/todos/${id}`,
      });
      if (response.status === 200) {
        const result = await getAllData();
        setTodoArray(result);
      }
    } catch (error) {
      console.log(error);
    }

    // filter 내장 함수: 조건에 맞는 데이터만 추출해서 새로운 데이터(배열) 생성
    // setTodoArray(
    //   todoArray.filter(function (todo) {
    //     return todo.id !== id; // true
    //   }),
    // );
  };

  return (
    <>
      <TodoHeader
        todoContent={todoContent}
        changeTodo={changeTodo}
        addTodo={addTodo}
      />
      <TodoMain>
        <TodoList
          todoArray={todoArray}
          removeTodo={removeTodo}
          setTodoArray={setTodoArray}
        />
        {/* todolist와 todoitem 합침 */}
        <TodoStatus todoArray={todoArray} />
      </TodoMain>
      <TodoFooter />
    </>
  );
}

export default App;
