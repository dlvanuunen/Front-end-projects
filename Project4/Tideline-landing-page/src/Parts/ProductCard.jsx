function ProductCard({product}){
 

    return (
    <>
 <div className="card">
   <img src={product.img} alt="Product" />
<h4>{product.title}</h4>
<p>{`$${product.price}`}</p>
</div>
  </>
    )   
}

export default ProductCard;