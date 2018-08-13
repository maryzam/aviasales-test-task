
import { formatStops, formatPrice, getCarrierLogo } from '../../src/utils';

function getRandomStop(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

describe("formatStops function", () => {

	describe("When there is no stops", () => {

		it("should return an empty string", () => {
			  const actual = formatStops(0);
			  expect(actual).toBe("");
		})
	});

	describe("When incorrect number of stops has been passed", () => {

		it("should return an empty string", () => {
			  const actual = formatStops(-102);
			  expect(actual).toBe("");
		})
	});

	describe("When there is only one stop", () => {

		it("should return a correct label", () => {
			  const actual = formatStops(1);
			  expect(actual).toBe("1 пересадка");
		})
	});

	describe("When number of stops is between 1 & 5", () => {

		it("should return a correct label", () => {
			const stop = getRandomStop(2, 4); 
			const actual = formatStops(stop);
			expect(actual).toMatch(/пересадки/);
		})
	});

	describe("When number of stops is large than 4", () => {

		it("should return a correct label", () => {
			const stop = getRandomStop(5, 10); 
			const actual = formatStops(stop);
			expect(actual).toMatch(/пересадок/);
		})
	});
});

describe("getCarrierLogo function", () => {

	it("should return link to .png based on carrier", () => {

		const carrier = "randomCarier123";
		const link = getCarrierLogo(carrier);
		expect(link).toMatch(new RegExp(carrier));
	})
});

describe("formatPrice function", () => {

	it("should format prices based on currency settings correctly", () => {
		const price = 201;
		expect(formatPrice(price, "RUB")).toBe("201₽");
		expect(formatPrice(price, "USD")).toBe("$201");
		expect(formatPrice(price, "EUR")).toBe("€201");
	});

	it("should return formated price for an unknown currency as well", () => {
		const price = 201;
		const currency = "customCurrency"
		expect(formatPrice(price, currency)).toBe("201 customCurrency");
	});

	it("should split price by thousands", () => {
		const result = formatPrice(10250, "RUB");
		expect(result).toEqual(expect.stringContaining("10 250"));
	});

	it("should return an empty string when price is null", () => {
		const result = formatPrice(null, "RUB");
		expect(result).toBe("");
	});
});