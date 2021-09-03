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

  const { carname, color } = carInput;

  const changeText = (e) => {
    const { property, value } = e.target;

    setCarInput({
      ...carInput,
      [property]: value,
    });
  };

  // useRef(): 상태값 관리
  const nextId = useRef(4);

  return (
    <>
      <HookArrayCreate name={name} color={color} changeText={changeText} />
      <HookArray carArray={carArray} />
    </>
  );
}

export default AppArray;
