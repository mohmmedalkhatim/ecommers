import Button from '../../components/Button';

function Hero () {
  return (
    <section className='content h-[35rem]'>
      <div className='hero_content h-full py-8'>
        <div className=''>
          <div className='hero_call_to_action pt-[5rem] h-full'>
            <h1>welcome</h1>
            <p className='w-[27rem]'>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Distinctio veniam id consequatur tempora recusandae, similique
              odit.
            </p>
            <div>
              <Button children='know more' />
            </div>
          </div>
        </div>
        <div className='background border h-full hidden md:block'></div>
      </div>
    </section>
  );
}
export default Hero;
