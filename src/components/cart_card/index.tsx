import { Product } from "../../context/Product";
import Button from "../Button";

function CartCard ({ image, name, price }: Product) {
  
  return (
    <div className="col-span-2">
      <li className='border rounded relative list-none flex '>
        <img src={image} alt='' className='border rounded-t' width={300}  />
        <div className='flex gap-4 p-4'>
          <div>{name}</div>
          <div className='flex '>
            <div>{price}</div>
          </div>
        </div>
      </li>
    </div>
  );
}
export default CartCard;
