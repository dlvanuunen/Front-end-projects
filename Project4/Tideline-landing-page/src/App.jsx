import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import NavBar from "./Components/NavBar";
import HeroSection from "./Components/HeroSection";
import ProductSection from "./Components/ProductSection";
import StorySection from "./Components/StorySection";


function App() {
  const [count, setCount] = useState(0);

  return (
    <>
     <header>
       <NavBar/>

   <HeroSection />
      </header>

<main>
      <ProductSection />
   <StorySection />

      </main>

      {/* <ImpactSection />
      <CtaSection />
    
      <FooterSection /> */}
    </>
  );
}

export default App;
