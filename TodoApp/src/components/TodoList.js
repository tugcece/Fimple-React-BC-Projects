import React, { useState } from "react";
import ListItem from "./ListItem";

const TodoList = ({ todos, deleteToDo, completeToDo, filteredTodos }) => {
  return (
    <section className="main">
      <input className="toggle-all" type="checkbox" />
      <label htmlFor="toggle-all">Mark all as complete</label>
      <ul className="todo-list">
        {filteredTodos.map((todo, index) => {
          return (
            <ListItem
              todo={todo}
              deleteToDo={deleteToDo}
              completeToDo={completeToDo}
              key={index}
            />
          );
        })}

        <li>
          <div className="view">
            <input className="toggle" type="checkbox" />
            <label>Live</label>
            <button className="destroy"></button>
          </div>
        </li>
      </ul>
    </section>
  );
};

export default TodoList;
