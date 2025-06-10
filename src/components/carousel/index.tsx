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
    <section className='content  relative py-12'>
      <ul className='carousel px-[2rem] list-none border  rounded' ref={ref}>
        <div
          className='absolute lg:-left-[4rem] left-0 bg-white  to-[#e5e7eb] ml-8 sm:ml-12 md:ml-40 xl:ml-48  border flex items-center  h-[20rem]'
          onClick={() => {
            let val = active * 16 * 20 - 16;
            let width = ref.current?.clientWidth;
            let scroll = ref.current?.scrollWidth;
            if (width && scroll) {
              scroll - width < val ? setActive(active - 1) : setActive(0);
            }
          }}
        >
          <BiChevronLeft size={'3rem'} />
        </div>
        {list?.map((_, i) => (
          <li className='border' key={i} onClick={() => setActive(i)}></li>
        ))}
        <div
          className='absolute lg:-right-[4rem] right-0 bg-white mr-8 sm:mr-12 md:mr-40 xl:mr-48 border flex items-center  h-[20rem]'
          onClick={() => {
            let val = active * 16 * 20 + 16;
            let width = ref.current?.clientWidth;
            let scroll = ref.current?.scrollWidth;
            if (width && scroll) {
              scroll - width > val ? setActive(active + 1) : setActive(0);
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
