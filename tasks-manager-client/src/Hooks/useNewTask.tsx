import { FormEvent } from "react"
import { createTaskDto } from "../dto/createTask.dto"

interface Props {
  title: string;
  description: string;
}

export default function useNewTask ({ title, description }: Props) {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    console.log(title)
    console.log(description)

    const task: createTaskDto = {
      title: title,
      description: description
    }

    fetch('http://localhost:5000/tasks', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(task),
    }).then(res => res.json()).then(json => console.log(json)).catch((() => {
      console.log('Have a error with object')
    }))

  }

  return {
    handleSubmit
  }
}
