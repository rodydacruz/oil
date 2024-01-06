"use client"
import Image from 'next/image'
import { useState } from 'react';

async function fetchProductData() {
  try {
    // const response = await fetch('http://localhost:4000/product');
    // const productData = await response.json();
    // return productData;
    return ({image:'',name:'Oil',description:'Pa Kusia',price:200})
  } catch (error) {
    console.error('Error fetching product data:', error);
    throw new Error('Failed to fetch product data');
  }
}

export default function Home() {
  const product = {
    image: '',
    name: 'Oil',
    description: 'Pa Kusia',
    price: 200,
  };
  const [showOrderForm, setShowOrderForm] = useState(false);

  const handleBuyNowClick = () => {
    document.querySelector('main')?.classList.add('-translate-x-full');
    setShowOrderForm(true);
  };


  return (
    <main className="container mt-8 mx-auto px-4 py-8 flex flex-col items-center bg-white rounded-lg shadow-md transition-all duration-300 ease-in-out">
  <Image
    src={"/oil.png" || product.image}
    alt={product.name}
    width={400}
    height={400}
    className="rounded-t-lg"
  />
  <h2 className="text-3xl font-bold text-center mt-6 text-gray-900">
    {product.name}
  </h2>
  <p className="mt-4 text-lg text-center text-gray-700">{product.description}</p>
  <div className="flex justify-center mt-6">
    <p className="text-4xl font-bold text-green-500 mr-4">${product.price}</p>
  </div>
  <button
    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-full mt-8 w-48"
    onClick={handleBuyNowClick}
  >
    Buy Now
  </button>

        <div className="order-form container absolute inset-y-0 mx-auto px-4 py-8 flex  flex-col items-center transform translate-x-full transition-all duration-300 ease-in-out">
          {/* Simple order form content */}
         
          <div className="bg-white rounded-lg shadow-md p-8 text-black min-w-[60%]">
          <button onClick={() => {
            setShowOrderForm(false);
            document.querySelector('main')?.classList.remove('-translate-x-full');
          }}>
            {"<--"}
          </button>
            <h2 className="text-2xl font-bold mb-6 text-center">Place Your Order</h2>
            <form>
              {/* Form fields for buyer information */}
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
                  Name:
                </label>
                <input
                  type="text"
                  id="name"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              {/* Add more fields as needed */}
              <button
              
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-full mt-8 w-48"
              >
                Submit Order
              </button>
            </form>
          </div>
        </div>
</main>
  )
}


