import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, fetchTodos } from "./store/todoSlice";
import TodoList from "./components/TodoList";
import NewTodoForm from "./components/NewTodoForm";

function App() {
  const [text, setText] = useState("");
  const {status, error} = useSelector(state => state.todos);
  const dispatch = useDispatch();

  const handleAction = () => {
    if(text.trim().length) {
      dispatch(addTodo({ text }));
    setText("");
  }
  }
  
  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  return (
    <>
      <NewTodoForm 
      text={text} 
      handleInput={setText} 
      handleSubmit={handleAction} 
      />

      {status === "loading" && <h2>Loading...</h2>}
      {error && <h2> An error occurred: {error}</h2>}

      <TodoList />
    </>
  );
}

export default App;
