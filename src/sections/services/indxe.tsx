import { TbAppWindow } from "react-icons/tb";
import Service from "./service";

let list = [
    {title:'frontend ui',description:"building a highly interactive ui",icon:<TbAppWindow size={"2rem"}/>},
    {title:'frontend ui',description:"building a highly interactive ui",icon:<TbAppWindow size={"2rem"}/>},
    {title:'frontend ui',description:"building a highly interactive ui",icon:<TbAppWindow size={"2rem"}/>},
    {title:'frontend ui',description:"building a highly interactive ui",icon:<TbAppWindow size={"2rem"}/>},
    {title:'frontend ui',description:"building a highly interactive ui",icon:<TbAppWindow size={"2rem"}/>},
    {title:'frontend ui',description:"building a highly interactive ui",icon:<TbAppWindow size={"2rem"}/>},
]


function Services () {
  return (
    <main className='h-auto gap-4'>
      <section className='services_container'>
        {list.map((item)=>(<Service {...item}/>))}
      </section>
    </main>
  );
}
export default Services;
