import React from 'react';

import './styles.css';

import Ticket from './Ticket';
import NoTickets from './NoTickets';

const TicketList = ({ tickets, currency }) => {

		return (
			<main className="ticketList"> 
			{
				(tickets && tickets.length > 0) ?
					tickets.map((info) => (
						<Ticket 
							key={ info.id } 
							info={ info } 
							currency={ currency }/> )
					) :
					<NoTickets />
			}
			</main>
		); 
			
	};

export default TicketList;