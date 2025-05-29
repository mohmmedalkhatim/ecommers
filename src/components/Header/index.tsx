import { AllHTMLAttributes } from 'react';
import Logo from '../Logo';
import Input from '../Input';
import { TbBasket, TbMenu2, TbSearch, TbUser } from 'react-icons/tb';
import MyLink from './Link';
import { useAside } from '../../context/Aside';

let links = [
  { name: 'Home', url: '' },
  { name: 'products', url: '/products' },
  { name: 'collation', url: '' },
  { name: 'about', url: '' },
];
let info = [
  { name: 'my_account', url: '/auth', icon: <TbUser size={'1.5rem'} /> },
  { name: 'cart', url: '', icon: <TbBasket size={'1.5rem'} /> },
];
type Header_Props = {} & AllHTMLAttributes<HTMLDivElement>;

function Header (props: Header_Props) {
  let openAsdie = useAside(state => state.toggle);
  return (
    <header className={'border-b py-4 text-sm  w-full bg-white '} {...props}>
      <div className='md:flex hidden content w-full  flex-col gap-4 '>
        <div className='flex justify-between'>
          <Logo />
          <Input
            icon={<TbSearch size={'1rem'} />}
            className='w-[20rem]'
            placeholder='what are you looking for....'
          />
        </div>
        <nav className='flex justify-between w-full'>
          <div className='flex list-none gap-4 font-semibold'>
            {links.map((item, i) => (
              <MyLink key={i} url={item.url} content={item.name} />
            ))}
          </div>
          <div className='flex gap-4 list-none'>
            {info.map((item, i) => (
              <MyLink key={i} url={item.url} content={item.icon} />
            ))}
          </div>
        </nav>
      </div>
      <div className='flex md:hidden content items-center justify-between gap-4 '>
        <Logo />
        <TbMenu2 onClick={openAsdie} size={'1.6rem'} />
      </div>
    </header>
  );
}
export default Header;
