import { TbChevronsLeft } from 'react-icons/tb';
import { useAside } from '../../context/Aside';

function Aside () {
  let opened = useAside(state => state.state);
  let toggle = useAside(state=>state.toggle)
  return (
    <aside
      className='fixed top-0 w-[40rem] z-50 bg-white h-screen transition-all duration-300 border-l'
      style={{ right: opened ? '0' : '-44rem' }}
    >
      <div className='w-full flex items-center justify-between p-12'>
        <div>
            aside
        </div>
        <div onClick={toggle}>
            <TbChevronsLeft size={"1.5rem"}/>
        </div>
      </div>
    </aside>
  );
}
export default Aside;
