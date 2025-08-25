import CtaButton from "../Parts/CtaButton";

function NavBar() {
  return (
    <>

      <nav>
        <div className="nav-container">
          <a href="/">
            <img src="logo.svg" alt="Logo " />
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
