import React, {useState} from "react";

const containerStyle = {
    margin: '20px 0'
}

const taskStyle = {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    margin: '10px 0'
}

const deleteBtnStyle = {
    margin: '0 20px',
    padding: 8,
    borderRadius: '.5em',
    border: 'none',
    backgroundColor: 'rgb(80,80,80)',
    color: 'white'
}

const TodoDisplay = (props) => {
    const {taskList, setTaskList} = props;
    const deleteHandler = (e) => {
        e.preventDefault();
        const newTaskList = taskList.filter(task => task !== e.target.value);
        setTaskList(newTaskList);
    }
    return(
        <div style={containerStyle}>
            {
                taskList.map((task, index) => {
                    return(
                        <div key={index} style={taskStyle}>
                            <input type="checkbox" style={{margin: 10}} className="checkbox" />
                            <p>{task}</p>
                            <button value={task} onClick={deleteHandler} style={deleteBtnStyle}>Delete</button>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default TodoDisplay;