import { TbSearch } from 'react-icons/tb';
import Input from '../../components/Input';
import ProductCard from '../../components/product_card';

let list = [
  { name: 'keyboard', image: '', price: '30' },
  { name: 'keyboard', image: '', price: '30' },
  { name: 'keyboard', image: '', price: '30' },
  { name: 'keyboard', image: '', price: '30' },
  { name: 'keyboard', image: '', price: '30' },
  { name: 'keyboard', image: '', price: '30' },
];

function Products () {
  return (
    <main>
      <section className='content gap-4 products'>
        <div className='col-span-4 products_wib gap-4'>
          <div className='filter col-span-4 content'>
            <form action=''>
              <Input icon={<TbSearch />} />
            </form>
          </div>
          {list.map((item, i) => (
            <ProductCard {...item} key={i} />
          ))}
        </div>
      </section>
    </main>
  );
}
export default Products;
