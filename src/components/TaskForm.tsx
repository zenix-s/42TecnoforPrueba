import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { task } from "../interfaces";

const TaskForm = () => {
  const [tasks, setTasks] = useState<task[]>([]);
  const [task, setTask] = useState<task>({
    id: uuidv4(),
    title: "",
    description: "",
    createDate: new Date(),
    completed: false,
  });

  useEffect(() => {
    setTasks(
      localStorage.getItem("tasks")
        ? JSON.parse(localStorage.getItem("tasks")!)
        : []
    );
  }, []);

  const addTask = (task: task) => {
    if (task.title === "" || task.description === "") {
      return;
    }
    setTasks([...tasks, task]);
    localStorage.setItem("tasks", JSON.stringify(tasks));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const { name, value } = e.target;
    console.log(task);
    return setTask({ ...task, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addTask(task);
    e.currentTarget.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Escribir un título"
        name="title"
        onChange={handleChange}
        value={task.title}
      ></input>
      <input
        placeholder="Escribir una descripción"
        name="description"
        onChange={handleChange}
        value={task.description}
      ></input>
      <button>Crear Tarea</button>
    </form>
  );
};

export default TaskForm;
