import './Board.css';
import Square from './Square';

export default function Board({ squares, onClick }) {
	return (
		<div className="board">
			{ squares.map((square, index) => (
			    <Square key={index} value={square} onClick={() => onClick(index)} />
			)) }
		</div>
	);
}
