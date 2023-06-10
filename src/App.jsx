import { useState } from "react";
import "./App.css";
import { FaTrash } from "react-icons/fa";

function App() {
  const [inputValue, setInputValue] = useState(" ");
  //const [editingIndex, setEditingIndex] = useState(-1);
  const [todos, setTodos] = useState([]);

//adding todo items
  const addTodo = () => {
    if (inputValue.trim() == "") {
      alert("Taskbox is empty! Add something")
    } 
    else {
      const newTodo = {
        text: inputValue,
        index: todos.length,
      };
      setTodos([...todos, newTodo]);
    }
    setInputValue("");
  };
//Concept: Lifting state up
// created this func to send as props to child component todolist, otherwise settodos can't be used outside the scope
  const updateTodo = (newTodos) => {
    setTodos(newTodos);
  }
  return (
    <>
      <h2>MINIMAL TODOIST</h2>
      <div className="header">
        <label htmlFor="Input">
          <input
            type="text"
            name="Input"
            id="input"
            placeholder="Enter your task"
            value={inputValue}
            onChange={(e) => {
              setInputValue(e.target.value);
            }}
          />
        </label>
        <button id="addtask" onClick={addTodo}>
          Add Task
        </button>
      </div>
      <Todolist todos={todos} updateTodo={updateTodo}/>
    </>
  );
}

const Todolist = ({ todos, updateTodo}) => {
    const removeTodo = (index) => {
    const newTodos = [...todos.slice(0,index),...todos.slice(index + 1)];
    updateTodo(newTodos);
    console.log(newTodos)
  };

  return (
    <div className="todolist">
      {todos.map((todo,index) => { 
        return (
          <div className="todo" key={index}>
            <p >{todo.text}</p>
            {/* <button id="edit" onClick={()=>editTodo(index)}><AiOutlineEdit></AiOutlineEdit></button> */}
            <button id="delete" onClick={() =>removeTodo(index)}>
              <FaTrash></FaTrash>
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default App;
