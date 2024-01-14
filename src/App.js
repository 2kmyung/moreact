import Button from "./Button";
import styles from "./App.module.css";
import { useState, useEffect } from "react";

function Hello() {

  function onCreated() {
    console.log("hi");
    return onDestroyed;
  }

  function onDestroyed() {
    console.log("bye");
  }

  useEffect(onCreated, [])

  return <h1>Hello</h1>
}

function App() {

  const [counter, setCounter] = useState(0);
  const [keyword, setKeyword] = useState("");
  const [showing, setShowing] = useState(false);

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
      {showing ? <Hello /> : null}
      <input
        value={keyword}
        onChange={onChange}
        type="text"
        placeholder="Search here"
      />
      <h1 className={styles.title}>{counter}</h1>
      <Button text={"Continue"} />
      <button onClick={onClick}>Click Me</button>
      <button onClick={() => setShowing((prev) => !prev)}>{showing ? "Hide" : "Show"}</button>
    </div>
  );
}

export default App;
