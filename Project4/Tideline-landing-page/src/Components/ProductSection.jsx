import ProductCard from '../Parts/ProductCard'


function ProductSection(){


    return<>
    
    <section className="product">
<div className="product-container">


<h2>Every piece is Unique</h2>

<div className="card-container">
<ProductCard/>
<ProductCard/>
<ProductCard/>
<ProductCard/>
</div>



</div>

    </section>
    </>
}


export default ProductSection;