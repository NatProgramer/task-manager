import { Task } from "../Interfaces/task.interface"

export async function fetchTasks() {
  const response = await fetch('http://localhost:5000/tasks')
  const newTasks = await response.json()  
  const mappedTasks = newTasks.map((task: Task) => {
    return {
      id: task._id,
      title: task.title,
      status: task.status,
      description: task.description,
      priority: task.priority,
      createdAt: task.createdAt,
      updatedAt: task.updatedAt,
    }
  })
  
  return mappedTasks
}
