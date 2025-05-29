import { TbSearch } from 'react-icons/tb';
import Input from '../../components/Input';
import ProductCard from '../../components/product_card';

let list = [
  { name: 'ring', image: '/imgs/ring.jpg', price: 30 },
  { name: 'ring', image: '/imgs/ring.jpg', price: 30 },
  { name: 'ring', image: '/imgs/ring.jpg', price: 30 },
  { name: 'ring', image: '/imgs/ring.jpg', price: 30 },
  { name: 'ring', image: '/imgs/ring.jpg', price: 30 },
  { name: 'ring', image: '/imgs/ring.jpg', price: 30 },
];

function Products() {
  return (
    <main>
      <section className="content gap-4">
        <div className="col-span-4 products_wib gap-4">
          <div className="filter  sm:col-span-2 lg:col-span-3  xl:col-span-4 sm:px-8 lg:content">
            <form action="">
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
