import { Product } from '../../context/Product';
import ProductCard from '../product_card';

function List ({ list }: { list: Product[] }) {
  return (
    <section className='content pb-12'>
      <div className='products_wib gap-4'>
        {list.map((item, i) => (
          <ProductCard {...item} key={i} />
        ))}
      </div>
    </section>
  );
}
export default List;
