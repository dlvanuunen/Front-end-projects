import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import NavBar from "./Components/NavBar";
import HeroSection from "./Components/HeroSection";
import ProductSection from "./Components/ProductSection";


function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <NavBar/>

      <HeroSection />
      <ProductSection />
      {/* <StorySection />
      <ImpactSection />
      <CtaSection />
      <FooterSection /> */}
    </>
  );
}

export default App;
