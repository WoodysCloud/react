function HookArrayCreate({ name, color, changeText }) {
  return (
    <div>
      <input
        type="text"
        placeholder="차 이름을 입력해주세요."
        value={name}
        onChange={changeText}
      />
      <input
        type="text"
        placeholder="차 색을 입력해주세요."
        value={color}
        onChange={changeText}
      />
      <button type="button">추가</button>
    </div>
  );
}

export default HookArrayCreate;
