import { useEffect, useRef, useState } from 'react';
import { BiChevronDown, BiChevronLeft, BiChevronRight } from 'react-icons/bi';

function Carousel () {
  let [list, setList] = useState<number[]>([0, 1, 2, 3, 4]);
  let [active, setActive] = useState<number>(0);
  let ref = useRef<HTMLUListElement>(null);
  useEffect(() => {
    let val = active * 16 * 20 - 16;
    ref.current?.scrollTo(val, 0);
  }, [active]);
  return (
    <section>
      <ul className='carousel list-none relative transition-all' ref={ref}>
        <div
          className='fixed left-0 content flex items-center  h-[20rem]'
          onClick={() => {
            let val = active * 16 * 20 - 16;
            let width = ref.current?.scrollWidth;
            if (width) {
              console.log(width);
              console.log(val);
              width < val ? setActive(active - 1) : {};
            }
          }}
        >
          <BiChevronLeft size={'3rem'} />
        </div>
        {list?.map((_, i) => (
          <li id={`re${i}`} key={i} onClick={() => setActive(i)}></li>
        ))}
        <div
          className='fixed right-0 content flex items-center  h-[20rem]'
          onClick={() => {
            let val = active * 16 * 20 - 16;
            let width = ref.current?.scrollWidth;
            if (width) {
              console.log(width);
              console.log(val);
              width > val ? setActive(active + 1) : setActive(0);
            }
          }}
        >
          <BiChevronRight size={'3rem'} />
        </div>
      </ul>
    </section>
  );
}
export default Carousel;
