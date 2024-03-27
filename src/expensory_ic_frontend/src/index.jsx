import * as React from "react";
import { render } from "react-dom";
import App from "./App";
import "./index.css";
import RegisterLoginUser from "./RegisterLoginUser";
import Home from "./Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import logo from "./home/Assets/logo.png";

const Index = () => {
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  return (
    <>
      {isLoading ? (
        <>
        <img src={logo} alt="Logo" className="logo load-logo" />
        <div class="loader"></div>
        </>
      ) : (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/registerLoginUser" element={<RegisterLoginUser />}></Route>
            <Route path="/app" element={<App />}></Route>
          </Routes>
        </BrowserRouter>
      )}
    </>
  );
};

render(<Index />, document.getElementById("app"));