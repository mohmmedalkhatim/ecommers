import { TbApi, TbAppWindow, TbAssembly, TbMoneybag, TbServer, TbUserDollar } from 'react-icons/tb';
import Service from './service';

let list = [
  {
    title: 'frontend ui',
    description: 'building a highly interactive ui',
    icon: <TbAppWindow size={'2rem'} />,
  },
  {
    title: 'backend',
    description: 'building a highly interactive ui',
    icon: <TbApi size={'2rem'} />,
  },
  {
    title: 'low level code',
    description: 'building a highly interactive ui',
    icon: <TbAssembly size={'2rem'} />,
  },
  {
    title: 'programming the server config',
    description: 'building a highly interactive ui',
    icon:<TbServer size={'2rem'}/>
  },
  {
    title: 'administrator',
    description: 'building a highly interactive ui',
    icon: <TbUserDollar size={'2rem'} />,
  },
  {
    title: 'marketing',
    description: 'building a highly interactive ui',
    icon: <TbMoneybag size={'2rem'} />,
  },
];

function Services() {
  return (
    <section className="h-auto py-12 content">
      <main className="services_container">
        {list.map((item, i) => (
          <Service key={i} {...item} />
        ))}
      </main>
    </section>
  );
}
export default Services;
