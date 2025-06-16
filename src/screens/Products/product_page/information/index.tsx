import { useState } from 'react';
import Button from '../../../../components/Button';
import { useCart } from '../../../../context/cart';
import { Product } from '../../../../context/Product';
import { getUrl } from '../../../../util';
import { TbMinus, TbPlus } from 'react-icons/tb';

function Product_info (product: Product) {
  let add = useCart(state => state.add_Product);
  let [quintity, setQuintity] = useState(1);
  return (
    <section className='collation_container content pt-12'>
      <div className='h-[25rem] flex px-[4rem]'>
        <div className='flex flex-col gap-1 w-[10rem] justify-center items-center'>
          {product.pictures?.map(item => (
            <div
              className='bg-contain bg-center1 h-[5rem] w-[5rem] bg-no-repeat'
              style={{
                backgroundImage: `url(${getUrl(product, item)})`,
              }}
            ></div>
          ))}
        </div>
        <div
          className='h-full w-full bg-center bg-contain bg-no-repeat'
          style={{
            backgroundImage: `url(${getUrl(product, product.picture)})`,
          }}
        ></div>
      </div>
      <div className='p-4 gap-8 flex flex-col'>
        <div className='flex flex-col gap-12'>
          <h4>{product.name}</h4>
          <div className='flex justify-between items-center'>
            <h6>{product.quantity} left</h6>
            <div className='flex items-center gap-8'>
              <div className='flex items-center'>
                <div className='p-2 rounded-l-md bg-slate-700' onClick={()=>setQuintity(quintity-1)}>
                  <TbMinus color='white' />
                </div>
                <div className='border-t border w-full py-1 px-4'>{quintity}</div>
                <div className='p-2 rounded-r-md bg-slate-700' onClick={()=>setQuintity(quintity+1)}>
                  <TbPlus color='white' />
                </div>
              </div>
              <Button
                onClick={() => {
                  add({
                    ...product,
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
