import Image from 'next/image'

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

export default async function Home() {
  const product = await fetchProductData();

  return (
    <div className="container mx-auto px-4 py-8 flex flex-col items-center bg-white rounded-lg shadow-md">
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
  >
    Buy Now
  </button>
</div>
  )
}
