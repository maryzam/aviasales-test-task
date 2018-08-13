
import React from 'react';

const CurrencyItem = ({ currency, isSelected, handleToggle, selectedCurrency }) => {
		const statusClass = isSelected ? "button--selected" : "";
		return (
			<button
				className={ `currency__button ${statusClass}` }
					key={ currency}
					value={ currency}
					onClick={ handleToggle } >
						{ currency }
			</button>
		);
}; 

export default CurrencyItem;