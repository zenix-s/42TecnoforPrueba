import { task } from '../interfaces';
import Task from './Task';

interface tasksProps {
	tasks: task[];
	onDeleteClick: (task: task) => void;
}

  // const deleteTask = (id: number) => {
  //   setTasks(tasks.filter((task: any) => task.id !== id))
  //   localStorage.setItem('tasks', JSON.stringify(tasks.filter((task: any) => task.id !== id)))
  // }

const Tasks = ({ tasks, onDeleteClick }: tasksProps) => {

	const handleDeleteClick = (task: task) => {
		onDeleteClick(task);
	}

	return (
		<div id="tasks">
			{tasks.map((task) => (
				<div key={task.id} className="task">
					<Task
						task={task}
					/>
				</div>
			))}
		</div>
	);

}

export default Tasks;