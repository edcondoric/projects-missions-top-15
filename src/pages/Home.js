import {ProductCard} from '../components/ProductCard'
import { useEffect, useState } from 'react';
import axios from 'axios';

export function Home() {
const [loading, setLoading] = useState(true);
const [error, setError] = useState(false);
const [products, setProducts] = useState([]);
useEffect(()=>{
  axios ({
    method: 'GET',
    baseURL:'https://fakestoreapi.com/',
    url: '/products',
    params:{ limit: 9 },
  })
  .then (({data})=>setProducts(data))
  .catch((error)=>setError(true))
  .finally(()=>{setLoading(false);})
},[])
if(loading) return <p><strong>Cargando...</strong></p>
if(error) return <p><strong>Algo salió mal... Inténtalo más tarde</strong></p>
return (
  <div>
    <ProductCard products={products} />
  </div>
);

}
