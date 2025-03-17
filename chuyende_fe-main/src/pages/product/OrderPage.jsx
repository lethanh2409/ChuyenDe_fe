import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const OrderPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const orderProduct = useSelector((state) => state.order.orderProduct);
  const [quantity, setQuantity] = useState(1);
  const [recipientName, setRecipientName] = useState("");
  const [recipientPhone, setRecipientPhone] = useState("");
  const [address, setAddress] = useState("");
  const [note, setNote] = useState("");

  const customerId = 1; // Thay bằng giá trị thực tế

  const handleQuantityChange = (type) => {
    if (type === "increase") {
      setQuantity(quantity + 1);
    } else if (type === "decrease" && quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleCreateOrder = async () => {
    if (!orderProduct) {
      alert("Vui lòng chọn sản phẩm trước khi đặt hàng.");
      return;
    }

    const orderData = {
      customer_id: customerId,
      recipient_name: recipientName,
      recipient_phone: recipientPhone,
      total_quantity: quantity,
      total_price: orderProduct.price * quantity,
      address: address,
      note: note,
      orderDetails: [
        {
          quantity: quantity,
          price: orderProduct.price,
          product_id: orderProduct.product_id,
        },
      ],
    };
    try {
      const response = await axios.post("http://localhost:9999/api/order/create", orderData);
      console.log(response.data);
      if (response.data.isCheck) {
        navigate("/order-success", { state: { orderData: response.data.data } });
      } else {
        console.error("Lỗi từ API:", response.data); // Log lỗi từ API
        alert("Có lỗi xảy ra khi tạo đơn hàng. Vui lòng thử lại.");
      }
    } catch (error) {
      console.error("Lỗi khi gọi API:", error); // Log lỗi chi tiết
      alert("Có lỗi xảy ra khi tạo đơn hàng. Vui lòng thử lại.");
    }
  };

  if (!orderProduct) {
    return <p>Không có sản phẩm nào được chọn!</p>;
  }

  return (
      <div className="w-full min-h-screen bg-white">
        <nav className="flex justify-between items-center px-10 py-4 border-b">
          <h1 className="text-xl font-bold">WATCHSHOP</h1>
          <div className="flex gap-6 font-semibold">
            <a href="/home" className="hover:underline">HOME</a>
            <a href="/home" className="hover:underline">PRODUCT</a>
            <a href="/home" className="hover:underline">ORDER</a>
          </div>
          <div className="text-2xl cursor-pointer">🔘</div>
        </nav>

        <div className="max-w-7xl mx-auto mt-6">
          <h2 className="text-3xl font-bold text-center">ĐƠN ĐẶT HÀNG</h2>

          <div className="flex mt-8 gap-8">
            {/* Hiển thị sản phẩm + Thanh toán */}
            <div className="w-3/5 flex flex-col gap-8">
              <div className="border p-6" style={{ height: '50%' }}>
                <div className="flex items-center gap-6">
                  <img
                      src={orderProduct.image}
                      alt={orderProduct.product_name}
                      className="w-40 h-40 object-cover"
                  />
                  <div>
                    <p className="font-semibold text-lg">{orderProduct.product_name}</p>
                    <p className="text-red-500 text-xl font-bold">
                      {orderProduct.price.toLocaleString("vi-VN")} đ
                    </p>
                    {orderProduct.oldPrice && (
                        <p className="text-gray-400 line-through text-lg">
                          {orderProduct.oldPrice.toLocaleString("vi-VN")} đ
                        </p>
                    )}
                  </div>

                  {/* Chỉnh số lượng */}
                  <div className="ml-auto flex items-center border rounded-md">
                    <button
                        className="px-4 py-2 border-r"
                        onClick={() => handleQuantityChange("decrease")}
                    >
                      -
                    </button>
                    <span className="px-6 text-lg">{quantity}</span>
                    <button
                        className="px-4 py-2 border-l"
                        onClick={() => handleQuantityChange("increase")}
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>

              {/* Tóm tắt đơn hàng */}
              <div className="border p-6" style={{ height: '50%' }}>
                <h3 className="text-2xl font-bold">Đơn đặt hàng của bạn</h3>
                <div className="mt-4 text-lg">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Tổng tiền hàng:</span>
                    <span className="font-semibold">
                    {(orderProduct.price * quantity).toLocaleString("vi-VN")} đ
                  </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Phí vận chuyển:</span>
                    <span className="font-semibold">0 đ</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Mã giảm giá:</span>
                    <span className="font-semibold">0 đ</span>
                  </div>
                  <div className="flex justify-between border-t mt-3 pt-3 text-xl font-bold">
                    <span>Tổng thanh toán:</span>
                    <span>{(orderProduct.price * quantity).toLocaleString("vi-VN")} đ</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Thông tin nhận hàng */}
            <div className="w-2/5 border p-8" style={{ minHeight: '52vh' }}>
              <h3 className="text-2xl font-bold">Thông tin nhận hàng</h3>
              <input
                  type="text"
                  placeholder="Họ tên người nhận"
                  className="w-full border p-4 mt-4 text-lg"
                  value={recipientName}
                  onChange={(e) => setRecipientName(e.target.value)}
              />
              <input
                  type="text"
                  placeholder="Số điện thoại"
                  className="w-full border p-4 mt-4 text-lg"
                  value={recipientPhone}
                  onChange={(e) => setRecipientPhone(e.target.value)}
              />
              <textarea
                  placeholder="Địa chỉ giao hàng"
                  className="w-full border p-4 mt-4 h-28 resize-none text-lg"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
              ></textarea>
              <textarea
                  placeholder="Ghi chú"
                  className="w-full border p-4 mt-4 h-28 resize-none text-lg"
                  value={note}
                  onChange={(e) => setNote(e.target.value)}
              ></textarea>
            </div>
          </div>

          {/* Nút đặt hàng */}
          <div className="mt-6 text-left">
            <button
                className="bg-orange-500 text-white px-8 py-4 font-bold rounded-lg text-xl"
                onClick={handleCreateOrder}
            >
              Đặt hàng
            </button>
          </div>
        </div>
      </div>
  );
};

export default OrderPage;