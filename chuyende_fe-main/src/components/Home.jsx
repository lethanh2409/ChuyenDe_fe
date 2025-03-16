import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <main className="container mx-auto p-4">
        <h2 className="text-3xl font-bold text-center my-6">Welcome to My Website</h2>
        <p className="text-gray-700 text-center">Đây là trang chủ của ứng dụng React.</p>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
