import { ShopContextProvider } from "./context/shop-context";
import Header from "./components/Header";
import Shop from "./shop/Shop";
import Cart from "./cart/cart";
import Home from "./components/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Hoodie from "./shop/Hoodie";
import Shoes from "./shop/Shoes";
import SignUp from "./pages/SignUp";
import LogIn from "./pages/LogIn";
import Else from "./pages/Else";
import PrivateRoutes from "./utils/PrivateRoutes";
import { AuthProvider } from "./utils/AuthContext";

function App() {
  return (
    <div className="App">
      <ShopContextProvider>
        <AuthProvider>
          <Router>
            <Header />
            <Routes>
              <Route path="/" element={<Shop />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/home" element={<Shop />} />
              <Route path="/hoodie" element={<Hoodie />} />
              <Route path="/shoes" element={<Shoes />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/login" element={<LogIn />} />

              <Route element={<PrivateRoutes />}>
                <Route path="/else" element={<Else />} />
              </Route>
            </Routes>
            <Footer />
          </Router>
        </AuthProvider>
      </ShopContextProvider>
    </div>
  );
}

export default App;
