import { useState } from "react";

function ToDoList() {

    const [toDo, setToDo] = useState("");
    const [toDos, setToDos] = useState([]);

    const onChange = (event) => { setToDo(event.target.value); }
    const onSubmit = (event) => {
        event.preventDefault();
        if (toDo === "") {
            return;
        }

        setToDos((current) => [toDo, ...current]);
        setToDo("");

        console.log(toDo);
    };

    return (
        <div>
            <h1>My To Dos ({toDos.length})</h1>
            <form onSubmit={onSubmit}>
                <input
                    onChange={onChange}
                    value={toDo}
                    type="text"
                    placeholder="Write To Do"
                />
                <button>Add To Do</button>
            </form>
            <hr />
            <ul>
                {toDos.map((item, index) => <li key={index}>{item}</li>)}
            </ul>
        </div>
    )
};

export default ToDoList;