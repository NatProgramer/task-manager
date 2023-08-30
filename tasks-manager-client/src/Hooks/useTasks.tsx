import { useEffect, useState } from "react"
import { fetchTasks } from "../Utils/functions"
import { MappedTask } from "../Interfaces/task.interface"

export default function useTasks () {
  const [tasks, setTasks] = useState<MappedTask[]>([])

  useEffect(() => {
    fetchTasks().then(newTasks => setTasks(newTasks))
  }, [])

  return { tasks }
}
