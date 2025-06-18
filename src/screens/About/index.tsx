import { useEffect } from "react"
import { TbPlant } from "react-icons/tb"

function About() {
  useEffect(()=>document.body.scrollTo(0,0),[])
  return (
    <main className="">
        <section className="h-[31rem] p-12 content">
          <TbPlant color="#ffffff60" size={"15rem"}/>
        </section>
    </main>
  )
}
export default About