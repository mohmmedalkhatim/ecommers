import Button from '../../components/Button';

function Hero() {
  return (
    <section className="h-[39rem]  bg-[#ecedf2]">
      <div className="hero_content h-full py-8 content">
        <div className="">
          <div className="hero_call_to_action pt-[5rem] h-full">
            <h1>welcome</h1>
            <p className="w-[27rem] text-base">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Distinctio veniam id consequatur tempora recusandae, similique
              odit.
            </p>
            <div>
              <Button children="know more" />
            </div>
          </div>
        </div>
        <div className="bg-[url(/imgs/hero.jpg)] bg-contain bg-no-repeat bg-center h-full hidden md:block"></div>
      </div>
    </section>
  );
}
export default Hero;
