import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Product, useProduct } from '../../../context/Product';
import Product_info from './information';
import Carousel from '../../../components/carousel';
import { useLenis } from 'lenis/react';

function ProductPage () {
  let { id } = useParams();
  let one = useProduct(state => state.product);
  let [product, setProduct] = useState({} as Product);

  useEffect(() => {
    let lenis = document.querySelector('.lenis');
    if (lenis) lenis.scrollTo(0, 0);
    if (id) one(id, setProduct);
  }, []);
  if (product) {
    return (
      <main>
        <Product_info {...product} />
        <section className='lg:px-20'>
          <Carousel product={product} list={product.pictures} />
        </section>
      </main>
    );
  }
}
export default ProductPage;
