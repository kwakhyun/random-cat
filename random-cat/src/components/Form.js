import React from "react";

const Form = ({ updateMainCat }) => {
  const includesHangul = (text) => /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/i.test(text);
  const [value, setValue] = React.useState("");
  const [errorMessage, setErrorMessage] = React.useState("");

  function handleInputChange(event) {
    const inputValue = event.target.value;
    setErrorMessage(includesHangul(inputValue) ? "영어로 입력해주세요" : "");
    setValue(inputValue.toUpperCase());
  }

  function handleFormSubmit(event) {
    event.preventDefault();
    setErrorMessage(value === "" ? "공백은 입력할 수 없습니다!" : "");
    if (value !== "") {
      updateMainCat(value);
      setValue("");
    }
  }
  return (
    <form onSubmit={handleFormSubmit}>
      <input
        type="text"
        name="name"
        placeholder="영어 문구를 입력해주세요"
        value={value}
        onChange={handleInputChange}
      />
      <button type="submit">냥이 생성</button>
      <p style={{ color: "red" }}>{errorMessage}</p>
    </form>
  );
};

export default Form;
