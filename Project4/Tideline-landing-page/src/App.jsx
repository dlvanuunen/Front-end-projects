import { useState } from "react";

import NavBar from "./Components/NavBar";
import HeroSection from "./Components/HeroSection";
import ProductSection from "./Components/ProductSection";
import StorySection from "./Components/StorySection";
import ImpactSection from "./Components/ImpactSection";
import CtaSections from "./Components/CtaSections";
import FooterSection from "./Components/FooterSection";

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
        <CtaSections />
         
      </main>
      <footer>
          <FooterSection /> 
    </footer>
    </>
  );
}

export default App;
