import CtaButton from "../Parts/CtaButton";
import Logo from "../Parts/logo";
import { useEffect, useState } from "react";

function NavBar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 25) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const classes =`nav-bar ${scrolled ? "scrolled" : ""}`


  return (
    <>

      <nav className={classes}>
        <div className="nav-container">

            
          <a href="/"  className="brand-container">
            <Logo type="nav"/>
            <span>Tideline</span>
          </a>
           

         
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Products</a></li>
            <li><a href="#">Story</a></li>
            <li><a href="#">Sustainability</a></li>
            <li><a href="#">Contact</a></li>
            <li>
              <CtaButton text="shop now" />
            </li>
          </ul>
        </div>
      </nav>
     
    </>
  );
}

export default NavBar;
