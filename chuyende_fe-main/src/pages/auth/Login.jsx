import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginRequest } from "../../redux/actions/loginAction";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const Login = ({ onSwitch }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading } = useSelector((state) => state.auth);
  const isAuthenticated = useSelector((state) => state.auth.user);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState(""); // Thêm state để lưu message từ API

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(""); // Reset message khi submit
    dispatch(loginRequest({ username, password }));
  };

  useEffect(() => {
    if (isAuthenticated !== null) {
      if (isAuthenticated.status) {
        navigate("/home");
      } else {
        setMessage(isAuthenticated.message || "Đăng nhập thất bại!"); // Lấy message từ API
      }
    }
  }, [isAuthenticated, navigate]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 shadow-lg rounded-xl w-96">
        <h2 className="text-2xl font-bold text-center text-gray-800">Đăng nhập</h2>
        <form onSubmit={handleSubmit} className="mt-6">
          <div>
            <label className="block text-gray-700">Username</label>
            <input
              type="text"
              className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Nhập username..."
              name="user_login"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              
            />
          </div>

          <div className="mt-4">
            <label className="block text-gray-700">Mật khẩu</label>
            <input
              type="password"
              className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Nhập mật khẩu..."
              name="user_password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              
            />
          </div>

          {/* Hiển thị message từ API */}
          {message && <p className="text-red-500 text-sm mt-2">{message}</p>}

          <button
            type="submit"
            className="w-full mt-6 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
            disabled={loading}
            name="submit"
          >
            {loading ? "Đang đăng nhập..." : "Đăng nhập"}
          </button>
        </form>

        <p className="mt-4 text-center text-gray-600">
          Chưa có tài khoản?{" "}
          <button onClick={onSwitch} className="text-blue-500">
            Đăng ký
          </button>
        </p>
      </div>
    </div>
  );
};

export default Login;
