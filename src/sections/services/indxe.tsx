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
    <section className='h-auto py-12 gap-4 content'>
      <main className='services_container'>
        {list.map((item)=>(<Service {...item}/>))}
      </main>
    </section>
  );
}
export default Services;
