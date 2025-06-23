import Button from '../../../components/Button';
import { pb } from '../../../main';
import { useAuth } from '../../../context/auth';
import Avatar from './avatar';
import { Link } from 'react-router-dom';
import { useRef } from 'react';

function Profile () {
  let logout = useAuth(state => state.logout);
  let info = pb.authStore.record;
  let valid = pb.authStore.isValid;
  let ref = useRef<HTMLAnchorElement>(null);
  if (valid || info) {
    return (
      <section className='h-[30rem] py-16'>
        <div className='list-none flex justify-between  gap-8   h-[20rem]'>
          <div className=''>
            <div className='flex gap-8 p-4'>
              <Avatar />
              <div className='info'>
                <h5>{info?.name}</h5>
                <p>{info?.email}</p>
              </div>
            </div>
          </div>
          <div className='flex flex-col justify-end'>
            <Button
              onClick={async () => {
                await logout().then(() => {
                  ref.current?.click();
                });
              }}
            >
              logout
            </Button>
            <Link ref={ref} to='/sign_in' style={{ display: 'none' }}></Link>
          </div>
        </div>
      </section>
    );
  }
}
export default Profile;
