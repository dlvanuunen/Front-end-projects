import Logo from "../Parts/logo";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { SlSocialTwitter } from "react-icons/sl";
import { LuFacebook } from "react-icons/lu";

function FooterSection() {
  return (
    <>
      <section className="footer">
        <div className="footer-container">
        <div className="brand-container">
          <Logo />
          <h2 className="brand-name">Tideline</h2>
        </div>

        <nav className="nav-footer">
          <ul>
            <li>
              <a href="#">shop </a>
            </li>
            <li>
              <a href="#">Story</a>
            </li>
            <li>
              <a href="#">Sustainability </a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </nav>


<div className="socials">
<div className="circle"><FaInstagram className="icon"/></div>


<div className="circle"><LuFacebook className="icon"/></div>
<div className="circle"><SlSocialTwitter className="icon" /></div>
 


</div>


<p className="copyright">
    © 2025 TIDELINE. All rights reserved.
</p>
</div>


      </section>
    </>
  );
}

export default FooterSection;
