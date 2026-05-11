import { useState } from 'react'
import Navbar from '../components/Navbar'

const Dashboard = () => {

  const [balance, setBalance] = useState(67000)
  const [spendings, setSpendings] = useState([
    { id: 1, description: 'Grocery shopping', amount: 150, type: 'debit' },
    { id: 2, description: 'Salary received', amount: 300, type: 'credit' },
    { id: 3, description: 'Netflix', amount: 20, type: 'debit' },
  ])

  return (
    <div className='min-h-screen bg-gray-50'>
      <Navbar />

      {/* ONE container that holds everything */}
      <div className='pt-16 max-w-lg mx-auto px-4'>

        {/* Balance Card */}
        <div className='bg-white rounded-2xl shadow-lg p-6 mt-4'>
          <div className='flex justify-between items-center mb-2'>
            <span className='text-gray-500 text-sm'>Available Balance</span>
            <span className='bg-red-100 text-red-500 text-xs font-semibold px-3 py-1 rounded-full'>
              Debit
            </span>
          </div>
          <p className='text-4xl font-bold text-gray-800'>
            ${balance.toLocaleString('en-US', { minimumFractionDigits: 2 })}
          </p>
        </div>

        <div className='mt-8'>
          <h2 className='text-lg font-bold text-gray-700 mb-4'>Latest Spendings</h2>

          {spendings.map((item) => (   // ✅ parentheses = auto return
            <div key={item.id} className='bg-white rounded-xl shadow-sm p-4 mb-3 flex items-center justify-between'>
              <div className='flex items-center gap-4'>
                <div className={`w-10 h-10 rounded-full flex items-center justify-center text-lg
                  ${item.type === 'debit' ? 'bg-red-100' : 'bg-green-100'}`}>
                  {item.type === 'debit' ? '↓' : '↑'} 
                </div>
                <span className='text-gray-700 font-medium'>{item.description}</span>
              </div>
              <span className={`font-bold ${item.type === 'debit' ? 'text-red-500' : 'text-green-500'}`}>
                {item.type === 'debit' ? '-' : '+'}${item.amount}
              </span>
            </div>
          ))}

        </div>
      </div>
    </div>
  )
}

export default Dashboard