export default function ProductCard({ product }) {
  return (
    <div className="bg-white shadow-md rounded-xl overflow-hidden hover:scale-105 transition">
      <img src={product.image} alt={product.name} className="w-full h-56 object-cover" />
      <div className="p-4">
        <h2 className="text-lg font-semibold">{product.name}</h2>
        <p className="text-gray-600">Rp {product.price}</p>
        <button className="mt-2 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
          Tambah ke Keranjang
        </button>
      </div>
    </div>
  );
}
