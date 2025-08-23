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
            <li>Home</li>
            <li>Products</li>
            <li>Story</li>
            <li>Sustainability</li>
            <li>Contact</li>
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
