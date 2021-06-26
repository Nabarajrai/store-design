import PostList from "./component/PostList";

function App() {
  return (
    <div className="App">
      <PostList />
    </div>
  );
}

export default App;

// import React, { useState, useMemo, memo } from "react";
// import _ from "lodash";

// const App = () => {
//   const [state, setState] = useState(0);
//   console.log("i am renderd");
//   const maxSum = () => {
//     let sum = 0;
//     for (let i = 0; i < 100; i++) {
//       sum = sum + i;
//     }
//     console.log("I am render of sum");
//     return sum;
//   };

//   let momolize = useMemo(() => maxSum(), []);
//   // let momolize = _.memoize(() => {
//   //   let sum = 0;
//   //   for (let i = 0; i < 100; i++) {
//   //     sum = sum + i;
//   //   }
//   //   console.log("i am sum rencer");
//   //   return sum;
//   // });
//   return (
//     <div>
//       <button onClick={() => setState(state + 1)}>Increment</button>
//       <span>{state}</span>
//       <div>{momolize}</div>
//     </div>
//   );
// };

// export default App;
