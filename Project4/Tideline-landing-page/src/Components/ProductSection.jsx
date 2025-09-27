import ProductCard from "../Parts/ProductCard";

const products = [
 { title: "Glass set", price: 800, img: "/images/set-beach.png" },
  {title: "Glass set", price: 800, img: "/images/set-home.png" },
{ title: "Glass set", price: 800, img: "/images/seaweed-glasses.jpg" } ,
 { title: "Glass set", price: 800, img:"/images/crystal-glasses.jpg" } ,
];

function ProductSection() {
  return (
    <>
      <section className="product">
        <div className="product-container">
          <h2>Every piece is Unique</h2>

          <div className="cards-container">
            {products.map((product, index) => {
              return <ProductCard key={index} product={product} />;
            })}
          </div>
        </div>
      </section>
    </>
  );
}

export default ProductSection;
