import { useDispatch } from "react-redux";
import { deleteTodo, toggleTodoComplete } from "../store/todoSlice";

const TodoItem = ({ id, text, completed}) => {
  const dispatch = useDispatch()

  return (
    <li>
      <input
        type="checkbox"
        checked={completed}
        onChange={() => dispatch(toggleTodoComplete({id}))}
      />
      <span>{text}</span>
      <span className="delete" onClick={() => dispatch(deleteTodo({id}))}>
        &times;
      </span>
    </li>
  );
};

export default TodoItem;
