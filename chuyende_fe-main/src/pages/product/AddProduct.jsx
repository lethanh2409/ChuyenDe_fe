import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProductRequest } from "../../redux/actions/addProductAction";

const AddProduct = () => {
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.addProduct);

  const [product, setProduct] = useState({
    product_name: "",
    quantity: 0,
    color: "",
    band_material: "",
    dial_type: "",
    func: "",
    gender: "",
    model: "",
    series: "",
    water_resistance: "",
    case_diameter: "",
    case_material: "",
    detail: "",
    image: "",
    machine_movement: "",
    band_width: "",
    case_thickness: "",
    status: "",
    warranty: "",
    staff_id: "",
  });

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addProductRequest(product));
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg border border-gray-300"
    >
      <h2 className="text-2xl font-bold mb-4 text-center text-gray-700">
        Thêm sản phẩm
      </h2>

      <div className="grid grid-cols-2 gap-6">
        {/* Cột 1 */}
        <div className="flex flex-col gap-4">
          <input
            type="text"
            name="product_name"
            value={product.product_name}
            onChange={handleChange}
            placeholder="Tên sản phẩm"
            className="border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="number"
            name="quantity"
            value={product.quantity}
            onChange={handleChange}
            placeholder="Số lượng"
            className="border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="text"
            name="color"
            value={product.color}
            onChange={handleChange}
            placeholder="Màu sắc"
            className="border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            name="band_material"
            value={product.band_material}
            onChange={handleChange}
            placeholder="Chất liệu dây"
            className="border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            name="dial_type"
            value={product.dial_type}
            onChange={handleChange}
            placeholder="Loại mặt số"
            className="border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            name="func"
            value={product.func}
            onChange={handleChange}
            placeholder="Chức năng"
            className="border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            name="gender"
            value={product.gender}
            onChange={handleChange}
            placeholder="Giới tính"
            className="border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            name="model"
            value={product.model}
            onChange={handleChange}
            placeholder="Model"
            className="border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            name="series"
            value={product.series}
            onChange={handleChange}
            placeholder="Series"
            className="border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            name="water_resistance"
            value={product.water_resistance}
            onChange={handleChange}
            placeholder="Chống nước"
            className="border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Cột 2 */}
        <div className="flex flex-col gap-4">
          <input
            type="text"
            name="case_diameter"
            value={product.case_diameter}
            onChange={handleChange}
            placeholder="Đường kính vỏ"
            className="border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            name="case_material"
            value={product.case_material}
            onChange={handleChange}
            placeholder="Chất liệu vỏ"
            className="border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            name="image"
            value={product.image}
            onChange={handleChange}
            placeholder="Link ảnh"
            className="border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            name="machine_movement"
            value={product.machine_movement}
            onChange={handleChange}
            placeholder="Loại máy"
            className="border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            name="band_width"
            value={product.band_width}
            onChange={handleChange}
            placeholder="Độ rộng dây"
            className="border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            name="case_thickness"
            value={product.case_thickness}
            onChange={handleChange}
            placeholder="Độ dày vỏ"
            className="border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            name="status"
            value={product.status}
            onChange={handleChange}
            placeholder="Trạng thái"
            className="border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            name="warranty"
            value={product.warranty}
            onChange={handleChange}
            placeholder="Bảo hành"
            className="border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="number"
            name="staff_id"
            value={product.staff_id}
            onChange={handleChange}
            placeholder="ID nhân viên"
            className="border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      {/* Mô tả */}
      <textarea
        name="detail"
        value={product.detail}
        onChange={handleChange}
        placeholder="Mô tả chi tiết"
        className="input-field mt-4 h-24"
      ></textarea>

      {/* Nút Submit */}
      <button
        type="submit"
        disabled={loading}
        className="w-full bg-blue-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-700 transition mt-4 disabled:bg-gray-400"
      >
        {loading ? "Đang thêm..." : "Thêm sản phẩm"}
      </button>

      {/* Hiển thị lỗi */}
      {error && <p className="text-red-500 mt-2">{error}</p>}
    </form>
  );
};

export default AddProduct;
