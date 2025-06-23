import { ReactElement } from 'react';
import Button from '../../components/Button';
import MyLink from '../../components/Header/Link';
import Profile from './Profile';
import { pb } from '../../main';

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
  return (
    <main>
      <section className='content list-none'>
        {pb.authStore.isValid ? <Profile /> : <Auth />}
      </section>
    </main>
  );
}
export default Account;
