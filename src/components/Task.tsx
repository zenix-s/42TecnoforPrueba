import { task } from "../interfaces"

interface TaskProps {
	task : task
}

const Task=(
	{task}: TaskProps
)=> {
  return (
    <div id="tasks">
      {task.title}
			{" - "}
			{task.description}
			{" - "}
			{task.completed ? "Completada" : "Sin completar"}
    </div>
  )
}

export default Task