import Header from "./components/Header";
import Tasks from "./components/Tasks"
import { useState } from "react";
import AddTask from "./components/AddTask";

function App() {
   const [showForm, setShowForm] = useState(false);
   const [tasks, setTasks] = useState([
        
            {
                id: 1,
                text: ' Food Shopping',
                day: 'Feb 5th at 2:30pm',
                reminder: false
            },
            {
                id: 2,
                text: 'Coding',
                day: 'Feb 6th at 2:30pm',
                reminder: true
            },
            {
                id: 3,
                text: 'Whining',
                day: 'Feb 7th at 2:30pm',
                reminder: true
            },
        
    ])

    // Delete Task
    const deleteTask = (id) => {
      setTasks(tasks.filter((task)=>task.id !== id));
    }

    // Toggle Reminder
    const toggleReminder = (id) => {
      setTasks(tasks.map((task)=>task.id === id ? { ...task, reminder: !task.reminder} : task))
    }

    // Add Task
    const addTask = (task) => {
        const id = Math.floor(Math.random()*1000) + 1
        const newTask = {id, ...task}
        setTasks([...tasks, newTask])
    }

  return (
    <div className="container">
      <Header onAdd={() => setShowForm(!showForm)} toggleBtnStyle={showForm} />
      { showForm && <AddTask  onAdd={addTask} />}
      {tasks.length > 0 ? <Tasks tasks = {tasks} onDelete={deleteTask}
      onToggle={toggleReminder} /> : 'No Tasks to Show'}
    </div>
  );
}

export default App;
