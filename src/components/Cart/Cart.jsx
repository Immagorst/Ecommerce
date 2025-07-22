import React from "react";

const Cart = ({ cartItems, onRemove, onCheckout }) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-accent/10 dark:bg-gray-900">
      <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md w-full max-w-lg">
        <h2 className="text-2xl font-bold mb-6 text-center text-accent">Giỏ hàng GeminiShop</h2>
        {cartItems.length === 0 ? (
          <p className="text-center text-gray-500">Giỏ hàng của bạn đang trống.</p>
        ) : (
          <ul className="mb-6">
            {cartItems.map((item, idx) => (
              <li key={idx} className="flex justify-between items-center mb-4 border-b pb-2">
                <div>
                  <span className="font-semibold">{item.name}</span>
                  <span className="ml-2 text-sm text-gray-400">x{item.quantity}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-primary font-bold">{item.price}₫</span>
                  <button
                    className="text-red-500 hover:text-red-700"
                    onClick={() => onRemove(item)}
                  >
                    Xóa
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
        <button
          className="w-full bg-accent text-white py-2 rounded-md font-semibold hover:bg-primary duration-200"
          onClick={onCheckout}
          disabled={cartItems.length === 0}
        >
          Thanh toán
        </button>
      </div>
    </div>
  );
};

export default Cart;
