import { ReactElement } from 'react';
import Button from '../../components/Button';
import MyLink from '../../components/Header/Link';
import Profile from './Profile';
import { useAuth } from '../../context/auth';

function Auth (): ReactElement {
  return (
    <div className='p-8 flex items-center h-[30.93rem] justify-center gap-20'>
      <MyLink content={<Button children='sign_up' />} url='/sign_up' />
      <div>&</div>
      <MyLink content={<Button children='sign_in' />} url='/sign_in' />
    </div>
  );
}
function Account () {
  let login = useAuth(state=>state.login)
  return (
    <main>
      <section className='content list-none'>
        {login ? <Profile /> : <Auth />}
      </section>
    </main>
  );
}
export default Account;
