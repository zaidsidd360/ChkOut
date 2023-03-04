import { useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./routes/Home";

function App(): JSX.Element {
  return (
    <>
      <Header />
      <div className="mainbody">
        <Home /> {/*Change dynamically with react-router-dom*/}
      </div>
      <Footer />
    </>
  );
}

export default App;
