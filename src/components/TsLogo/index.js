import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

const TsLogo = (props) => {
	const { className } = props;

	return (
		<svg {...props} className={cx(className, 'ts-logo')} viewBox="0 0 36 36">
			<path d="M20 26V14H26V10H16V14V26H20Z" fill="black" />
			<path d="M14 10H10V14H14V10Z" fill="black" />
		</svg>
	);
};

export default TsLogo;

TsLogo.propTypes = {
	className: PropTypes.string,
	style: PropTypes.object,
};

TsLogo.defaultProps = {
	className: '',
	style: {
		display: 'inline-block',
		width: '36px',
		height: '36px',
	},
};
