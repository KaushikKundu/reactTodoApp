import { FaTrash } from "react-icons/fa";

const Todolist = ({ todos }) => {

const removeTodo = (index) => {
    const newTodos = todos.splice(index,1);
    setTodos(newTodos);
}

  return (
    <div className="todolist">
      {todos.map((todo) => {
        return (
          <div className="todo">
            <p>{todo.text}</p>
            <button id="delete" onClick={removeTodo}>
              <FaTrash></FaTrash>
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Todolist;
