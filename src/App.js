import React, {useEffect,useState} from "react";


import Header from "./components/Header";
import Loader from "./components/Loader";
import Todo from "./components/Todo"

import "./style/App.css"

const App = () => {


  // STATE

  const [todoList, setTodoList] = useState([]);
  const [completedList, setCompletedList] = useState(null)

  // EFFECT

  useEffect(() => {

    const handleTodoList = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos"
      );
      const result = await response.json();
      const resultTodoList = result.slice(0, 20);
      setTodoList(resultTodoList);
    };
    handleTodoList();
  }, []);



  // FUNCIONES
  const handleCompleteTodo = id => {
    setTodoList(
      todoList.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const handleCompletedTodo =  ()  => {
    setCompletedList ("completed")
  }

  const handleUnCompletedTodo = id => {
    setCompletedList ("uncompleted")
  }

  const handleTodo = () => {
    setCompletedList (null)
  }


  return (
    <div className="App">
      <Header
      handleCompletedTodo={handleCompletedTodo}
      handleUnCompletedTodo={handleUnCompletedTodo}
      handleTodo={handleTodo}
      />

      <div className="todo-container">
        {todoList && todoList.length > 0 ? (
          todoList.map(singleTodo => (
            <Todo
              key={singleTodo.id}
              title={singleTodo.title}
              status={singleTodo.completed}
              handleCompleteTodo={handleCompleteTodo}
              id={singleTodo.id}
              completedList={completedList}
            />
          ))
        ) : (
          <Loader />
        )}
      </div>
    </div>
  );
};

export default App;
