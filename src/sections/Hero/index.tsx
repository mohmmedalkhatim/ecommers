import Button from '../../components/Button';

function Hero () {
  return (
    <section className='content'>
      <div className='hero_content'>
        <div className=''>
          <div className='hero_call_to_action'>
            <h1>welcome</h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Distinctio veniam id consequatur tempora recusandae, similique
              odit.
            </p>
            <div>
              <Button children='hello' />
            </div>
          </div>
        </div>
        <div className='background border hidden md:block'></div>
      </div>
    </section>
  );
}
export default Hero;
