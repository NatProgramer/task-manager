import { MappedTask } from "../Interfaces/task.interface"

interface Props {
  task: MappedTask;
}

export default function TaskItem ({ task }: Props) {
  return (
      <li >

        <h2>{task.title}</h2>
        <p>{task.description}</p>

        <span className="tag">#{task.status.toLowerCase()}</span>

        <span className={"tag"}>#{task.priority.toLowerCase()}</span>

      </li>
  )
}