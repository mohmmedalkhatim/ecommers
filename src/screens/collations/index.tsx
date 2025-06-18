import { useEffect } from 'react';
import Collation from '../../sections/Collation';

let list = [
  {
    rev: true,
    main: '/imgs/ring.jpg',
    images: [
      '/imgs/ring.jpg',
      '/imgs/ring.jpg',
      '/imgs/ring.jpg',
      '/imgs/ring.jpg',
    ],
  },
  {
    rev: false,
    main: '/imgs/ring.jpg',
    images: [
      '/imgs/ring.jpg',
      '/imgs/ring.jpg',
      '/imgs/ring.jpg',
      '/imgs/ring.jpg',
    ],
  },
  {
    rev: true,
    main: '/imgs/ring.jpg',
    images: [
      '/imgs/ring.jpg',
      '/imgs/ring.jpg',
      '/imgs/ring.jpg',
      '/imgs/ring.jpg',
    ],
  },
  {
    rev: false,
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
  useEffect(() => {
    let lenis = document.querySelector('.lenis');
    if (lenis) lenis.scrollTo(0, 0);
  }, []);
  return (
    <main>
      {list.map(item => (
        <Collation {...item} />
      ))}
    </main>
  );
}
export default Collations;
