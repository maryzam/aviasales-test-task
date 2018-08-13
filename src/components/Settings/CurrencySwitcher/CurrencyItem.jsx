
import React from 'react';

const CurrencyItem = ({ currency, isSelected, handleToggle, selectedCurrency }) => {
		const statusClass = isSelected ? 
							"currency__button--selected" :
							"currency__button";
		return (
			<button
				className={ statusClass }
					key={ currency}
					value={ currency}
					onClick={ handleToggle } >
						{ currency }
			</button>
		);
}; 

export default CurrencyItem;