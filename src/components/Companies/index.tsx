import {
  TbBrandAdobe,
  TbBrandAirbnb,
  TbBrandLinkedin,
  TbBrandMysql,
} from 'react-icons/tb';

let list = [
  { name: 'Adobe', logo: <TbBrandAdobe size={"2rem"}/> },
  { name: 'MySql', logo: <TbBrandMysql size={"2rem"} /> },
  { name: 'Linkedin', logo: <TbBrandLinkedin size={"2rem"}/> },
  { name: 'Airbnb', logo: <TbBrandAirbnb size={"2rem"}/> },
];

function Companies () {
  return (
    <section className='py-12'>
      <div className='content three_cols_grid'>
        {list.map(item => (
          <div className='flex items-center justify-center h-[5rem]'>
            <div className='flex gap-6'>
              <div>{item.logo}</div>
              <p>{item.name}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
export default Companies;
