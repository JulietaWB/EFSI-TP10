import PropTypes from 'prop-types'

const STATUS_VALUES = ['pending', 'shipped', 'delivered']

export default function OrderItem({ id, customer, date, status, items }) {
	return (
		<div className="order-item">
			<div className="order-header">
				<div>
					<strong>#{id}</strong> — {customer}
				</div>
				<div className={`badge badge-${status}`}>{status}</div>
			</div>
			<div className="order-subheader">
				<span>{date.toLocaleDateString()}</span>
			</div>
			<ul className="order-items">
				{items.map((item) => (
					<li key={item.productId} className="order-line">
						<span className="name">{item.name}</span>
						<span className="qty">x{item.quantity}</span>
						<span className="price">${(item.price * item.quantity).toFixed(2)}</span>
					</li>
				))}
			</ul>
		</div>
	)
}

OrderItem.propTypes = {
	id: PropTypes.number.isRequired,
	customer: (props, propName, componentName) => {
		const value = props[propName]
		if (typeof value !== 'string') {
			return new Error(`${componentName}: ${propName} must be a string`)
		}
		if (value.trim().length < 3) {
			return new Error(`${componentName}: ${propName} must have at least 3 characters`)
		}
		return null
	},
	items: PropTypes.arrayOf(
		PropTypes.shape({
			productId: PropTypes.number.isRequired,
			name: PropTypes.string.isRequired,
			quantity: (props, propName, componentName) => {
				const value = props[propName]
				if (typeof value !== 'number' || Number.isNaN(value)) {
					return new Error(`${componentName}: quantity must be a number`)
				}
				if (value <= 0) {
					return new Error(`${componentName}: quantity must be greater than 0`)
				}
				return null
			},
			price: PropTypes.number.isRequired,
		})
	).isRequired,
	status: PropTypes.oneOf(STATUS_VALUES),
	date: PropTypes.instanceOf(Date),
}

OrderItem.defaultProps = {
	status: 'pending',
	date: new Date(),
}


