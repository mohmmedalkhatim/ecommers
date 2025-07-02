import CartCard from '../../components/cart_card';
import { useCart } from '../../context/cart';
import CartHeader from './header';

function Cart () {
  let list = useCart(state => state.list);
  return (
    <>
      <CartHeader />
      <main className='content pt-[4rem] py-8'>
        <ul className='products_wib  gap-4 list-none auto-rows-[20rem] min-h-[25rem]' >
          {list.map(item => (
            <CartCard {...item} />
          ))}
        </ul>
      </main>
    </>
  );
}
export default Cart;
