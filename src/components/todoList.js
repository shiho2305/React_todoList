import React, { useState } from "react";
import "./todo.css";

export default function TodoList({ todoList, setTodoList, handleSetStatus }) {
  const [filterOption, setFilterOption] = useState("all");

  const handleDeleteTodo = (index) => {
    const todoListCop = [...todoList];
    todoListCop.splice(index, 1);
    setTodoList(todoListCop);
  };

  const handleFilterChange = (event) => {
    setFilterOption(event.target.value);
  };

  const filteredTodoList = todoList.filter((todo) => {
    if (filterOption === "done") {
      return todo.isStatus === "done";
    } else if (filterOption === "todo") {
      return todo.isStatus === "todo";
    } else {
      return true;
    }
  });

  return (
    <div className="row">
      <div className="todo border-1 mx-auto">
        <div className="todo-item d-flex justify-content-between mt-3">
          <p className="plist">List:</p>
          <select
            className="selectTodo border-2"
            value={filterOption}
            onChange={handleFilterChange}
          >
            <option value="all">All</option>
            <option value="todo">To do</option>
            <option value="done">Done</option>
          </select>
        </div>

        <div className="row">
          {filteredTodoList.map((todo, index) => (
            <div
              className={`list-item mt-2 d-flex justify-content-between align-items-center ${
                todo.isStatus === "done" ? "done" : ""
              }`}
            >
              <p key={todo.id} onClick={() => handleSetStatus(index)}>
                {index + 1} . {todo.todo}
              </p>
              <span
                className="icon-trash"
                onClick={() => handleDeleteTodo(index)}
              >
                <i
                  className="fa-solid fa-trash"
                  style={{ color: "#b42222" }}
                ></i>
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
