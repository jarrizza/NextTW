import React from 'react'
import beachImg from '@/images/beach.jpg';
import Image from 'next/image';
const url = 'https://www.course-api.com/images/tours/tour-1.jpeg';

export default function TourPage({params} : {params: {id: string}}) {

  return (
    <div>
        <h1 className="text-4xl">ID: {params.id}</h1> 
        <section className="flex gap-x-4 mt-4">
            <div>
                <Image 
                src={beachImg} 
                alt="beach" 
                width={360} 
                height={200} 
                className='w-72 h-40 object-cover rounded'
                priority
                />
                <h2>local image</h2>
            </div>
            {/* remote image */}
            <div>
            <Image 
                src={url} 
                alt="france" 
                width={192} 
                height={192} 
                className='w-48 h-48 object-cover rounded'
                priority
                />
                <h2>remote image</h2>
            </div>
        </section>
    </div>
  )
}
