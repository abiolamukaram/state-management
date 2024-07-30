import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement,reset } from './redux/slice/counterSlice'

const App = () => {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()
  return (
    <div className='h-screen flex justify-center items-center gap-5 '>
      <div className=' flex gap-5'>
      <button onClick={() => dispatch(increment()) } className='bg-green-500 rounded-xl px-2 py-1'>increment</button>
      <button onClick={() => dispatch(decrement())}className='bg-red-500 rounded-xl px-2 py-1'>decrement</button>
      <button onClick={() => dispatch(reset())} className='bg-gray-500 rounded-lg px-2 py-1'>reset</button>
      </div>
      <div>
        <h1>Counter: {count}</h1>
      </div>
    </div>
  )
}

export default App
