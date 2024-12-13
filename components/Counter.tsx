'use client';

import React from 'react'
import { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);  
  return (
    <>
        <p className="text-5xl font-bold">{count}</p>
        <button onClick={() => setCount(count + 1)}
                className="bg-blue-500 text-white px-4 py-2 mt-4 rounded">
                    Increment
        </button>
        <button onClick={() => setCount(count - 1)}
                className="bg-blue-500 text-white px-4 py-2 rounded">
                    Decrement
        </button>
    </>
  )
}
