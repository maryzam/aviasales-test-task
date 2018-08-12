import React from 'react';

import './styles.css';

import Ticket from './Ticket';
import NoTickets from './NoTickets';

const TicketList = ({ tickets }) => {

		return (
			<main className="ticketList"> 
			{
				(tickets.length > 0) ?
					tickets.map((info) => (<Ticket key={ info.id } info={ info } />)) :
					<NoTickets />
					
			}
			</main>
		); 
			
	};

export default TicketList;