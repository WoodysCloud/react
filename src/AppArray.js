import { useState, useRef } from 'react';
import HookArray from './HookArray';
import HookArrayCreate from './HookArrayCreate';

function AppArray() {
  // 기본 데이터(객체) 배열
  const [carArray, setCarArray] = useState([
    {
      id: 1,
      carname: 'Fiat',
      color: 'white',
    },
    {
      id: 2,
      carname: 'Kia',
      color: 'red',
    },
    {
      id: 3,
      carname: 'Hyundai',
      color: 'grey',
    },
  ]);

  // 기본 데이터 배열의 추가/삭제를 위한 객체 변수
  const [carInput, setCarInput] = useState({
    carname: '',
    color: '',
  });

  // 구조 분해 할당
  const { carname, color } = carInput;

  return (
    <>
      <div>
        <input type="text" placeholder="차 이름을 입력해주세요." />
        <input type="text" placeholder="차 색을 입력해주세요." />
        <button type="button">추가</button>
      </div>
      <ul>
        <li>
          {carArray[0].carname}: {carArray[0].color}
        </li>
        <li>
          {carArray[1].carname}: {carArray[1].color}
        </li>
        <li>
          {carArray[2].carname}: {carArray[2].color}
        </li>
      </ul>
    </>
  );
}

export default AppArray;
