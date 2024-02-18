//react-hooks: react hooks are functions that let us hook into the react state and lifecycle features from function components

//useState: useState is a hook that lets you add react state to function components. it returns an array with 2 elements. the first element is the current value of the state and the second element is a state setter function. you can call this function from anywhere in your component to update its state. when the state is updated, the component re-renders itself.

import Counter from "./Counter";

function App() {
  return <Counter />;
}

export default App;
