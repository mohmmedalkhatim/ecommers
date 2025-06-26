import { Textarea } from '@headlessui/react';
import { Product } from '../../../../context/Product';
import Commit from './commit';
import Button from '../../../../components/Button';
import { pb } from '../../../../main';
import { Dispatch, SetStateAction, useState } from 'react';
import { useCommits } from '../../../../context/commits';

function Commits ({
  product,
  setProduct,
}: {
  product: Product;
  setProduct: Dispatch<SetStateAction<Product>>;
}) {
  console.log(product.commits);
  const [content, setContent] = useState('');
  const create = useCommits(state => state.create);
  if (product.commits) {
    return (
      <section className='content'>
        <div className='content'>
          {product.commits?.map(id => (
            <Commit id={id} />
          ))}
        </div>
        <div className='content'>
          {pb.authStore.isValid ? (
            <form
              className='flex flex-col gap-4 content'
              onSubmit={e => {
                e.preventDefault();
                create(content, product.id, commits, setProduct, setcommits);
              }}
            >
              <Textarea
                className={
                  'border  h-[10rem] p-2 focus:ring-gray-900 rounded33 focus:outline-none'
                }
                onChange={e => setContent(e.target.value)}
              ></Textarea>
              <div className='flex justify-end items-end'>
                <Button type='submit'>send</Button>
              </div>
            </form>
          ) : (
            <div>you have to sign in to add a commit</div>
          )}
        </div>
      </section>
    );
  }
}
export default Commits;
