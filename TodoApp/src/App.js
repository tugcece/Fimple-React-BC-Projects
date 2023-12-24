import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import TodoList from "./components/TodoList";


const App = () => {
  const [selected, setSelected] = useState("");
  const [todos, setTodos] = useState([]);
  const [filteredTodos, setFilteredTodos] = useState(todos);

  const addToDo = (newTodo) => {
    setTodos([...todos, newTodo]);
    setFilteredTodos([...todos, newTodo]);
  };
  const deleteToDo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
    setFilteredTodos(updatedTodos);
  };
  const clearAll = () => {
    setTodos([]);
    setFilteredTodos([]);
  };
  const completeToDo = (id) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, isActive: !todo.isActive } : todo
    );
    setTodos(updatedTodos);
    setFilteredTodos(updatedTodos);
  };
  const filterTodos = (filter) => {
    if (filter === "all") {
      setFilteredTodos(todos);
    } else if (filter === "active") {
      const activeTodos = todos.filter((todo) => todo.isActive);
      setFilteredTodos(activeTodos);
    } else if (filter === "completed") {
      const completedTodos = todos.filter((todo) => !todo.isActive);
      setFilteredTodos(completedTodos);
    } else {
      setFilteredTodos(todos);
    }
  };

  useEffect(() => {
    console.log(todos);
    console.log(filteredTodos);
  }, [todos, filteredTodos]);

  return (
    <>
      <section className="todoapp">
        <Header addToDo={addToDo} />
        <TodoList
          todos={todos}
          deleteToDo={deleteToDo}
          completeToDo={completeToDo}
          filteredTodos={filteredTodos}
        />

        <footer className="footer">
          <span className="todo-count">
            <strong>{filteredTodos.length} </strong>
            items left
          </span>

          <ul className="filters">
            <li>
              <a
                href="#/"
                className={selected === "all" ? "selected" : ""}
                onClick={() => {
                  filterTodos("all");
                  setSelected("all");
                }}
              >
                All
              </a>
            </li>
            <li>
              <a
                href="#/"
                className={selected === "active" ? "selected" : ""}
                onClick={() => {
                  filterTodos("active");
                  setSelected("active");
                }}
              >
                Active
              </a>
            </li>
            <li>
              <a
                href="#/"
                className={selected === "completed" ? "selected" : ""}
                onClick={() => {
                  filterTodos("completed");
                  setSelected("completed");
                }}
              >
                Completed
              </a>
            </li>
          </ul>

          <button className="clear-completed" onClick={() => clearAll()}>
            Clear completed
          </button>
        </footer>
      </section>
    </>
  );
}

export default App;
