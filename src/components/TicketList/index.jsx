import React from 'react';

import './styles.css';

function formatStops(stops) {
	if (stops < 1) {
		return "";
	}
	if (stops === 1) {
		return "1 пересадка"; 
	}
	if (stops > 1 && stops < 5) {
		return `${stops} пересадки`;
	}
	return `${stops} пересадок`;
}

const Ticket = ({ info }) => {

		return (
			<article className="ticket">

				<section className="ticket__buy">
					<img className="ticket__carrier-logo" 
						 src="" 
						 alt={ info.carrier } />
					<button className="ticket__buy-button">
						Купить за { info.price }₽
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

const TicketList = ({ tickets }) => {

		return (
			<main className="ticketList">
				{
					tickets.map((info) => (<Ticket key={ info.id } info={ info } />))
				}
			</main>
		); 
			
	};

export default TicketList;