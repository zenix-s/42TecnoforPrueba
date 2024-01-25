import { task } from "../interfaces"
import Action from "./actions";

interface TaskProps {
	task : task
	onDeleteClick: (task: task) => void;
}

const Task=(
	{
		task, 
		onDeleteClick
	}: TaskProps,
)=> {
  return (
    <div id="tasks">
      {task.title}
			{" - "}
			{task.description}
			{" - "}
			{task.completed ? "Completada" : "Sin completar"}
			{" - "}
			<Action onClick={() => onDeleteClick(task)}>Eliminar</Action>
    </div>
  )
}

export default Task