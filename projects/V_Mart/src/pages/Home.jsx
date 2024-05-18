import React from 'react'
import { Products } from '../data';
import Cart from '../components/Cart';

function Home() {
    return (
      <>
            <div className="flex flex-wrap justify-center w-[100%] p-10">
            {Products.map((prev) => (
                <Cart key={prev.id} title={prev.title} Img={ prev.imageUrl} />
            ))}
            </div>
      </>
    );
}

export default Home