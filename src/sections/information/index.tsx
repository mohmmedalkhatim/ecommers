import Button from '../../components/Button';
let images = [
  '/imgs/ring.jpg',
  '/imgs/ring.jpg',
  '/imgs/ring.jpg',
  '/imgs/ring.jpg',
];

function Information () {
  return (
    <section className='content py-12  rounded'>
      <div
        className={`collation_container min-h-[33rem] `}
        style={{ alignItems: 'revert' }}
      >
        <div className='element'>
          <div
            className={`w-full bg-cover h-full flex items-center justify-center`}
          >
            <div className='h-2/3 w-3/4 gap-16 flex flex-col'>
              <h5>hello world</h5>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
                asperiores dolorem inventore minima animi at consectetur aperiam
                dolores! Aperiam, deleniti.
              </p>
              <div className='flex justify-between items-center h-40'>
                <div>hello there</div>
                <Button>what</Button>
              </div>
            </div>
          </div>
        </div>
        <div className='collation_elements'>
          {images.map((item, i) => (
            <div className='element min-h-[15rem]' key={i}>
              <div
                className='w-full bg-cover h-full'
                style={{ backgroundImage: `url(${item})` }}
              ></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default Information;
