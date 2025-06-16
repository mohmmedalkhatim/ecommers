import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Product, useProduct } from '../../../context/Product';
import Product_info from './information';
import Carousel from '../../../components/carousel';

function ProductPage () {
  let { id } = useParams();
  let one = useProduct(state => state.product);
  let [product, setProduct] = useState({} as Product);
  useEffect(() => {
    if (id) one(id, setProduct);
  }, []);
  console.log(product.pictures);
  if (product) {
    return (
      <main >
        <Product_info {...product}/>
        <Carousel product={product} list={product.pictures}/>
      </main>
    );
  }
}
export default ProductPage;
