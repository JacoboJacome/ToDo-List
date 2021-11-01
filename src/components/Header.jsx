import React from "react";


//Estilos
import "../style/header.css"


const Header  =  ({ handleCompletedTodo, handleUnCompletedTodo, handleTodo}) => {


    return (
        <div>
            <div >
                <div className="header">
                    <h2>To Do List</h2>
                </div>
                <div className="btn__header">
                    <button 
                    className="btn__header__todo"
                    onClick={handleTodo}>Todo</button>
                    <button 
                    className="btn__header__completed"
                    onClick={handleCompletedTodo}>Completed</button>
                    <button 
                    className="btn__header__reseted"
                    onClick={handleUnCompletedTodo}>Uncompleted</button>
                </div>
            </div>
        </div>
    )
};

export default Header;