import React from 'react';

import { shallow } from 'enzyme';

import { StopsFilter, StopCheckbox, StopOnly } from "../../src/components/Settings/StopsFilter";

describe("StopsFilter", () => {

	it("should contains correct title", () => {
		const stops = Array(4).fill(true);

		const filter = shallow(<StopsFilter stops={ stops }/>);

		expect(filter.html()).toMatch(/Количество пересадок/i);
	});

	it("should not render 'только' button in front of 'Все' checkbox", () => {
		const stops = Array(4).fill(true);

		const filter = shallow(<StopsFilter stops={ stops }/>);
		const onlyBtns = filter.find(StopCheckbox);

		expect(onlyBtns.some((w) => (w.props().stop === -1))).toBe(false);
	});

	it("it should checked 'Все' checkbox when all stop types are selected", () => {
		const stops = Array(4).fill(true);

		const filter = shallow(<StopsFilter stops={ stops }/>);
		const checkboxes = filter.find(StopCheckbox);

		expect(checkboxes).toHaveLength(5);
		expect(checkboxes.some((w) => !w.props().checked)).toBe(false);
	});

	it("it should unchecked 'Все' checkbox when any of stop types isn't selected", () => {
		const stops = Array(4).fill(true);
		stops[0] = false;

		const filter = shallow(<StopsFilter stops={ stops }/>);
		const checkboxes = filter.find(StopCheckbox);
		const allCheckbox = checkboxes.find({ stop: -1 });
		expect(allCheckbox.props().checked).toBe(false);
	});

})
