function Collation ({
  main,
  images,
  rev,
}: {
  main: string;
  images: string[];
  rev: boolean;
}) {
  return (
    <section className='content py-12'>
      {rev ? (
        <div
          className={`collation_container h-[30rem] `}
          style={{ alignItems: 'revert' }}
        >
          <div className='element'>
            <div
              className={`w-full bg-cover h-full`}
              style={{ backgroundImage: `url(${main})` }}
            ></div>
          </div>
          <div className='collation_elements'>
            {images.map((item, i) => (
              <div className='element' key={i}>
                <div
                  className='w-full bg-cover h-full'
                  style={{ backgroundImage: `url(${item})` }}
                ></div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div
          className={`collation_container h-[30rem] `}
          style={{ alignItems: 'revert' }}
        >
          <div className='collation_elements'>
            {images.map((item, i) => (
              <div className='element' key={i}>
                <div
                  className='w-full bg-cover h-full'
                  style={{ backgroundImage: `url(${item})` }}
                ></div>
              </div>
            ))}
          </div>
          <div className='element'>
            <div
              className={`w-full bg-cover h-full`}
              style={{ backgroundImage: `url(${main})` }}
            ></div>
          </div>
        </div>
      )}
    </section>
  );
}
export default Collation;
