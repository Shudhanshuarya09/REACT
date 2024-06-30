import TodoItem from "./TodoItem";
const TodoItems = ({ todoItems }) => {
  return (
    <div classNameName="items-container">
      <TodoItem todoDate="4/10/24" todoName="Pulses"></TodoItem>
      <TodoItem todoDate="4/10/24" todoName="Go to SLIET"></TodoItem>
      <TodoItem todoDate="4/10/24" todoName="Go to Gym"></TodoItem>
      <TodoItem todoDate="4/10/24" todoName="Go to Gym"></TodoItem>
    </div>
  );
};
export default TodoItems;
