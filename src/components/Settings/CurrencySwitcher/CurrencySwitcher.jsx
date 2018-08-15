import React from 'react';
import PropTypes from 'prop-types';

import currencyService from '../../../services/currency';
import CurrencyItem from './CurrencyItem';

import { Preloader } from '../../Common';

class CurrencySwitcher extends React.Component {

	state = {
		isLoading: true,
		currencies: []
	}

	componentDidMount() {

		currencyService.fetchRates()
			.then(() => {
				const currencies = currencyService.getSupportedCurrencies();
				this.setState({ 
					currencies, 
					isLoading: false 
				});
			})
			.catch((err) => { 
				console.log(err);
			});
	}

	render() {

		const { currencies, isLoading } = this.state;
		const { selectedCurrency, handleCurrencyChange } = this.props;
		
		return ( 
			<div className="currency__list">
				<div className="currency__list-header">
					Валюта
				</div>
				<div>
				{ 
					(isLoading) ?
					<Preloader /> :
					currencies.map((c) => (
						<CurrencyItem key={c}
							currency={c} 
							isSelected={ c === selectedCurrency }
							handleToggle={ handleCurrencyChange } />
					)) 
				}
				</div>
			</div>
		);
	}
}

CurrencySwitcher.propTypes = {
	selectedCurrency: PropTypes.string.isRequired,
	handleCurrencyChange: PropTypes.func.isRequired
};

export default CurrencySwitcher;