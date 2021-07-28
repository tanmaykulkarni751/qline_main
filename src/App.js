import React, { useState, useEffect } from "react";
import Calendar from "./components/Calendar";
import Login from "./components/Login";
import axios from 'axios'

function App() {
  
  const [loggedIn, setLoggedIn] = useState(false);
  const [name, setName] = useState("");
  const [task, setTask] = useState("");
  const [res, setRes] = useState();

  const user = {
    name: name,
    task: task
  }

  useEffect(() => {
    if(loggedIn) {
      axios.post(`https://qline-api21.herokuapp.com/get_progress`, { user })
        .then(res => {
          setRes(res.data);
        })
        console.log(res);
      // console.log(loggedIn)
      // console.log(`${name} and ${task}`)
    }
  }, [name, task, loggedIn])
  
  return (
    loggedIn?<Calendar />:<Login name={name} setName={setName} task={task} setTask={setTask} setLoggedIn={setLoggedIn} res={res}/>
  );
}

export default App;
