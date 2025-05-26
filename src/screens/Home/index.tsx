import Collation from '../../sections/Collation';
import Hero from '../../sections/Hero';
import Products from '../../sections/Products';
import Services from '../../sections/services/indxe';
import Testimonies from '../../sections/Testimonies';

function Home () {
  return (
    <section>
      <Hero/>
      <Testimonies />
      <Services/>
      <Collation/>
    </section>
  );
}
export default Home;
