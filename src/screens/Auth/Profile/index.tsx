import Button from '../../../components/Button';
import { pb } from '../../../main';
import { useAuth } from '../../../context/auth';
import Avatar from './avatar';

function Profile () {
  let logout = useAuth(state => state.logout);
  let info = pb.authStore.record;
  let valid = pb.authStore.isValid;
  if (valid || info) {
    return (
      <section className='h-[30rem] py-16'>
        <div className='list-none flex justify-between  gap-8   h-[20rem] md:content'>
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
            <Button onClick={logout}>logout</Button>
          </div>
        </div>
      </section>
    );
  }
}
export default Profile;
