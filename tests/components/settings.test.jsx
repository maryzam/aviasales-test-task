import React from 'react';

import { shallow } from 'enzyme';

import Settings from "../../src/components/Settings/Settings";
import { StopsFilter } from "../../src/components/Settings/StopsFilter";
import { CurrencySwitcher } from "../../src/components/Settings/CurrencySwitcher";

describe("Settings Component", () => {

	it("should contains StopsFilter", () => {
		const settings = shallow(<Settings />);
		expect(settings.find(StopsFilter)).toHaveLength(1);
	})

	it("should contains CurrencySwitcher", () => {
		const settings = shallow(<Settings />);
		expect(settings.find(CurrencySwitcher)).toHaveLength(1);
	})
});
