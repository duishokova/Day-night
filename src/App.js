import React, {useState} from "react"
import Day from "./components/Day";

function App() {
  const [toggled, setToggled] = useState(false);
  const handleClick = () => {
      setToggled((night) => !night);
  };
  return (
    <div className="App">
        <Day toggled={toggled} onClick={handleClick} />
    </div>
  );
}

export default App;

