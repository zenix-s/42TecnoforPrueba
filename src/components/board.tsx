import '../App.css';
import Tasks from './Tasks';
import { task } from '../interfaces';

interface BoardProps {
	tasks: task[];
	onDeleteClick: (task: task) => void;
}

const Board = (
	{ tasks, onDeleteClick }: BoardProps
) => {
  return (
    <>
      <div className="board-bg">
        <h1 className='board-title'>To do</h1>
        <Tasks 
					tasks={tasks}
					onDeleteClick={onDeleteClick}
				/>
      </div>

    </>
  );
};

export default Board;
