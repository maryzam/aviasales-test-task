import React from 'react';
import PropTypes from 'prop-types';

import styles from './errorMessage.css';

const ErrorMessage = ({ message, onRetry }) => (
		<div className="error__container">
			<h4 className="error__header">
				Упс! Ошибка
			</h4>
			<p className="error__text">
				{ message }
			</p>
			{ 
				(onRetry) ?
					(<p className="error__retry">
						<button className="error__retry-button"
							onClick={ onRetry }>
							Попробовать еще раз
						</button>
					</p>) :
					null
			}
		</div>
	);

ErrorMessage.propTypes = {
	message: PropTypes.string.isRequired,
	onRetry: PropTypes.func
};

ErrorMessage.defaultProps = {
    message: "Что-то пошло не так 😕"
};

export default ErrorMessage;