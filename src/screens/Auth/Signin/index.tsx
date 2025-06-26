import { useRef, useState } from 'react';
import Input from '../../../components/Input';
import Button from '../../../components/Button';
import MyLink from '../../../components/Header/Link';
import { useAuth } from '../../../context/auth';
import { Link } from 'react-router-dom';
import { pb } from '../../../main';

function Signin () {
  let ref = useRef<HTMLAnchorElement>(null);
  let [email, setEmail] = useState('test@example.com');
  let [password, setPassword] = useState('12345678');
  let sign_in = useAuth(state => state.signin);
  if (!pb.authStore.isValid) {
    return (
      <main className='content'>
        <section className=''>
          <div className=' py-16 h-[30rem] flex  justify-center gap-40'>
            <div>
              <form
                onSubmit={async e => {
                  e.preventDefault();
                  await sign_in(email, password).then(() => {
                    ref.current?.click();
                  });
                }}
                className='w-[18rem] flex flex-col gap-4'
              >
                <Input
                  type='email'
                  name='email'
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                />
                <Input
                  type='password'
                  name='password'
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                />
                <div className='flex items-center justify-between px-2'>
                  <Button
                    type='submit'
                    size='md'
                    className='text-sm'
                    children='sign in'
                  />
                  <Link className='hidden' to={'/auth'} ref={ref} />
                </div>
              </form>
              <div className='list-none flex gap-2 items-center justify-center pt-4'>
                <div>didn't have an account</div>
                <div className='text-blue-500 underline'>
                  <MyLink url='/sign_up' content='sign_up' />
                </div>
              </div>
            </div>
            <div>hello</div>
          </div>
        </section>
      </main>
    );
  } else {
    return (
      <main className='content h-[30rem]'>
        <div className='list-none flex justify-between items-center h-[20rem] content '>
          <h6>you are already login</h6>
          <Button>
            <MyLink url='/auth' content={'my profile'} />
          </Button>
        </div>
      </main>
    );
  }
}
export default Signin;
