import Image from 'next/image';

export default function PaymentPage() {
  const product = {
    name: 'Cooking Oil',
    image: '/oil.png',
    price: 12.99,
  };

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Easy Peasy Payment</h2>
        <div className="flex mb-4">
          <Image src={product.image} alt={product.name} width={80} height={80} className="rounded-full mr-4" />
          <div className="flex flex-col">
            <p className="font-bold">{product.name}</p>
            <p className="text-gray-600">${product.price}</p>

          
</div>

        
</div>

        
<div
 
className="flex justify-center">

          
<button
 
className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-full">
            Credit/Debit Card
          </button>
          <button className="bg-gray-200 hover:bg-gray-400 text-gray-700 font-bold py-2 px-6 rounded-full ml-4">
            Mobile Pay
          </button>
        </div>
        <p className="text-center mt-4">Secure Payment</p>
        <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-4 px-8 rounded-full mt-6">
          Pay Now
        </button>
      </div>
    </div>
  );
}