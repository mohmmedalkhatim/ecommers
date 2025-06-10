import { Product } from '../../context/Product';
import ProductCard from '../product_card';

function List ({ list }: { list: Product[] }) {
  return (
    <section className='content'>
      <div className='products_wib gap-4'>
        {list.map((item, i) => (
          <ProductCard {...item} key={i} />
        ))}
      </div>
    </section>
  );
}
export default List;
