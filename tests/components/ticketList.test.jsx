import React from 'react';

import { shallow } from 'enzyme';

import TicketList from "../../src/components/TicketList";
import Ticket from "../../src/components/TicketList/Ticket";
import NoTickets from "../../src/components/TicketList/NoTickets";

const tickets = [{
			"id": 1,
		    "origin": "VVO",
		    "origin_name": "Владивосток",
		    "destination": "TLV",
		    "destination_name": "Тель-Авив",
		    "departure_date": "12.05.18",
		    "departure_time": "16:20",
		    "arrival_date": "12.05.18",
		    "arrival_time": "22:10",
		    "carrier": "TK",
		    "stops": 3,
		    "price": 12400
		  }, {
			"id": 2,
		    "origin": "VVO",
		    "origin_name": "Владивосток",
		    "destination": "TLV",
		    "destination_name": "Тель-Авив",
		    "departure_date": "12.05.18",
		    "departure_time": "17:20",
		    "arrival_date": "12.05.18",
		    "arrival_time": "23:50",
		    "carrier": "S7",
		    "stops": 1,
		    "price": 13100
		  }];

const singleTicket = {
			"id": 1,
		    "origin": "VVO",
		    "origin_name": "Владивосток",
		    "destination": "TLV",
		    "destination_name": "Тель-Авив",
		    "departure_date": "12.05.18",
		    "departure_time": "16:20",
		    "arrival_date": "12.05.18",
		    "arrival_time": "22:10",
		    "carrier": "TK",
		    "stops": 3,
		    "price": 12400
		  };

describe("TicketList", () => {

	describe("when there are tickets", () =>{
		it("should render all tickets", () => {
			const ticketList = shallow(<TicketList tickets={ tickets }/>);
			expect(ticketList.find(Ticket)).toHaveLength(tickets.length);	
		})
	})

	describe("when there is no tickets", () => {
		it("should render 'No Tickets' message", () => {
			const noTickets = []
			const ticketList = shallow(<TicketList tickets={ noTickets }/>);
			expect(ticketList.find(NoTickets)).toHaveLength(1);	
			expect(ticketList.find(Ticket)).toHaveLength(0);	
		})
	})
});

describe("Ticket", () => {

	it("should contain informtion about destination airport", () => {
		const ticket = shallow(<Ticket info={ singleTicket } />);
		const { destination, destination_name } = singleTicket;
		expect(ticket.html()).toMatch(new RegExp(destination));
		expect(ticket.html()).toMatch(new RegExp(destination_name));
	});

	it("should contain informtion about departure airport", () => {
		const ticket = shallow(<Ticket info={ singleTicket } />);
		const { origin, origin_name } = singleTicket;
		expect(ticket.html()).toMatch(new RegExp(origin));
		expect(ticket.html()).toMatch(new RegExp(origin_name));
	});
});