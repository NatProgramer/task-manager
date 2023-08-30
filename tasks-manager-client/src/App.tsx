import useTasks  from './Hooks/useTasks'
import './styles/App.css'
import { Link } from "react-router-dom"
import TaskList from "./Components/TaskList"

export function App() {
  const { tasks } = useTasks()

  return (
    <>
      <header>
        <h2>Task manager</h2>
        <Link className="create-task" to={'/create'}>New task</Link>
      </header>
      
      <main>
        <TaskList tasks={ tasks }/>
      </main>

    </>
  )
}

export default App
