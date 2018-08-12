import React from 'react';

import './styles.css';

import { formatStops } from '../../../utils/formatting';

const StopsFilter = ({ stops, handleStopToggle, handleStopOnly }) => {

	const isAllChecked = stops.every((s) => s === true);

	return (
		<div className="filter">
			<div className="filter__header">
				Количество пересадок
			</div>
			<div className="filter__list">
				<div className="filter__item">
					<input className="checkbox__item"
						id="stops-all"
						type="checkbox"
						checked={ isAllChecked }
						value="all"
						onChange={ handleStopToggle }>
					</input>
					<label htmlFor="stops-all" className="checkbox__label">
						Все
					</label>
				</div>
				{ 
					stops
						.map((isChecked, current) => {
							const itemId = `stops-${current}`;
							const labelText = current === 0 ? 
									"Без пересадок" :
									formatStops(current);
							return (
								<div key={ current } className="filter__item">
									<input className="checkbox__item"
										id={itemId}
										type="checkbox"
										checked={ isChecked }
										value={ current }
										onChange={ handleStopToggle }>
									</input>
									<label htmlFor={itemId} className="checkbox__label">
										{ labelText }
									</label>
									<a className="filter__item-only"
										onClick={ handleStopOnly }
										data-stop={ current }>
										только
									</a>
								</div>);
						}
					)
				}
				</div>
			</div>
	)
}

export default StopsFilter;