function HookArrayCreate({ name, color, changeEventFunc }) {
  return (
    <div>
      <input
        type="text"
        placeholder="차 이름을 입력해주세요."
        onChange={changeEventFunc}
      />
      <input type="text" placeholder="차 색을 입력해주세요." />
      <button type="button">추가</button>
    </div>
  );
}

export default HookArrayCreate;
