import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/footer/Footer";
import Sidebar from "./components/sidebar/sidebar";
import Shop from "./shop/Shop";
import Hoodie from "./shop/Hoodie";
import Shoes from "./shop/Shoes";
import Cart from "./pages/cart/cart";
import Else from "./pages/Else";
import ProductPage from "./pages/ProductPage";
import SignUp from "./pages/SignUp";
import LogIn from "./pages/LogIn";
import About from "./pages/About";

import { AuthProvider } from "./utils/AuthContext";
import { ShopContextProvider } from "./utils/shop-context";
import PrivateRoutes from "./utils/PrivateRoutes";

function App() {
  
  return (
    <div className="App">
      <ShopContextProvider>
        <AuthProvider>
          <Router>
            <Header />
            <div className="shop">
              <Sidebar />
              <Routes>
                <Route path="/" element={<Shop />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/home" element={<Shop />} />
                <Route path="/hoodie" element={<Hoodie />} />
                <Route path="/shoes" element={<Shoes />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/login" element={<LogIn />} />
                <Route path="/product/:productId" element={<ProductPage />} />
                <Route path="/about" element={<About />} />
                <Route path="/else" element={<Else />} />
                <Route element={<PrivateRoutes />}>{/* Private */}</Route>
              </Routes>
            </div>
            <Footer />
          </Router>
        </AuthProvider>
      </ShopContextProvider>
    </div>
  );
}

export default App;
