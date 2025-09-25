import PropTypes from 'prop-types'

const STATUS_VALUES = ['pending', 'shipped', 'delivered']

export default function OrderFilter({ filter, onChange }) {
	return (
		<div className="order-filter">
			<select value={filter} onChange={(e) => onChange(e.target.value)}>
				<option value="">Todo</option>
				{STATUS_VALUES.map((s) => (
					<option key={s} value={s}>
						{s}
					</option>
				))}
			</select>
		</div>
	)
}

OrderFilter.propTypes = {
	filter: PropTypes.oneOf(['', ...STATUS_VALUES]),
	onChange: PropTypes.func.isRequired,
}


