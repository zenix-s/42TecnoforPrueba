import { task } from "../interfaces";
import Action from "./actions";
import Dropdown from "./dropdown";
interface HeaderProps {
  addTaskForm: () => void;
  deleteCompletedTasks: () => void;
  onFilterOptionClick: (filter: string) => void;
}

const Header = ({
  addTaskForm,
  deleteCompletedTasks,
  onFilterOptionClick,
}: HeaderProps) => {
  return (
    <>
      <div>
        <h1 className="header-title">Tablero</h1>
      </div>
      <div id="header-actions">
        <Action onClick={() => addTaskForm()}>Nueva Tarea</Action>

        <Dropdown
          options={["Todas", "Completadas", "Sin completar"]}
          onOptionClick={(option: string) => onFilterOptionClick(option)}
        />

        <Action onClick={() => deleteCompletedTasks()}>
          Eliminar tareas completadas
        </Action>
      </div>
    </>
  );
};

export default Header;
