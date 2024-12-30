import "./App.css";
import Counter from "./Counter";
import Team from "./Team";
import User from "./Users";
import Friends from "./Friends";

function App() {
  const handleClick = () => {
    alert("button clicked");
  };
  const handleClick2 = () => {
    alert("button 2 clicked");
  };
  const addToFive = (nums) => {
    alert(nums + 5);
    return nums;
  };

  return (
    <>
      <h3>React Core Concept2</h3>

      <Friends></Friends>

      <User></User>

      <Team></Team>

      <Counter></Counter>

      <button onClick={handleClick}>Click Me</button>
      <button onClick={handleClick2}>Click Me 2</button>
      <button
        onClick={() => {
          alert("third click");
        }}
      >
        third
      </button>
      <button onClick={() => addToFive(5)}>AddFive</button>
    </>
  );
}

export default App;
