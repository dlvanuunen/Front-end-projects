import Logo from "../Parts/logo";

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
              <a href="#">shop </a>
            </li>
            <li>
              <a href="#">shop </a>
            </li>
            <li>
              <a href="#">shop </a>
            </li>
          </ul>
        </nav>


<div className="socials">

    <p>inst</p>
<p>inst</p><p>inst</p>
</div>


<p className="copyright">

    C copywrifth blabla
</p>
</div>


      </section>
    </>
  );
}

export default FooterSection;
