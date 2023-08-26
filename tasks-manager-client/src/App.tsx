import { priorityValues, statusValues } from "./Interfaces/task.enum"
import { Task } from "./Interfaces/task.interface"
import './styles/App.css'

function App() {
  const tasks: Task[] = [{
      "_id": "64e95eb69806c1e5c29652fb",
      "title": "First task",
      "description": "Realize something task",
      "status": statusValues.PENDING,
      "priority": priorityValues.LOW,
      "createdAt": "2023-08-26T02:08:54.557Z",
      "updatedAt": "2023-08-26T02:09:38.001Z",
      "__v": 0
  }, {
    "_id": "64e97b51bd91c630164a2a0a",
    "title": "second task",
    "status": statusValues.PENDING,
    "priority": priorityValues.MEDIUM,
    "createdAt": "2023-08-26T04:10:58.872Z",
    "updatedAt": "2023-08-26T04:10:58.872Z",
    "__v": 0
  }]

  return (
    <>
      <header>
        <h1>Task manager</h1>
      </header>

      <main>
        <ul>
          {
            tasks.map(task => (
            
              <li key={task._id}>
                <h2>{task.title}</h2>
                {task?.description ? <p>{task.description}</p> : <></>}

                <span className="tag">#{task.status.toLowerCase()}</span>

                <span className={"tag"}>#{task.priority.toLowerCase()}</span>
              </li>
            ))
          }
        </ul>
      </main>
    </>
  )
}

export default App
