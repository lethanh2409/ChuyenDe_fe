import React from "react";
import { useLocation } from "react-router-dom";

const OrderSuccess = () => {
    const location = useLocation();
    const orderData = location.state?.orderData; // Lấy dữ liệu đơn hàng từ state

    if (!orderData) {
        return <p>Không có dữ liệu đơn hàng.</p>;
    }

    return (
        <div className="w-full min-h-screen bg-white p-8">
            <h1 className="text-3xl font-bold text-center mb-8">Đơn hàng đã đặt thành công!</h1>

            <div className="max-w-4xl mx-auto bg-gray-100 p-6 rounded-lg">
                <table className="w-full mb-6">
                    <tbody>
                    <tr>
                        <td className="font-semibold">Người đặt:</td>
                        <td>{orderData.customer?.name || "Không có thông tin"}</td>
                        <td className="font-semibold">Mã đơn hàng:</td>
                        <td>{orderData.order_id}</td>
                    </tr>
                    <tr>
                        <td className="font-semibold">Người nhận:</td>
                        <td>{orderData.recipient_name}</td>
                        <td className="font-semibold">Ngày đặt:</td>
                        <td>{orderData.created_at}</td>
                    </tr>
                    <tr>
                        <td className="font-semibold">Số điện thoại:</td>
                        <td>{orderData.recipient_phone}</td>
                        <td className="font-semibold">Hình thức thanh toán:</td>
                        <td>Thanh toán khi nhận hàng</td>
                    </tr>
                    <tr>
                        <td className="font-semibold">Địa chỉ:</td>
                        <td colSpan="3">{orderData.address}</td>
                    </tr>
                    <tr>
                        <td className="font-semibold">Ghi chú:</td>
                        <td colSpan="3">{orderData.note}</td>
                    </tr>
                    </tbody>
                </table>

                <hr className="my-4" />

                <h2 className="text-xl font-bold mb-4">Chi tiết đơn hàng</h2>
                <div className="mb-4">
                    {orderData.orderDetails.map((detail, index) => (
                        <div key={index} className="flex justify-between items-center mb-2">
                            <span>{detail.product?.name || "Sản phẩm không xác định"}</span>
                            <span>{detail.quantity}</span>
                        </div>
                    ))}
                </div>

                <hr className="my-4" />

                <div className="text-right">
                    <p className="font-semibold">Tiền hàng: {orderData.total_price.toLocaleString("vi-VN")} đ</p>
                    <p className="font-semibold">Phí vận chuyển: 0 đ</p>
                    <p className="font-bold text-xl">Tổng tiền: {orderData.total_price.toLocaleString("vi-VN")} đ</p>
                </div>
            </div>
        </div>
    );
};

export default OrderSuccess;