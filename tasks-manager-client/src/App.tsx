import { useEffect, useState } from "react"
import { MappedTask } from "./Interfaces/task.interface"
import { fetchTasks } from "./Utils/functions"
import TaskItem from "./Components/TaskItem"
import './styles/App.css'
import { Link } from "react-router-dom"

function useTasks () {
  const [tasks, setTasks] = useState<MappedTask[]>([])

  useEffect(() => {
    fetchTasks().then(newTasks => setTasks(newTasks))
  }, [])

  return { tasks }
}

export function App() {
  const { tasks } = useTasks()

  return (
    <>
      <header>
        <h2>Task manager</h2>
        <Link className="create-task" to={'/create'}>New task</Link>
      </header>

      <main>
        <ul>
          {
            tasks.length > 0 ? tasks.map((task: MappedTask) => (   
              <TaskItem key={task.id} task={task} />
            )) : <></>
          }
        </ul>
      </main>
    </>
  )
}

export default App
