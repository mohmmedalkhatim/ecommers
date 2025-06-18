import Commit from './commit';

let list = [
  {
    name: 'mohammed alkhatim',
    image: '/imgs/self.jpg',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit minus ratione similique iste corporis. Aliquid pariatur magnam mollitiasint consectetur.',
  },
  {
    name: 'mohammed alkhatim',
    image: '/imgs/self.jpg',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit minus ratione similique iste corporis. Aliquid pariatur magnam mollitiasint consectetur.',
  },
  {
    name: 'mohammed alkhatim',
    image: '/imgs/self.jpg',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit minus ratione similique iste corporis. Aliquid pariatur magnam mollitiasint consectetur.',
  },
];

function Testimonies() {
  return (
    <section className="flex flex-col  items-center justify-center  gap-4 content">
      <div className='flex flex-col items-center  gap-12 py-12'>
        <h3 className=''>People say to us</h3>
        <div className='h-1 bg-blue-500 w-20 rounded-2xl'></div>
      </div>
      <div className="w-full gap-12 py-12 testimonies_container ">
        {list.map((item, i) => (
          <Commit key={i} {...item} />
        ))}
      </div>
    </section>
  );
}
export default Testimonies;
