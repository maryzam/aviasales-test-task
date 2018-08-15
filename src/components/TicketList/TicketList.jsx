import React from 'react';
import PropTypes from 'prop-types';

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

TicketList.propTypes = {
	tickets: PropTypes.arrayOf(PropTypes.object).isRequired,
	currency: PropTypes.string.isRequired
};

export default TicketList;