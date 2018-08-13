import React from 'react';

import './styles.css';

import currencyService from '../../../services/currency';
import CurrencyItem from './CurrencyItem';

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
		console.log(currencies);
		return ( 
			<div className="currency__list">
				<div>Валюта</div>
				<div>
				{ 
					isLoading ?
					<span>Загрузка...</span> :
					currencies.map((c) => (
						<CurrencyItem key={c}
							currency={c} 
							isSelected={ c === selectedCurrency }
							handleToggle={ handleCurrencyChange }
							selectedCurrency={ selectedCurrency }/>
					)) 
				}
				</div>
			</div>
		);
	}
}

export default CurrencySwitcher;