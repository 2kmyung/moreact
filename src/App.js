import Button from "./Button";
import styles from "./App.module.css";
import { useState, useEffect } from "react";

function App() {

  const [counter, setCounter] = useState(0);
  const [keyword, setKeyword] = useState("");

  const onClick = () => setCounter((prev) => prev + 1);
  const onChange = (event) => setKeyword(event.target.value);

  console.log("I run all the time");
  useEffect(() => {
    console.log("awake");
  }, []);
  useEffect(() => {
    if (keyword !== "") {
      console.log("search for", keyword);
    }
  }, [keyword])

  return (
    <div className="App">
      <input
        value={keyword}
        onChange={onChange}
        type="text"
        placeholder="Search here"
      />
      <h1 className={styles.title}>{counter}</h1>
      <Button text={"Continue"} />
      <button onClick={onClick}>Click Me</button>
    </div>
  );
}

export default App;
