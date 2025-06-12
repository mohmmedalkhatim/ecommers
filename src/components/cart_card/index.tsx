import { Product } from '../../context/Product';
import { getUrl } from '../../util';

function CartCard (props: Product) {
  
  return (
    <div className='col-span-2'>
      <li className='border rounded h-80 relative list-none flex '>
        <div className='w-[300px] h-80 overflow-hidden'>
          <img
            src={getUrl(props, props.picture)}
            alt=''
            className='border rounded-t'
            width={300}
          />
        </div>
        <div className='flex gap-4 p-4'>
          <div>{props.name}</div>
          <div className='flex '>
            <div>{props.price}</div>
          </div>
          <div>
            {props.quantity}
          </div>
        </div>
      </li>
    </div>
  );
}
export default CartCard;
