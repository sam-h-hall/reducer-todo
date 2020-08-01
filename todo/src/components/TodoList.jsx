import React from "react";
import { TOGGLE_COMPLETED_TODO } from "../reducer/todoReducer";

const TodoList = ({ dispatch, todo }) => {
  const handleClick = (id) => {
    dispatch({ type: TOGGLE_COMPLETED_TODO, payload: id });
  };

  return (
    <div
      style={{ border: "2px solid black", width: "400px", margin: "0 auto" }}>
      <p>Todo List</p>
      {todo.length > 0
        ? todo.map((item) => (
            <p
              style={{
                border: "2px solid black",
                width: "200px",
                margin: "0 auto",
              }}
              onClick={() => handleClick(item.id)}>
              {item.item}
            </p>
          ))
        : "You have nothing left to do!"}
    </div>
  );
};

export default TodoList;
