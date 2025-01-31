import React, { useState } from 'react'

const Counter = () => {
    const [counter, setCounter] = useState(0)
    const increment = () => {
        setCounter(counter + 1)
    }
    const decrement = () => {
        setCounter(counter - 1)
    }
    return (
        <div className='counter'>
            <div className='counter-e1'>
                {counter}
            </div>
            <div className='counter-e2'>
                <button className='btn' onClick={increment}>increment</button>
                <button className='btn' onClick={decrement}>decrement</button>
            </div>
        </div>
    )
}

export default Counter