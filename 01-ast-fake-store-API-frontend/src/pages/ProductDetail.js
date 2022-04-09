import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios'

export function ProductCardDetail({product}) {
  return (
  <>
    <h1>{product.title}</h1>
    <p>id: {product.id} | {product.category}</p>
    <img key={product.id} src={product.image} alt={product.title} width="160" height="192"/>
    <p>{product.description}</p>

  </>
)
}

export function ProductDetail() {
  const { productId } = useParams();
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect (()=>{
    setLoading(true);
    axios ({
      method: 'GET',
      baseURL:'https://fakestoreapi.com/',
      url: `/products/${productId}`,
    })
    .then (({data})=>setProduct(data))
    .finally(()=>setLoading(false))
    .catch(() => setError(true))
  }, []);

  if(loading) return <p>Loading...</p>
  if(error) return <p>error</p>

  return (
    <div className='App'>
      <ProductCardDetail product={product} />
    </div>
  )
}
