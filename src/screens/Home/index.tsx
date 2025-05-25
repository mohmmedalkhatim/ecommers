import Products from '../../sections/Products';
import Services from '../../sections/services/indxe';
import Testimonies from '../../sections/Testimonies';

function Home () {
  return (
    <section className='content'>
      <Testimonies />
      <Services/>
    </section>
  );
}
export default Home;
