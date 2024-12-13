import Link from 'next/link';
import React from 'react'
import Image from 'next/image';

const url = 'https://www.course-api.com/react-tours-project';

type Tour = {
  id: string;
  name: string;
  info: string;
  image: string;
  price: string;
};

const fetchTours = async () => {
 //   await new Promise((resolve) => setTimeout(resolve, 3000));
    const response = await fetch(url);
    const tours: Tour[] = await response.json();
    return tours;
}

export default async function ToursPage() {
  const tours: Tour[] = await fetchTours();
  return (
    <section>
      <h1 className="text-3xl mb-4">Our Tours</h1>
      <div className="grid md:grid-cols-2 gap-8">
        {tours.map((tour: Tour) => {
            return (
                <Link 
                    key={tour.id} 
                    href={`/tours/${tour.id}`} 
                    className="hover:text-blue-500"
                >
                    <div className='relative h-48'>
                        <Image 
                            src={tour.image} 
                            alt={tour.name} 
                            fill
                            sizes='(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw'    
                            priority 
                            className='object-cover rounded'
                        />
                    </div>
                    <h2 className="text-xl">{tour.name}</h2>
                </Link>
                );  
            })}
        </div>
    </section>
  )
}

/*
    sizes='33vw'    
    <h2 className="text-xl">{tour.name}</h2>
    <p className="text-gray-500">$ {tour.price}</p>
    <p>{tour.info}</p>
*/