import PropTypes from 'prop-types'

export default function OrderStats({ total, pending, shipped, delivered }) {
	return (
		<div className="order-stats">
			<div><strong>Total:</strong> {total}</div>
			<div><strong>Pending:</strong> {pending}</div>
			<div><strong>Shipped:</strong> {shipped}</div>
			<div><strong>Delivered:</strong> {delivered}</div>
		</div>
	)
}

OrderStats.propTypes = {
	total: PropTypes.number.isRequired,
	pending: PropTypes.number.isRequired,
	shipped: PropTypes.number.isRequired,
	delivered: PropTypes.number.isRequired,
}


