import { ChangeEvent, useRef } from "react";
import { Link } from "react-router-dom";
import useNewTask from "../Hooks/useNewTask";

export default function CreateTasks() {
  const title = useRef<string>('')
  const description = useRef<string>('')

  const { handleSubmit } = useNewTask(
    { title: title.current, description: description.current }
  )

  return (
    <>
      <h1>Create your task</h1>

      <form onSubmit={handleSubmit}>
        <label >Title of your task</label>
        <input onChange={(e: ChangeEvent<HTMLInputElement>) => {
          title.current = e.target.value
        }} type="text" placeholder="Something task"/>

        <label >Description of your task:</label>
        <textarea 
          onChange={(e: ChangeEvent<HTMLTextAreaElement>) => {
            description.current = e.target.value
          }} 
          placeholder="Something task that i need realize..." cols={31}/>

        <button type="submit">Create</button>
      </form>

      <footer>
        <Link className="return-to-main" to={'/'}>Return to tasks list</Link>
      </footer>
    </>
  )
}
