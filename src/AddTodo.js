import { useState } from "react";
import { v4 as uuid } from "uuid";

export default function AddTodo({ handleButtonClick }) {
  const [inputValue, setInputValue] = useState("");

  return (
    <>
      <input
        type="text"
        placeholder="add tasks"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button
        className="addButton"
        onClick={() => {
          handleButtonClick(inputValue, uuid());
          setInputValue("");
        }}
      >
        Add
      </button>
    </>
  );
}
