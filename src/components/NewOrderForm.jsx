import PropTypes from 'prop-types'
import { useState } from 'react'

const STATUS_VALUES = ['pending', 'shipped', 'delivered']

export default function NewOrderForm({ onAdd }) {
	const [customer, setCustomer] = useState('')
	const [status, setStatus] = useState('pending')
	const [items, setItems] = useState([{ productId: 1, name: '', quantity: 1, price: 0 }])

	function updateItem(index, key, value) {
		setItems((prev) => prev.map((it, i) => (i === index ? { ...it, [key]: value } : it)))
	}

	function addLine() {
		setItems((prev) => [...prev, { productId: prev.length + 1, name: '', quantity: 1, price: 0 }])
	}

	function removeLine(index) {
		setItems((prev) => prev.filter((_, i) => i !== index))
	}

	function handleSubmit(e) {
		e.preventDefault()
		// Business rules aligned with PropTypes: customer >= 3 chars, qty > 0
		if (customer.trim().length < 3) return
		const normalizedItems = items
			.filter((it) => it.name.trim() !== '')
			.map((it, idx) => ({
				productId: idx + 1,
				name: it.name.trim(),
				quantity: Number(it.quantity),
				price: Number(it.price),
			}))
		if (normalizedItems.length === 0) return
		if (normalizedItems.some((it) => it.quantity <= 0)) return
		const newOrder = {
			id: Date.now(),
			customer: customer.trim(),
			status,
			date: new Date(),
			items: normalizedItems,
		}
		onAdd(newOrder)
		setCustomer('')
		setStatus('pending')
		setItems([{ productId: 1, name: '', quantity: 1, price: 0 }])
	}

	return (
		<form className="new-order-form" onSubmit={handleSubmit}>
			<h3>Nuevo pedido</h3>
			<div className="row">
				<label htmlFor="customer">Cliente</label>
				<input id="customer" value={customer} onChange={(e) => setCustomer(e.target.value)} placeholder="Ej: Juan Pérez" />
			</div>
			<div className="row">
				<label htmlFor="status">Estado</label>
				<select id="status" value={status} onChange={(e) => setStatus(e.target.value)}>
					{STATUS_VALUES.map((s) => (
						<option key={s} value={s}>{s}</option>
					))}
				</select>
			</div>
			<h4>Productos</h4>
			<div className="items">
				{items.map((it, index) => (
					<div key={index} className="item-row">
						<input aria-label={`Producto ${index + 1}`} value={it.name} onChange={(e) => updateItem(index, 'name', e.target.value)} placeholder="Nombre del producto" />
						<input aria-label={`Cantidad ${index + 1}`} type="number" value={it.quantity} onChange={(e) => updateItem(index, 'quantity', e.target.value)} min={1} step={1} placeholder="Cant." />
						<input aria-label={`Precio ${index + 1}`} type="number" value={it.price} onChange={(e) => updateItem(index, 'price', e.target.value)} min={0} step={0.01} placeholder="Precio" />
						<button type="button" onClick={() => removeLine(index)}>Eliminar</button>
					</div>
				))}
				<button type="button" onClick={addLine}>Agregar producto</button>
			</div>
			<div className="actions">
				<button type="submit">Agregar pedido</button>
			</div>
		</form>
	)
}

NewOrderForm.propTypes = {
	onAdd: PropTypes.func.isRequired,
}


