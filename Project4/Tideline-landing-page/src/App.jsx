import { useState } from "react";
import "./App.css";
import NavBar from "./Components/NavBar";
import HeroSection from "./Components/HeroSection";
import ProductSection from "./Components/ProductSection";
import StorySection from "./Components/StorySection";
import ImpactSection from "./Components/ImpactSection";
import CtaSection from "./Components/CtaSection";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <header>
        <NavBar />
        <HeroSection />
      </header>

      <main>
        <ProductSection />
        <StorySection />
        <ImpactSection />
        <CtaSection />
      </main>

      {/*     
      <FooterSection />  */}
    </>
  );
}

export default App;
