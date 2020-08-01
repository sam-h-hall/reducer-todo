export const initialState = [{
  item: "Learn about reducers",
  completed: false,
  id: 3892987589
}];

export const ADD_TODO = "ADD_TODO";
export const TOGGLE_COMPLETED_TODO = "TOGGLE_TODO";
export const REMOVE_COMPLETED = "REMOVE_COMPLETED";

// pure function, no side-effects --> perfect for managing state while maintaing immutability
// every action (seen below) is required to have a 'type' property, which will 'inform' the reducer of actions happening in our app
//   - type allows the reducer to know what part of the state needs to change
//   - current state (state) passes into the reducer, an actions follows to tell the reducer HOW to update the state
//   - we can add a 'payload' property to our action objects --> payload is data, reducer needs some data passed into it through the action to be able to update the state correctly
//     * thus, we have action.type and action.payload
export const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      // our state is an array of objects, thus '...state' is an object, action.payload is also an object
      return [
        //equivalent to {item: ..., completed: ..., id: ...}
        ...state,
        //equivalent to {item: ..., completed: ..., id: ...}
        action.payload
      ]
    case TOGGLE_COMPLETED_TODO:
      return state.map((todo) => {
        return (
          todo.id === action.payload ? {
            ...todo,
            completed: !todo.completed
          } : todo
        )
      })
    case REMOVE_COMPLETED:
      return state.filter(todo => !todo.completed);
    default:
      return {
        state
      }
  }
}

// export default todoReducer;