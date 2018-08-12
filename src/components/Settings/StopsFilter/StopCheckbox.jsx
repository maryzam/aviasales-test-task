import React, { Fragment } from 'react';

import { formatStops } from '../../../utils';

function getLabelText(stop) {
	switch(stop) {
		case -1:
			return "Все";
		case 0:
			return "Без пересадок";
		default:
			return formatStops(stop);
	}
}

const StopCheckbox = ({ stop, checked, handleToggle }) => {

		const itemId = `stops-${stop}`;
		return (
			<Fragment>
				<input className="checkbox__item"
					id={ itemId }
					type="checkbox"
					checked={ checked }
					value={ stop }
					onChange={ handleToggle }>
				</input>
				<label htmlFor={ itemId } className="checkbox__label">
					{ getLabelText(stop) }
				</label>
			</Fragment>
		);
	};

export default StopCheckbox;