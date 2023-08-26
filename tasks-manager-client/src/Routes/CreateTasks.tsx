import { FormEvent, useRef } from "react";
import { createTaskDto } from "../dto/createTask.dto";

export default function CreateTasks() {
  const title = useRef<HTMLInputElement | null>(null)
  const description = useRef<HTMLInputElement | null>(null)

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const task: createTaskDto = {
      title: title.current?.value,
      description: description.current?.value
    }

    fetch('http://localhost:5000/tasks', {
      body: JSON.stringify(task),
      method: 'POST',
    })
  }

  return (
    <>
      <h1>Create your task</h1>

      <form onSubmit={handleSubmit}>
        <label >Title of your task</label>
        <input type="text" ref={title}/>

        <label >Description of your task:</label>
        <input type="text" ref={description}/>

        <button type="submit" >Create</button>
      </form>
    </>
  )
}
