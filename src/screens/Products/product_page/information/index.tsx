import { useEffect, useState } from 'react';
import Button from '../../../../components/Button';
import { useCart } from '../../../../context/cart';
import { Product } from '../../../../context/Product';
import { getUrl } from '../../../../util';
import { TbMinus, TbPlus } from 'react-icons/tb';

function Product_info (product: Product) {
  const add = useCart(state => state.add_Product);
  const [mainImage, setMainImage] = useState('');

  const [quantity, setQuantity] = useState(1);
  useEffect(() => {
    setMainImage(getUrl(product, product.picture));
  }, [product]);
  return (
    <section className='collation_container content gap-12 pt-0'>
      <div className='h-[35rem] w-[28rem] sm:w-[32rem] flex py-8 sm:px-12 lg:px-0'>
        <div
          className='flex flex-col gap-1 w-[4rem] justify-center items-center'
          onMouseLeave={() => {
            setMainImage(getUrl(product, product.picture));
          }}
        >
          {product.pictures?.map(item => (
            <div key={item}
              onMouseEnter={() => {
                setMainImage(getUrl(product, item));
              }}
              className='bg-contain bg-center h-[8rem] w-[4rem] bg-no-repeat'
              style={{
                backgroundImage: `url(${getUrl(product, item)})`,
              }}
            ></div>
          ))}
        </div>
        <div
          className='h-full w-full px-4 bg-center bg-contain bg-no-repeat'

        >
          <img src={mainImage}  alt="" />
        </div>
      </div>
      <div className='md:py-8 sm:p-16 md:pt-16 gap-8 flex flex-col'>
        <div className='flex flex-col gap-12'>
          <h4>{product.name}</h4>
          <div className='flex justify-between items-center'>
            <h6>{product.quantity} left</h6>
            <div className='flex items-center gap-8'>
              <div className='flex items-center'>
                <div
                  className='p-2 rounded-l-md bg-slate-700 cursor-pointer'
                  onClick={() => setQuantity(Math.max(quantity - 1, 1))}
                >
                  <TbMinus color='white' />
                </div>
                <div className='border-t border w-full py-1 px-4'>
                  {quantity}
                </div>
                <div
                  className='p-2 rounded-r-md bg-slate-700 cursor-pointer'
                  onClick={() =>
                    setQuantity(
                      Math.min(
                        product.quantity ? product.quantity : 0,
                        quantity + 1
                      )
                    )
                  }
                >
                  <TbPlus color='white' />
                </div>
              </div>
              <Button
                onClick={() => {
                  add({
                    ...product,
                    quantity: quantity,
                    include: true,
                  });
                }}
              >
                add to Cart
              </Button>
            </div>
          </div>
          <div>{product.description}</div>
        </div>
      </div>
    </section>
  );
}
export default Product_info;
