import "./App.css";
import Main from "./components/Main";
import Header from "./components/Header";
import About from "./components/About";
import SingleProduct from "./components/SingleProduct";
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";

const RouteWrapper = (props) => {
  const params = useParams();
  return <SingleProduct params={params} {...props} />;
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/products/:name" element={<RouteWrapper />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
        {/* <SingleProduct params={"1"} /> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
