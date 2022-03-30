import React, {useState} from 'react';
import './App.css';
import Form from './components/Form';
import TodoDisplay from './components/TodoDisplay';

function App() {
  const [taskList, setTaskList] = useState([]);
  return (
    <div className="App">
      <Form  taskList={taskList} setTaskList={setTaskList} />
      <TodoDisplay taskList={taskList} setTaskList={setTaskList} />
    </div>
  );
}

export default App;
