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
						Купить за { formatPrice(price, currency) }
					</button>
				</section>

				<section className="ticket__details">
					<div className="ticket__details-departure">
						<p>{ info.departure_time }</p>
						<p>{ info.origin }, { info.origin_name }</p>
						<p>{ info.departure_date }</p>
					</div>
					<div className="ticket__details-stops">
						<p>{ formatStops(info.stops) }</p>
					</div>
					<div className="ticket__details-arrival">
						<p>{ info.arrival_time }</p>
						<p>{ info.origin }, { info.origin_name }</p>
						<p>{ info.arrival_date }</p>
					</div>
				</section>
			</article>
		);
	};

export default Ticket;