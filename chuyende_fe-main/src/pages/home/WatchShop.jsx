import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaUserCircle } from "react-icons/fa";
import { getProductsRequest } from "../../redux/actions/getProductAction";
import { Link, useNavigate } from "react-router-dom";
import { setOrderProduct } from "../../redux/actions/orderAction.js";

export default function WatchShop() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);

  const { data: products, loading, error } = useSelector((state) => state?.getProduct || {});

  useEffect(() => {
    dispatch(getProductsRequest());
  }, [dispatch]);

  const handleBuyNow = (event, product) => {
    event.stopPropagation(); // Ngăn sự kiện click lan truyền lên Link
    const jwt = localStorage.getItem("jwt"); // Lấy JWT từ localStorage
    if (jwt) {
      dispatch(setOrderProduct(product));
      navigate("/order");
    } else {
      navigate("/login");
    }
  };

  const user = JSON.parse(localStorage.getItem("user")); // Lấy thông tin người dùng
  const jwt = localStorage.getItem("jwt"); // Lấy token

  const handleLogout = () => {
    localStorage.removeItem("jwt");
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <div className="w-full min-h-screen bg-white">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-10 py-4 shadow-md relative">
        <h1 className="text-2xl font-bold">WATCHSHOP</h1>
        <div className="flex gap-6 text-lg font-semibold">
          <a href="/home" className="hover:text-orange-500">HOME</a>
          <a href="/home" className="hover:text-orange-500">PRODUCT</a>
          <a href="/order" className="hover:text-orange-500">ORDER</a>
          <a href="/product/add" className="hover:text-orange-500">ADD PRODUCT</a>
        </div>

        {/* User Icon */}
        <div className="relative">
          <FaUserCircle
            size={28}
            className="cursor-pointer"
            onClick={() => setShowMenu(!showMenu)}
          />

          {/* Dropdown Menu */}
          {showMenu && (
            <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg py-2">
              {jwt ? (
                <>
                  <p className="px-4 py-2 text-gray-700">Xin chào, {user?.name}</p>
                  <button
                    onClick={handleLogout}
                    className="block w-full text-left px-4 py-2 text-red-500 hover:bg-gray-100"
                  >
                    Đăng xuất
                  </button>
                </>
              ) : (
                <button
                  onClick={() => navigate("/login")}
                  className="block w-full text-left px-4 py-2 text-blue-500 hover:bg-gray-100"
                >
                  Đăng nhập
                </button>
              )}
            </div>
          )}
        </div>
      </nav>

      {/* Hiển thị trạng thái loading hoặc lỗi */}
      {loading && <p className="text-center text-gray-500 mt-4">Loading...</p>}
      {error && <p className="text-center text-red-500 mt-4">Error: {error}</p>}

      {/* Product Grid */}
      <div className="flex items-center justify-center mt-10 px-4">
        <div className="grid grid-cols-4 gap-6 w-[80%]">
          {products.map((product) => (
            <div key={product.product_id} className="p-4 border rounded-lg shadow-lg bg-white relative">
              <Link to={`/product/${product.product_id}`} className="block">
                {product.sale && (
                  <span className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 text-xs font-bold uppercase rounded">
                    SALE
                  </span>
                )}

                <img
                  src={product.image}
                  alt={product.product_name}
                  className="w-full h-40 object-contain p-2"
                />

                <h2 className="text-lg font-bold text-orange-500 mt-2 text-center">
                  {product.product_name}
                </h2>

                <div className="text-center mt-2">
                  {product.oldPrice && (
                    <p className="text-gray-500 line-through text-sm">
                      {product.oldPrice} đ
                    </p>
                  )}
                  <p className="text-black font-semibold text-lg">
                    {product.price.toLocaleString("vi-VN")} đ
                  </p>
                </div>
              </Link>

              {/* Nút Mua ngay */}
              <div className="flex justify-center mt-2">
                <button
                  className="bg-orange-500 text-white px-6 py-2 rounded-lg font-bold"
                  onClick={(event) => handleBuyNow(event, product)}
                >
                  Mua ngay
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
