import Button from '../Button';

function ProductCard ({
  image,
  name,
  price,
}: {
  image: string;
  name: string;
  price: string;
}) {
  return (
    <li className='border p-4 list-none'>
      <img src={'/imgs/self.png'} alt='' className='border' height={120} />
      <div className='flex gap-4 items-center justify-between p-4'>
        <div className='flex justify-between flex-col'>
          <div>{name}</div>
          <div>{price}</div>
        </div>
          <Button children='cart' />
      </div>
    </li>
  );
}
export default ProductCard;
