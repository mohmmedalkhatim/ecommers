import { ChangeEvent, useRef, useState } from 'react';
import Input from '../../../components/Input';
import Button from '../../../components/Button';
import MyLink from '../../../components/Header/Link';
import { useAuth, User } from '../../../context/auth';
import { Link } from 'react-router-dom';

function Signup () {
  let [Form, setForm] = useState<User>({
    email: 'test@example.com',
    emailVisibility: true,
    name: 'test',
    orders: [],
    password: '12345678',
    passwordConfirm: '12345678',
  });
  let sign_up = useAuth(state => state.signup);
  const ref = useRef<HTMLAnchorElement>(null);
  let onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setForm(state => {
      console.log("name: ",e.target.name)
      console.log("type: ",e.target.type)
        return {
          ...state,
          [e.target.name]: e.target.value,
        };
    });
  };
  return (
    <main className='content'>
      <section className=''>
        <div className=' py-16 h-[30rem] flex  justify-center gap-40'>
          <div>
            <form
              action=''
              onSubmit={e => {
                e.preventDefault();
                sign_up(Form).then(() => {
                  ref.current?.click();
                });
              }}
              className='w-[18rem] flex flex-col gap-4'
            >
              <Input type='text' name='name' value={Form.name} onChange={onChange}/>
              <Input type='email' name='email' value={Form.email} onChange={onChange}/>
              <Input type='password' name='password' value={Form.password} onChange={onChange} />
              <Input
                type='password'
                name='passwordConfirm'
                value={Form.passwordConfirm}
                onChange={onChange}
              />
              <div className='flex items-center justify-between px-2'>
                <div className='flex items-center gap-2'>
                  <input type='checkbox' id='ch' />
                  <label htmlFor='#ch' className='flex gap-1'>
                    <div className='text-blue-500 underline'>privacy</div> and{' '}
                    <div className='text-blue-500 underline'> policy</div>
                  </label>
                </div>
                <Button
                  type='submit'
                  size='md'
                  className='text-sm'
                  children='sign up'
                />
                <Link ref={ref} to={'/sign_in'} hidden></Link>
              </div>
            </form>
            <div className='list-none flex gap-2 items-center justify-center pt-4'>
              <div>already have an account</div>
              <div className='text-blue-500 underline'>
                <MyLink url='/sign_in' content='sign_in' />
              </div>
            </div>
          </div>
          <div>hello</div>
        </div>
      </section>
    </main>
  );
}
export default Signup;
