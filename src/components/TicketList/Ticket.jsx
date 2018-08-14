import React from 'react';

import { formatStops, formatPrice, getCarrierLogo } from '../../utils';
import currencyService from '../../services/currency';

import moment from "moment";
import locale_ru from "moment/locale/ru";
moment.locale("ru", locale_ru);

function formatDate(date) {
	return moment(date, "DD.MM.YY").format("D MMM YYYY, ddd");
}

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
							{ formatDate(info.departure_date) }
						</p>
					</div>
					<div className="ticket__details-stops">
						<p>{ formatStops(info.stops) } &nbsp;</p>
						<div className="ticket__details-path">
							<div className="ticket__details-line"></div>
							<div className="ticket__details-airplane"></div>
						</div>
					</div>
					<div className="ticket__details-arrival">
						<p className="ticket__details-time">
							{ info.arrival_time }
						</p>
						<p className="ticket__details-airport">
							{ info.destination_name }, { info.destination }
						</p>
						<p className="ticket__details-date">
							{ formatDate(info.arrival_date) }
						</p>
					</div>
				</section>
			</article>
		);
	};

export default Ticket;