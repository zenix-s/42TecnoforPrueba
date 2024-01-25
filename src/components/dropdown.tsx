
import React from 'react';

interface DropdownProps {
	options: string[];
	onOptionClick: (option: string) => void;
}

const Dropdown: React.FC<DropdownProps> = ({ options, onOptionClick }) => {
	const handleOptionClick = (option: string) => {
		onOptionClick(option);
	};

	return (
		<select className='action-button'>
			{options.map((option, index) => (
				<option key={index} value={option} onClick={() => handleOptionClick(option)}>
					{option}
				</option>
			))}
		</select>
	);
};

export default Dropdown;
