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

function Testimonies () {
  return (
    <section className='flex items-center justify-center  gap-4 content'>
      <div className='flex w-full gap-12 py-12 flex-col xl:flex-row'>
        {list.map((item, i) => (
          <Commit key={i} {...item} />
        ))}
      </div>
    </section>
  );
}
export default Testimonies;
