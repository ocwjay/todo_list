import React, {useState} from "react";

const inputStyle = {
    backgroundColor: 'rgb(225,225,225)',
    border: 'none',
    borderRadius: '.5em',
    padding: 8
}

const submitBtnStyle = {
    margin: '0 20px',
    padding: 8,
    borderRadius: '.5em',
    border: 'none',
    backgroundColor: 'royalblue',
    color: 'white'
}

const Form = (props) => {
    const {taskList, setTaskList} = props;
    const [taskInput, setTaskInput] = useState("");
    const submitHandler = (e) => {
        e.preventDefault();
        setTaskList([...taskList, taskInput]);
        setTaskInput("")
    }
    return(
        <form onSubmit={submitHandler}>
            <input
            type="text"
            placeholder="Enter a Task"
            value={taskInput}
            onChange={(e) => setTaskInput(e.target.value)}
            style={inputStyle} />
            <button style={submitBtnStyle}>Add Task</button>
        </form>
    )
}

export default Form;