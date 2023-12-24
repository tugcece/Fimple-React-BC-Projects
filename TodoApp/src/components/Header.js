import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
const Header = ({ addToDo }) => {
  const [todo, setTodo] = useState({ id: "", title: "", isActive: true });

  const uniqueId = uuidv4();
  console.log(uniqueId);
  const handleInputChange = (e) => {
    setTodo({
      id: uniqueId,
      title: e.target.value,
      isActive: true,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    addToDo(todo);
    setTodo({ title: "" });
  };

  return (
    <header className="header">
      <h1>todos</h1>
      <form onSubmit={onSubmit}>
        <input
          className="new-todo"
          placeholder="What needs to be done?"
          autoFocus
          value={todo.title}
          onChange={handleInputChange}
        />
      </form>
    </header>
  );
};

export default Header;
