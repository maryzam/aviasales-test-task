import React from 'react';

import { formatStops, formatPrice, getCarrierLogo } from '../../utils';
import currencyService from '../../services/currency';

const Ticket = ({ info, currency }) => {

		const price = currencyService.exchange(info.price, currency);

		return (
			<article className="ticket">

				<section className="ticket__buy">
					<img className="ticket__carrier-logo" 
						 src={ getCarrierLogo(info.carrier) } 
						 alt={ info.carrier } />
					<button className="ticket__buy-button">
						<span className="buy-button__text">Купить</span>
						<span className="buy-button__text">за { formatPrice(price, currency) }</span>
					</button>
				</section>

				<section className="ticket__details">
					<div className="ticket__details-departure">
						<p className="ticket__details-time">
							{ info.departure_time }
						</p>
						<p className="ticket__details-airport">
							{ info.origin }, { info.origin_name }
						</p>
						<p className="ticket__details-date">
							{ info.departure_date }
						</p>
					</div>
					<div className="ticket__details-stops">
						<p>{ formatStops(info.stops) }</p>
					</div>
					<div className="ticket__details-arrival">
						<p className="ticket__details-time">
							{ info.arrival_time }
						</p>
						<p className="ticket__details-airport">
							{ info.destination_name }, { info.destination }
						</p>
						<p className="ticket__details-date">
							{ info.arrival_date }
						</p>
					</div>
				</section>
			</article>
		);
	};

export default Ticket;