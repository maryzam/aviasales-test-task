import React from 'react';
import PropTypes from 'prop-types';

import StopCheckbox from './StopCheckbox';
import StopOnly from './StopOnly';

function getOnSetOnlyHandler(stops, handleStopsChange) {
	
	return ({ target }) => {
		const total = stops.length;
		const stopType = +target.dataset.stop;
		const newStops = Array(total).fill(false);
		newStops[stopType] = true;
		handleStopsChange(newStops);
	}
};

function getOnToggleHandler(stops, handleStopsChange) {

	return ({ target }) => {
		const stopType = +target.value;
		const isChecked = target.checked;
		const total = stops.length;

		if (stopType === -1) { // select all stops at once
			handleStopsChange(Array(total).fill(isChecked));
			return; 
		} 
		const newStops = [...stops];
		newStops[stopType] = isChecked;
		handleStopsChange(newStops);
	}
};

const StopsFilter = ({ stops, handleStopsChange }) => {

	const onSetOnlyStop = getOnSetOnlyHandler(stops, handleStopsChange);
	const onToggleStop = getOnToggleHandler(stops, handleStopsChange);

	const isAllChecked = stops.every((s) => s === true);

	return (
		<div className="filter">
			<div className="filter__header">
				Количество пересадок
			</div>
			<div className="filter__list">
				<div className="filter__item">
					<StopCheckbox 
						stop={-1}
						checked={ isAllChecked }
						handleToggle={ onToggleStop } />
				</div>
				{ 
					stops.map((isChecked, current) => {
							return (
								<div key={ current } className="filter__item">
									<StopCheckbox 
										stop={ current }
										checked={ isChecked }
										handleToggle={ onToggleStop } />
									<StopOnly 
										stop={ current }
										handleClick= { onSetOnlyStop } />
								</div>);
						})
				}
				</div>
			</div>
	)
}

StopsFilter.propTypes = {
	stops: PropTypes.arrayOf(PropTypes.bool).isRequired,
	handleStopsChange: PropTypes.func.isRequired
};

export default StopsFilter;