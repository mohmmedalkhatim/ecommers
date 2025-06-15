import { useCart } from '../../context/cart';
import { Product } from '../../context/Product';
import Button from '../Button';
import { Link } from 'react-router-dom';
import { getUrl } from '../../util';

function ProductCard (props: Product) {
  const add_Product = useCart(state => state.add_Product);

  return (
    <li className='border rounded mx-auto  list-none min-w-[16rem] group max-w-[18rem]'>
      <div className='h-[300px] w-[280px] relative overflow-hidden'>
        <img
          src={getUrl(props, props.picture)}
          alt=''
          className='border rounded-t'
          height={300}
        />
        <Link to={`/product/${props.id}`} className='bg-gradient-to-r hidden group-hover:flex bottom-0 from-[#00000095] absolute w-full h-full to-[#00000021]'>

        </Link>
        <Link
          to={`/product/${props.id}`}
          className='absolute top-4 opacity-0 transition-opacity group-hover:opacity-100 left-4 text-white'
        >
          <div className=''>{props.name}</div>
        </Link>
        <div className='items-center gap-4 absolute bottom-4 opacity-0 group-hover:opacity-100  flex transition-opacity justify-between w-full px-4 text-white'>
          <div>{props.price}</div>
          <Button
            children='cart'
            onClick={() => {
              add_Product({
                ...props,
                include: true,
              });
            }}
          />
        </div>
      </div>
    </li>
  );
}
export default ProductCard;
