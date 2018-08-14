import React from 'react';

import { formatPrice } from '../../utils';
import currencyService from '../../services/currency';

const Ticket = ({ info, currency }) => {

		const price = currencyService.exchange(info.price, currency);

		return (
			<article className="ticket">

				<section className="ticket__buy">
					<img className="ticket__carrier-logo" 
						 src={ info.carrier.logo } 
						 alt={ info.carrier.name } />
					<button className="ticket__buy-button">
						<span className="buy-button__text">Купить</span>
						<span className="buy-button__text">за { formatPrice(price, currency) }</span>
					</button>
				</section>

				<section className="ticket__details">
					<div className="ticket__details-departure">
						<p className="ticket__details-time">
							{ info.departure.time }
						</p>
						<p className="ticket__details-airport">
							{ info.departure.airport }
						</p>
						<p className="ticket__details-date">
							{ info.departure.date }
						</p>
					</div>
					<div className="ticket__details-stops">
						<p>{ info.stopsLabel } &nbsp;</p>
						<div className="ticket__details-path">
							<div className="ticket__details-line"></div>
							<div className="ticket__details-airplane"></div>
						</div>
					</div>
					<div className="ticket__details-arrival">
						<p className="ticket__details-time">
							{ info.arrival.time }
						</p>
						<p className="ticket__details-airport">
							{ info.arrival.airport }
						</p>
						<p className="ticket__details-date">
							{ info.arrival.date }
						</p>
					</div>
				</section>
			</article>
		);
	};

export default Ticket;