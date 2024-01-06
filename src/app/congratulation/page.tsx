import Image from 'next/image';
async function fetchOrderData() {
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
export default async function CongratulationsPage() {
    
  const product = await fetchOrderData();

  return (
    <div className="container mx-auto px-4 py-8 flex flex-col items-center bg-white rounded-lg shadow-md">
      <div className="mb-8 flex flex-col items-center">
        <Image
          src="/checked.svg"
          alt="Success icon"
          width={72}
          height={72}
          className="text-green-500"
        />
        <h2 className="text-2xl font-bold text-center mt-4 text-gray-900">
          Thank you for your order!
        </h2>
      </div>
      <div className="text-center text-gray-700">
        <p>Your order has been successfully placed and is on its way!</p>
        <p className="mt-4">Order details:</p>
        <ul className="mt-2">
          <li><strong>Product:</strong> {product.name}</li>
          <li><strong>Price:</strong> ${product.price}</li>
          <li><strong>Delivery Address:</strong> (Display delivery address based on your data)</li>
          <li><strong>Expected Delivery:</strong> (Show estimated delivery date if available)</li>
        </ul>
      </div>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-full mt-8 w-48"
      >
        Track Order
      </button>
    </div>
  );
}