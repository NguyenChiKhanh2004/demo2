import React from 'react';

const ProductComponent = React.memo(({ product }) => {
  const { image_url, name, price } = product;

  const handleBuyClick = () => {
    alert(`Bạn đã mua sản phẩm: ${name}`);
  };

  return (
    <div className="w-full h-full rounded-lg overflow-hidden shadow-lg bg-white p-4 flex flex-col transition-transform transform hover:scale-105 hover:shadow-xl">
      <img
        src={image_url}
        alt={name}
        className="w-full h-48 object-cover rounded-lg aspect-square"
      />
      <h2 className="text-lg font-semibold mt-4 line-clamp-2 flex-grow">
        {name}
      </h2>

      {/* Giá sản phẩm */}
      <p className="text-lg text-orange-500 font-bold mt-2">
        {parseFloat(price).toLocaleString('vi-VN')} VND
      </p>

      {/* Nút Mua */}
      <button
        onClick={handleBuyClick}
        className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg mt-4 hover:bg-blue-600 transition duration-300"
      >
        Mua
      </button>
    </div>
  );
});

export default ProductComponent;