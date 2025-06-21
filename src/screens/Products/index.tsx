import { TbSearch } from 'react-icons/tb';
import Input from '../../components/Input';
import List from '../../components/Product_list';
import { useEffect, useState } from 'react';
import { useProduct } from '../../context/Product';
import { useLenis } from 'lenis/react';

function Products () {
  const [list, setList] = useState([]);
  const get_list = useProduct(state => state.list);
  useLenis((lenis)=>{
    lenis.scrollTo(0)
    3
  },[])
  useEffect(() => {
    let lenis = document.querySelector('.lenis');
    if (lenis) lenis.scrollTo(0, 0);
    get_list(1, setList);
  }, []);
  return (
    <main>
      <section className='content gap-4'>
        <div className='filter py-12 sm:px-8 lg:content'>
          <form action=''>
            <Input icon={<TbSearch />} />
          </form>
        </div>
      </section>
      <List list={list} />
    </main>
  );
}
export default Products;
