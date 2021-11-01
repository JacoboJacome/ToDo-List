import React from "react";

//Styles
import "../style/Todo.css";

const Todo = ({ title, status, handleCompleteTodo, id, completedList }) => {
  console.log(completedList)
  return (
        completedList === "completed" ? (
        <div className={`todo-card ${status ? "oculto" : ""}`}>
        <div className="todo-title">
          <h4>{title}</h4>
        </div>
        <div className="todo-actions">
          <button
            className={status ? "complete" : "reset"}
            onClick={() => handleCompleteTodo(id)}>
            {status ? "Reset" : "Complete"}
          </button>
        </div>
      </div>
        ) : completedList === "uncompleted" ? (
          <div  className={`todo-card ${!status ? "oculto" : ""}`}>
        <div className="todo-title">
          <h4>{title}</h4>
        </div>
        <div className="todo-actions">
          <button
            className={status ? "complete" : "reset"}
            onClick={() => handleCompleteTodo(id)}>
            {status ? "Reset" : "Complete"}
          </button>
        </div>
      </div>
        ) : (
      <div  className={`todo-card `}>
        <div className="todo-title">
          <h4>{title}</h4>
        </div>
        <div className="todo-actions">
          <button
            className={status ? "complete" : "reset"}
            onClick={() => handleCompleteTodo(id)}>
            {status ? "Reset" : "Complete"}
          </button>
        </div>
      </div>
        )
  );
};

export default Todo;
