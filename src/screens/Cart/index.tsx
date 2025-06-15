import CartCard from '../../components/cart_card';
import { useCart } from '../../context/cart';
import CartHeader from './header';

function Cart () {
  let list = useCart(state => state.list);
  return (
    <>
      <CartHeader />
      <main className='content pt-[4rem]'>
        <ul className='products_wib gap-4 h-[30rem] list-none'>
          {list.map(item => (
            <CartCard {...item} />
          ))}
        </ul>
      </main>
    </>
  );
}
export default Cart;
