import { TbSearch } from 'react-icons/tb';
import Input from '../../components/Input';

let list = [{ name: 'keyboard' }];

function Products () {
  return (
    <main>
      <section className='content products'>
        <div className='filter'>
          <form action=''>
            <Input icon={<TbSearch />} />
          </form>
        </div>
        <div className='col-span-3'>
          
        </div>
      </section>
    </main>
  );
}
export default Products;
