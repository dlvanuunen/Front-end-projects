import CtaButton from "../Parts/CtaButton";

function CtaSections() {
  return (
    <>
      <section className="luxury">
        <div className="luxury-container">
          {/* 
          <img src="" className="fade"></img>
       */}

          <h2>Luxury with purpose</h2>
  
        </div>
      </section>

      <section className="cta-section">
        <h2> Bring the ocean's beauty to your table</h2>
                <CtaButton text="Shop Now"  type="blue"/>
      </section>

     
    </>
  );
}

export default CtaSections;
