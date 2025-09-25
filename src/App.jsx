import { useMemo, useState } from 'react'
import './App.css'
import OrderList from './components/OrderList'
import OrderFilter from './components/OrderFilter'
import OrderStats from './components/OrderStats'
import NewOrderForm from './components/NewOrderForm'

function App() {
  const [orders, setOrders] = useState([
    {
      id: 1001,
      customer: 'Juan Perez',
      date: new Date('2025-09-10'),
      status: 'pending',
      items: [
        { productId: 1, name: 'Caja chica', quantity: 2, price: 1500 },
        { productId: 2, name: 'Sobres A4', quantity: 1, price: 900 },
      ],
    },
    {
      id: 1002,
      customer: 'Maria Gomez',
      date: new Date('2025-09-11'),
      status: 'shipped',
      items: [
        { productId: 1, name: 'Etiqueta térmica', quantity: 4, price: 300 },
      ],
    },
    {
      id: 1003,
      customer: 'ACME Store',
      date: new Date('2025-09-12'),
      status: 'delivered',
      items: [
        { productId: 1, name: 'Cinta de embalaje', quantity: 3, price: 700 },
      ],
    },
  ])

  const [filter, setFilter] = useState('')

  const filteredOrders = useMemo(() => {
    if (!filter) return orders
    return orders.filter((o) => o.status === filter)
  }, [orders, filter])

  const stats = useMemo(() => {
    const pending = orders.filter((o) => o.status === 'pending').length
    const shipped = orders.filter((o) => o.status === 'shipped').length
    const delivered = orders.filter((o) => o.status === 'delivered').length
    return { total: orders.length, pending, shipped, delivered }
  }, [orders])

  function handleAddOrder(order) {
    setOrders((prev) => [order, ...prev])
  }

  return (
    <>
      <header className="app-header">
        <div>
          <h1>Gestión de pedidos</h1>
          <div className="subtitle">-MailAmericas-</div>
        </div>
      </header>
      <div className="dashboard">
        <div className="side">
          <OrderFilter filter={filter} onChange={setFilter} />
          <OrderStats {...stats} />
          <NewOrderForm onAdd={handleAddOrder} />
        </div>
        <div className="orders-panel">
          <h2>Pedidos</h2>
          <OrderList orders={filteredOrders} />
        </div>
      </div>
    </>
  )
}

export default App
