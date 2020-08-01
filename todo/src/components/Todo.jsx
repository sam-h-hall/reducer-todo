import React from "react";
import { initialState } from "../reducer/todoReducer";

const Todo = () => {
  console.log(initialState);
  return (
    <div>
      {initialState.map((item) => (
        <p>{item.name}</p>
      ))}
    </div>
  );
};

export default Todo;
