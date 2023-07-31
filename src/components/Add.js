import React, { useCallback, useState } from "react";
import Button from "react-bootstrap/Button";
import './todo.css';
import TodoList from "./todoList";
import {v4} from 'uuid';

const Add = () => {
  const [todoList, setTodoList] = useState([]);
  const [textInput, setTextInput] = useState('');

  const handleTextInputChange = useCallback((value) => {
    // console.log(value);
    setTextInput(value);
  }, []);

  const handleAddBtnClick = useCallback(
    () => {
    setTodoList([...todoList, {id:v4(), todo: textInput, isStatus: 'todo'}]);
      
    setTextInput("");

  }, [textInput, todoList]);

  const handleSetStatus = (index) => {
    console.log(index);
    const todoListCop = [...todoList];
    todoListCop[index].isStatus = (todoListCop[index].isStatus === 'todo') ? 'done' : 'todo';
    setTodoList(todoListCop);
  } 

  // when click enter in keyboard to add to do for list to do 
  const handleKeyPress = (event) => {
    if (event.keyCode === 13) {
      handleAddBtnClick();
    }
  }

  return (
    <div className="d-grid justify-content-center">
      <div className="row mb-4" style={{width: "31rem"}}>
        <div className="col-10">
          <input type="text" value={textInput} onChange={(e) => handleTextInputChange(e.target.value)} onKeyUp={handleKeyPress} className="w-100 border-2 bg-white inputAdd" style={{width: "100%"}}/>
        </div>
        <div className="col-2 h-auto" id="divContainerButton">
          <Button className="buttonAdd" variant="success" size="lg" onClick={handleAddBtnClick}>
              <i className="fa-solid fa-plus" size="lg"></i>
          </Button>
        </div>
      </div>

      <TodoList todoList={todoList} handleSetStatus={handleSetStatus} setTodoList={setTodoList}/>
    </div>
  );
};

export default Add;
