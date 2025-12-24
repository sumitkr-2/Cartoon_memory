import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/FrontPage/Home.jsx";
import Body from "./Components/FrontPage/Body.jsx";
import Footer from "./Components/FrontPage/Footer.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/feed"
          element={
            <>
              <Body />
              <Footer />
            </>
          }
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
