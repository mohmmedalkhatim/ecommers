import { useCart } from '../../context/cart';
import { Product } from '../../context/Product';
import Button from '../Button';
import { Link } from 'react-router-dom';
import { getUrl } from '../../util';

function ProductCard (props: Product) {
  const add_Product = useCart(state => state.add_Product);

  return (
    <li className='border rounded mx-auto relative list-none min-w-[16rem] max-w-[18rem]'>
      <div className='h-[300px] w-[280px] overflow-hidden'>
        <img
          src={getUrl(props, props.picture)}
          alt=''
          className='border rounded-t'
          height={300}
        />
      </div>
      <div className='flex gap-4 items-center justify-between p-4'>
        <Link to={`/product/${props.id}`}>
          <div className=''>{props.name}</div>
        </Link>
        <div className='flex items-center gap-4'>
          <div>{props.price}</div>
          <Button
            children='cart'
            onClick={() => {
              add_Product({
                ...props,
                include:true
              });
            }}
          />
        </div>
      </div>
    </li>
  );
}
export default ProductCard;
