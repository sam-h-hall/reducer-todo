import React, { useReducer } from "react";
import {
  initialState,
  todoReducer,
  ADD_TODO,
  REMOVE_COMPLETED,
} from "../reducer/todoReducer";
import { Formik, Form, Field, ErrorMessage } from "formik";
import TodoList from "./TodoList";
// <Formik /> is a component that helps build forms. It uses a render prop pattern
// <Form /> is a small wrapper around an HTML <form> element that automatically hook sinto Formik's handleSubmit and handleReset --> so you can fill with regular form elements
// <Field /> uses name attribute to match up with Formik state, defaults to <input /> element
// <ErrorMessage /> if a field has been visited, this will render error messages

// useReducer hook is an alternative to useState (& useState actually uses useReducer under the hood)
//   - preferable when you have complex logic you have to deal with in a component, or many state props
//   - takes in a reducer function (that we build), as well as a value for the initialState
//   - returns current state & dispatch method in an array (just like useState)
//   - const [state, dispatch] = useReducer(reducer, initialState)

const TodoForm = () => {
  const [state, dispatch] = useReducer(todoReducer, initialState);
  const handleSubmit = (values) => {
    // delivering the payload this way helped my id problem, but when logged, id is still just an empty string --> bc it's not logging the payload, which is where the conversion is taking place
    dispatch({ type: ADD_TODO, payload: { ...values, id: Date.now() } });
  };
  const removeCompleted = () => {
    dispatch({ type: REMOVE_COMPLETED });
  };
  return (
    <div>
      <TodoList dispatch={dispatch} todo={state} />
      <br />
      <Formik
        initialValues={{ item: "", completed: false, id: 0 }}
        // we update our values when we type in the Field, send those values through our handleSubmit, which will handle the dispatch, and then we reset those values with Formik's handleReset
        onSubmit={(values, { resetForm }) => {
          handleSubmit(values);
          resetForm();
        }}>
        <Form>
          <Field
            name="item"
            id={Date.now()}
            placeholder="What do you need to get done?"
          />
          <button type="submit">Add</button>
        </Form>
      </Formik>
      <button onClick={() => removeCompleted()}>Clear</button>
    </div>
  );
};

export default TodoForm;
