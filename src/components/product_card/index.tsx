import { Product } from '../../context/cart';
import Button from '../Button';

function ProductCard({ image, name, price }: Product) {
  return (
    <li className="border rounded relative list-none min-w-[16rem] max-w-[18rem]">
      <img src={image} alt="" className="border rounded-t" height={300} />
      <div className="flex gap-4 items-center justify-between p-4">
        <div>{name}</div>
        <div className="flex items-center gap-4">
          <div>{price}</div>
          <Button children="cart" />
        </div>
      </div>
    </li>
  );
}
export default ProductCard;
