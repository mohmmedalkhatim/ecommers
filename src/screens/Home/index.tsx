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
  const [list,setList] = useState();
  const fetchProducts = useProduct(state=>state.list)
  useEffect(()=>{
    fetchProducts(1,setList)
  },[])
  return (
    <section>
      <Hero />
      <Testimonies />
      <Companies/>
      {list && <List list={list}/>}
      <Information/>
    </section>
  );
}
export default Home;
