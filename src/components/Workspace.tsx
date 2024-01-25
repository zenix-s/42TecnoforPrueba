
import  { useState } from "react";
import Header from "./header";
import Board from "./board";
import { task } from "../interfaces";



const Workspace = () => {
	// const [tasks, setTasks] = useState<task[]>([]);
	const tasksL: task[] = [
		{
			id: "1",
			title: "Complete project proposal",
			description: "Write and finalize the project proposal document",
			createDate: new Date(),
			completed: false
		},
		{
			id: "2",
			title: "Design user interface",
			description: "Create wireframes and mockups for the user interface",
			createDate: new Date(),
			completed: false
		},
		{
			id: "3",
			title: "Implement authentication system",
			description: "Add user authentication functionality to the application",
			createDate: new Date(),
			completed: false
		},
		{
			id: "4",
			title: "Fix bug in data processing module",
			description: "Investigate and resolve the bug in the data processing module",
			createDate: new Date(),
			completed: false
		},
		{
			id: "5",
			title: "Write unit tests",
			description: "Create unit tests for critical application components",
			createDate: new Date(),
			completed: false
		},
		{
			id: "6",
			title: "Optimize database queries",
			description: "Improve the performance of database queries in the application",
			createDate: new Date(),
			completed: false
		},
		{
			id: "7",
			title: "Refactor codebase",
			description: "Simplify and improve the structure of the codebase",
			createDate: new Date(),
			completed: false
		},
		{
			id: "8",
			title: "Implement data visualization",
			description: "Integrate a data visualization library into the application",
			createDate: new Date(),
			completed: false
		},
		{
			id: "9",
			title: "Write API documentation",
			description: "Document the API endpoints and usage for external developers",
			createDate: new Date(),
			completed: false
		},
		{
			id: "10",
			title: "Deploy application to production",
			description: "Prepare and deploy the application to the production environment",
			createDate: new Date(),
			completed: false
		}
	];

	
	const [tasks, setTasks] = useState<task[]>(tasksL);

	const onFilterOptionClick = (filter: string) => {
		alert(filter);
	}
	const addTaskForm = () => {
		alert("add task form");
	}

	const deleteCompletedTasks = () => {
		alert("delete completed tasks");
	}

	const deleteTask = (task: task) => {
		alert("delete task" + task.id);
	}


	return (
		<div id="workspace">
			<div className="header">
				<Header 
					onFilterOptionClick={onFilterOptionClick}
					addTaskForm={addTaskForm}
					deleteCompletedTasks={deleteCompletedTasks}
				/>
			</div>
			<div className="board">
				<Board 
					tasks={tasks}
					onDeleteClick={deleteTask}
				/>
			</div>
		</div>
	);
};

export default Workspace;