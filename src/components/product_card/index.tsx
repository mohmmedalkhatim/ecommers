import { useCart } from '../../context/cart';
import { Product } from '../../context/Product';
import Button from '../Button';

function ProductCard ({ image, name, price }: Product) {
  let add_Product = useCart(state => state.add_Product);
  return (
    <li className='border rounded mx-auto relative list-none min-w-[16rem] max-w-[18rem]'>
      <img src={image} alt='' className='border rounded-t' height={300} />
      <div className='flex gap-4 items-center justify-between p-4'>
        <div className=''>{name}</div>
        <div className='flex items-center gap-4'>
          <div>{price}</div>
          <Button
            children='cart'
            onClick={() => {
              add_Product({ image, name, price });
            }}
          />
        </div>
      </div>
    </li>
  );
}
export default ProductCard;
