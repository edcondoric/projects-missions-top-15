import {Link} from "react-router-dom";

export function ProductCard({products}){
  return (
    products.map(product => (
      <>
      <img key={product.id} src={product.image} alt={product.title} width="160" height="192"/>
      <Link to = {`/product/${product.id}`}><button type="button">Go to Detail</button></Link>
      <h3>{product.title} </h3>
      </>
    ))
  )

}
