import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductDetailRequest } from "../../redux/actions/getProductDetailAction.js";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";  // Import thêm useNavigate
import { setOrderProduct } from "../../redux/actions/orderAction.js";

const ProductDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { product, loading, error } = useSelector((state) => state?.productDetail);
  const productDetail = useSelector((state) => state?.productDetail)

  useEffect(() => {
    if (id) {
      dispatch(getProductDetailRequest(id));
    }
  }, [id, dispatch]);

  const navigate = useNavigate();
  const handleBuyNow = (event, product) => {
    event.stopPropagation(); // Ngăn sự kiện click lan truyền lên Link
    const jwt = localStorage.getItem("jwt"); // Lấy JWT từ localStorage
    if (jwt) {
      dispatch(setOrderProduct(productDetail?.product));
      navigate("/order");
    } else {
      navigate("/login");
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
      <div className="min-h-screen w-full p-4 lg:p-8">
        <nav className="flex justify-between items-center border-b pb-2 mb-4 px-6">
          <h1 className="text-xl font-bold">WATCHSHOP</h1>
          <div className="flex space-x-6">
            <a href="/home" className="font-medium">HOME</a>
            <a href="/home" className="font-medium">PRODUCT</a>
            <a href="/order" className="font-medium">ORDER</a>
          </div>
          <div className="text-2xl">👤</div>
        </nav>

        {product && (
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 px-6">
              <div className="col-span-1 flex flex-col items-center">
                <img
                    src={product.image}
                    alt={product.product_name}
                    className="w-full max-w-md rounded-lg"
                />
                <div className="border p-4 mt-4 rounded-lg w-full max-w-md">
                  <h2 className="font-semibold">Chính sách sản phẩm:</h2>
                  <ul className="mt-2 space-y-2">
                    <li>✅ Hàng chính hãng</li>
                    <li> Bảo hành {product.warranty}</li>
                    <li> Giao hàng miễn phí</li>
                  </ul>
                </div>
              </div>

              <div className="col-span-1 flex flex-col items-center lg:items-start">
                <h2 className="text-3xl font-bold text-center lg:text-left">
                  {product.product_name}
                </h2>
                <div className="bg-red-600 text-white p-6 mt-2 rounded-lg w-full max-w-md">
                  <p className="text-lg font-semibold"> Mua ngay với giá</p>
                  <p className="text-4xl font-bold">
                    {product.price.toLocaleString()} đ
                  </p>
                  {/* Ô khuyến mãi - đặt dưới giá và trên nút mua ngay */}
                  <div className="bg-white text-black p-3 my-4 rounded-lg">
                    <p className="font-semibold">Chương trình khuyến mãi:</p>
                    <ul className="list-disc list-inside">
                      <li>Giảm ngay 10% cho đơn hàng đầu tiên</li>
                      <li>Tặng kèm hộp đựng đồng hồ cao cấp</li>
                    </ul>
                  </div>
                  <button
  className={`py-3 px-6 rounded-lg w-full text-lg font-semibold ${
    product.quantity > 0 ? "bg-orange-500 text-white" : "bg-gray-400 text-white cursor-not-allowed"
  }`}
  onClick={product.quantity > 0 ? handleBuyNow : null}
>
  {product.quantity > 0 ? "MUA NGAY" : "HẾT HÀNG"}
</button>
                </div>
              </div>

              <div className="col-span-1 w-full max-w-md">
                <h3 className="font-semibold text-xl border-b-2 pb-2">
                  THÔNG SỐ KỸ THUẬT
                </h3>
                <div className="border p-6 rounded-lg w-full max-w-md mt-6">
                  <div className="grid grid-cols-2 gap-x-6 gap-y-2 mt-4 text-lg">
                    <p className="text-gray-500">Mã sản phẩm:</p>
                    <p className="font-semibold">{product.product_id}</p>
                    <p className="text-gray-500">Màu sắc:</p>
                    <p className="font-semibold">{product.color}</p>
                    <p className="text-gray-500">Chất liệu dây:</p>
                    <p className="font-semibold">{product.band_material}</p>
                    <p className="text-gray-500">Loại mặt số:</p>
                    <p className="font-semibold">{product.dial_type}</p>
                    <p className="text-gray-500">Chức năng:</p>
                    <p className="font-semibold">{product.func}</p>
                    <p className="text-gray-500">Giới tính:</p>
                    <p className="font-semibold">{product.gender}</p>
                    <p className="text-gray-500">Model:</p>
                    <p className="font-semibold">{product.model}</p>
                    <p className="text-gray-500">Dòng sản phẩm:</p>
                    <p className="font-semibold">{product.series}</p>
                    <p className="text-gray-500">Độ chống nước:</p>
                    <p className="font-semibold">{product.water_resistance}</p>
                    <p className="text-gray-500">Đường kính mặt:</p>
                    <p className="font-semibold">{product.case_diameter}</p>
                    <p className="text-gray-500">Chất liệu vỏ:</p>
                    <p className="font-semibold">{product.case_material}</p>
                    <p className="text-gray-500">Loại máy:</p>
                    <p className="font-semibold">{product.machine_movement}</p>
                    <p className="text-gray-500">Độ rộng dây:</p>
                    <p className="font-semibold">{product.band_width}</p>
                    <p className="text-gray-500">Độ dày vỏ:</p>
                    <p className="font-semibold">{product.case_thickness}</p>
                    <p className="text-gray-500">Trạng thái:</p>
                    <p className="font-semibold">{product.status}</p>
                    <p className="text-gray-500">Bảo hành:</p>
                    <p className="font-semibold">{product.warranty}</p>
                  </div>
                </div>
              </div>
            </div>
        )}
      </div>
  );
};

export default ProductDetail;
