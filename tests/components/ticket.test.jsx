import React from 'react';

import { shallow } from 'enzyme';

import { Ticket } from "../../src/components/TicketList";

const singleTicket = {
						id: 123,
						carrier: {
							name: "TK",
							logo: "TK.png"
						},
						departure: {
							airport: "VVO, Владивосток",
							date: "12 мая 2018, сб",
							time: "17:00",
						},
						arrival: {
							airport: "Тель-Авив, TLV",
							date: "12 мая 2018, сб",
							time: "23:30",
						},
						price: 12400,
						stops: 3,
						stopsLabel: "3 пересадки"
					};

describe("Ticket", () => {

	it("should contain informtion about destination airport", () => {
		const ticket = shallow(<Ticket info={ singleTicket } />);
		const { airport } = singleTicket.arrival;
		expect(ticket.html()).toMatch(new RegExp(airport));
	});

	it("should contain informtion about departure airport", () => {
		const ticket = shallow(<Ticket info={ singleTicket } />);
		const { airport } = singleTicket.departure;
		expect(ticket.html()).toMatch(new RegExp(airport));
	});

	it("should contain informtion about stops", () => {
		const ticket = shallow(<Ticket info={ singleTicket } />);
		const stops = singleTicket.stopsLabel;
		expect(ticket.html()).toMatch(new RegExp(stops));
	});

});