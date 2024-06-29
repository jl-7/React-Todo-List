import "./styles.css";
import List from "./List";
import AddTodo from "./AddTodo";
import { useState, useEffect } from "react";

export default function App() {
  const [todo, setTodo] = useState(() => {
    const savedTodo = localStorage.getItem("todo");
    return savedTodo !== null ? JSON.parse(savedTodo) : [];
  });
  // localStorage.clear();
  // const a = { newToDo }
  // const a = { newToDo: newToDo }
  console.log(todo);
  useEffect(() => {
    // Retrieve count from local storage on component mount
    const storedTodo = localStorage.getItem("todo");
    if (storedTodo) {
      setTodo(JSON.parse(storedTodo));
    }
  }, []);

  useEffect(() => {
    // Save count to local storage whenever it changes
    localStorage.setItem("todo", JSON.stringify(todo));
  }, [todo]);

  function addTodo(newTodo, id) {
    if (newTodo === "") {
      return;
    }
    const newItem = new Map();
    newItem.set(id, newTodo, false);
    setTodo([...todo, { id: id, value: newTodo, checked: false }]);
  }

  function deleteItem(key) {
    setTodo(todo.filter((v) => v.id !== key));
  }

  function toggleTodo(item, checked) {
    setTodo((todoItem) => {
      return todoItem.map((i) => {
        if (i.id === item.id) {
          return { id: i.id, value: i.value, checked: checked };
        }
        return i;
      });
    });
  }

  return (
    <div className="App">
      <AddTodo handleButtonClick={(val, id) => addTodo(val, id)} />
      <List
        todoList={todo}
        handleDelete={(key) => deleteItem(key)}
        handleCheckBox={(i, c) => toggleTodo(i, c)}
      />
    </div>
  );
}
