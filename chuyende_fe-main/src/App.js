import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AuthForm from "./pages/auth/AuthForm.jsx";
import AddProduct from "./pages/product/AddProduct.jsx";
import WatchShop from "./pages/home/WatchShop.jsx";
import ProductDetail from "./pages/product/ProductDetail.jsx";
import OrderPage from "./pages/product/OrderPage.jsx";
import OrderSuccess from "./pages/product/OrderSuccess.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="" element={<AuthForm />} />
        <Route path="/product/add" element={<AddProduct />} />
        <Route path="/home" element={<WatchShop />} /><Route path="/product/:id" element={<ProductDetail />} /> {/* Route động */}
        <Route path="/order" element={<OrderPage />} /><Route path="/order-success" element={<OrderSuccess />} />
      </Routes>
    </Router>
  );
}

export default App;
