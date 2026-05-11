import { useState } from 'react'
import Navbar from '../components/Navbar'

const Transaction = () => {

  const [description, setDescription] = useState('')
  const [amount, setAmount] = useState('')
  const [date, setDate] = useState('')
  const [type, setType] = useState('debit')

  const [transactions, setTransactions] = useState([])

  const handleSubmit = () => {

    if (!description || !amount || !date) {
      alert ('Please fill in all the details')
      return
    }

    const newTransaction = {
      id: Date.now(),
      description,
      amount: parseFloat(amount),
      date,
      type,
    }

    setTransactions([...transactions, newTransaction])

    setDescription('')
    setAmount('')
    setDate('')
    setType('debit')

  }

  return (
    <div className='min-h-screen bg-gray-50'>
      <Navbar />
      <div className='pt-16 max-w-lg mx-auto px-4'>
        <h1 className='text-2xl font-bold text-gray-800 mt-6 mb-6'>Add Transaction</h1>
        <div className='bg-white rounded-2xl shadow-md p-6'>
          <div className='mb-4'>
            <label className='block text-sm font-semibold text-gray-500 mb-1'>Description</label>
            <input
              type="text"
              placeholder="e.g. Grocery shopping"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className='w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-400'
              />
          </div>
          <div className='mb-4'>
            <label className='block text-sm font-semibold text-gray-500 mb-1'>Amount ($)</label>
            <input 
              type="number"
              placeholder="0.00"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className='w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-400'
            />
          </div>

          <div>
            <label className='block font-semibold mb-1 text-sm text-gray-500'>Date</label>
            <input 
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className='w-full border border-gray-200 px-4 py-3 rounded-xl text-gray-500 focus:outline-none focus:ring-1 focus:ring-blue-400'
            />
          </div>

          <div className='mb-6 mt-4'>
            <label className='block text-sm font-semibold text-gray-500 mb-2'>Type</label>
            <div className='flex gap-3'>
              <button
                onClick={() => setType('debit')}
                className={`flex-1 py-2 px-3 rounded-xl font-semibold text-sm transition-all
                  ${type === 'debit' ? 'bg-red-500 text-white' : 'bg-gray-100 text-gray-500'}`}
              >Debit (Spending)</button>
              <button 
                onClick={() => setType('credit')}
                className={`flex-1 py-2 px-3 font-semibold rounded-xl text-sm transition-all
                  ${type === 'credit' ? 'bg-green-500 text-white' : 'bg-gray-100 text-gray-500'} `}
              >Credit (Income)</button>
            </div>
          </div>
          <button
            onClick={handleSubmit}
            className='w-full bg-blue-600 text-white py-3 rounded-xl font-bold text-sm hover:bg-blue-700 transition-all'
          >Add Transaction</button>

        </div>
      </div>

      {transactions.length > 0 && (
        <div className='mt-8 mb-8'>
          <h2 text-lg font-bold text-gray-700 mb-4>Recent Entries</h2>
          {transactions.map((item) => (
            <div key={item.id} className='bg-white rounded-xl shadow-sm p-4 mb-3 flex items-center justify-between'
            >
              <div className='flex items-center gap-3'>
                <div className={`w-10 h-10 rounded-full flex items-center justify-center text-lg
                  ${item.type === 'debit' ? 'bg-red-100' : 'bg-green-100'}`}>
                    {item.type === 'debit' ? '↓':'↑'}
                  </div>
                  <div>
                    <p className='text-gray-700 font-medium'>{item.description}</p>
                    <p className='text-gray-400 text-xs'>{item.date}</p>
                  </div>
              </div>
              <span>{item.type === 'debit' ? '-' : '+'}${item.amount}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default Transaction