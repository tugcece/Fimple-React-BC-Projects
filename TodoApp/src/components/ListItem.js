import React, { useState } from "react";

const ListItem = ({ todo, deleteToDo, completeToDo }) => {
  const handleIsActive = (id) => {
    completeToDo(id);
    console.log(id);
  };

  return (
    <li className={todo.isActive ? "" : "completed"}>
      <div className="view">
        <input
          checked={!todo.isActive}
          className="toggle"
          type="checkbox"
          onClick={() => handleIsActive(todo.id)}
          onChange={() => handleIsActive(todo.id)}
        />
        <label>{todo.title}</label>
        <button
          onClick={() => deleteToDo(todo.id)}
          className="destroy"
        ></button>
      </div>
    </li>
  );
};

export default ListItem;
