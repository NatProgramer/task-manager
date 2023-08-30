import { MappedTask } from '../Interfaces/task.interface'
import TaskItem from './TaskItem'

interface Props {
    tasks: MappedTask[]
}

export default function TaskList({ tasks }: Props) {
  return (
        <ul>
          {
            tasks.length > 0 ? tasks.map((task: MappedTask) => (
              <TaskItem key={task.id} task={task} />
            )) : <></>
          }
        </ul>
  )
}
