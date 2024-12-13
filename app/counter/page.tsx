import React from 'react'
import Counter from '@/components/Counter';

export default function CounterPage() {
    return (
        <div className="flex flex-col items-center w-full gap-4">
            <h1 className="text-7xl">Counter Static Data</h1>
            <Counter />
        </div>
    )
}
