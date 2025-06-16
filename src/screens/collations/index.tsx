import Collation from '../../sections/Collation';

let list = [
  {
    rev:true,
    main: '/imgs/ring.jpg',
    images: [
      '/imgs/ring.jpg',
      '/imgs/ring.jpg',
      '/imgs/ring.jpg',
      '/imgs/ring.jpg',
    ],
  },
  {
    rev:false,
    main: '/imgs/ring.jpg',
    images: [
      '/imgs/ring.jpg',
      '/imgs/ring.jpg',
      '/imgs/ring.jpg',
      '/imgs/ring.jpg',
    ],
  },
  { 
    rev:true,
    main: '/imgs/ring.jpg',
    images: [
      '/imgs/ring.jpg',
      '/imgs/ring.jpg',
      '/imgs/ring.jpg',
      '/imgs/ring.jpg',
    ],
  },
  { 
    rev:false,
    main: '/imgs/ring.jpg',
    images: [
      '/imgs/ring.jpg',
      '/imgs/ring.jpg',
      '/imgs/ring.jpg',
      '/imgs/ring.jpg',
    ],
  },
];

function Collations ({}: {}) {
  return (
    <main>
      {list.map(item => (
        <Collation {...item} />
      ))}
    </main>
  );
}
export default Collations;
