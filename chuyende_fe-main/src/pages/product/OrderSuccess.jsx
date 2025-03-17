import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const OrderSuccess = () => {
    const location = useLocation();
    const orderData = location.state?.orderData;
    const [orderDetails, setOrderDetails] = useState([]);

    useEffect(() => {
        if (orderData?.order_id) {
            const token = localStorage.getItem("jwt"); // Lấy token từ localStorage
    
            fetch(`http://localhost:9999/api/order/${orderData.order_id}/order`, {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${token}`, // Truyền token vào header
                    "Content-Type": "application/json",
                },
            })
                .then(response => response.json())
                .then(data => {
                    setOrderDetails(data.data || []);
                })
                .catch(error => console.error("Lỗi khi gọi API:", error));
        }
    }, [orderData?.order_id]);
    console.log("",orderDetails)
    if (!orderData) {
        return <p className="text-center text-red-500 text-lg font-semibold">Không có dữ liệu đơn hàng.</p>;
    }

    return (
        <div className="w-full min-h-screen bg-white p-8">
            <h1 className="text-3xl font-bold text-center mb-8 text-green-600">Đơn hàng đã đặt thành công!</h1>

            <div className="max-w-4xl mx-auto bg-gray-100 p-6 rounded-lg shadow-lg">
                <table className="w-full mb-6">
                    <tbody>
                        <tr>
                            <td className="font-semibold">Người đặt:</td>
                            <td>{orderData.customer?.name || "Không có thông tin"}</td>
                            <td className="font-semibold">Mã đơn hàng:</td>
                            <td>{orderData.order_id || "Không có mã"}</td>
                        </tr>
                        <tr>
                            <td className="font-semibold">Người nhận:</td>
                            <td>{orderData.recipient_name || "Không có thông tin"}</td>
                            <td className="font-semibold">Ngày đặt:</td>
                            <td>{orderData.created_at || "Không có thông tin"}</td>
                        </tr>
                        <tr>
                            <td className="font-semibold">Số điện thoại:</td>
                            <td>{orderData.recipient_phone || "Không có thông tin"}</td>
                            <td className="font-semibold">Hình thức thanh toán:</td>
                            <td>Thanh toán khi nhận hàng</td>
                        </tr>
                        <tr>
                            <td className="font-semibold">Địa chỉ:</td>
                            <td colSpan="3">{orderData.address || "Không có địa chỉ"}</td>
                        </tr>
                        <tr>
                            <td className="font-semibold">Ghi chú:</td>
                            <td colSpan="3">{orderData.note || "Không có ghi chú"}</td>
                        </tr>
                    </tbody>
                </table>

                <hr className="my-4" />

                <h2 className="text-xl font-bold mb-4">Chi tiết đơn hàng</h2>
                <div className="mb-4">
                    {orderDetails.length > 0 ? (
                        orderDetails.map((detail, index) => (
                            <div key={index} className="flex justify-between items-center mb-2 bg-white p-2 rounded shadow">
                                <span className="font-medium text-gray-700">
                                    {detail.product?.product_name || "Sản phẩm không xác định"}
                                </span>
                                <span className="text-gray-600">x {detail.quantity}</span>
                            </div>
                        ))
                    ) : (
                        <p className="text-center text-red-500">Không có chi tiết đơn hàng.</p>
                    )}
                </div>

                <hr className="my-4" />

                <div className="text-right">
                    <p className="font-semibold">Tiền hàng: {orderData.total_price?.toLocaleString("vi-VN") || "0"} đ</p>
                    <p className="font-semibold">Phí vận chuyển: 0 đ</p>
                    <p className="font-bold text-xl text-green-600">
                        Tổng tiền: {orderData.total_price?.toLocaleString("vi-VN") || "0"} đ
                    </p>
                </div>
            </div>
        </div>
    );
};

export default OrderSuccess;
