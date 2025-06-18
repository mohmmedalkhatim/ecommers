import Collation from '../../sections/Collation';
import Hero from '../../sections/Hero';
import Products from '../Products';
import Services from '../../sections/services/indxe';
import Testimonies from '../../sections/Testimonies';
import Carousel from '../../components/carousel';
import Information from '../../sections/information';
import List from '../../components/Product_list';
import { useEffect, useState } from 'react';
import { useProduct } from '../../context/Product';
import Companies from '../../components/Companies';
import { useLenis } from 'lenis/react';

let collation = {
  main: '/imgs/ring.jpg',
  images: [
    '/imgs/ring.jpg',
    '/imgs/ring.jpg',
    '/imgs/ring.jpg',
    '/imgs/ring.jpg',
  ],
};

function Home () {
  const [list, setList] = useState();
  const fetchProducts = useProduct(state => state.list);
  useEffect(() => {
        let lenis  =document.querySelector(".lenis");
    if (lenis) lenis.scrollTo(0,0)
    fetchProducts(1, setList);
  }, []);
  return (
    <section>
      <Hero />
      <Companies />
      <Testimonies />
      <div className='flex flex-col items-center  gap-12 py-20'>
        <h3 className=''>Top products</h3>
        <div className='h-1 bg-blue-500 w-20 rounded-2xl'></div>
      </div>
      {list && <List list={list} />}
      <Information />
    </section>
  );
}
export default Home;
