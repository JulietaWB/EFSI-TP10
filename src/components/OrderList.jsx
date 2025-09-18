import PropTypes from 'prop-types'
import OrderItem from './OrderItem'

export default function OrderList({ orders }) {
	return (
		<div className="order-list">
			{orders.map((order) => (
				<OrderItem key={order.id} {...order} />
			))}
		</div>
	)
}

OrderList.propTypes = {
	orders: PropTypes.arrayOf(PropTypes.object).isRequired,
}


