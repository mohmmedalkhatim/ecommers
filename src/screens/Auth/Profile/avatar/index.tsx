import { TbUser } from "react-icons/tb"
import { pb } from "../../../../main"
import { useState } from "react"

function Avatar() {
  let [avatar,setAvatar] = useState({} as File)
  return (
    <div className="rounded-full bg-slate-100 p-4 border" onClick={()=>{
      pb.collection("users").update(pb.authStore.record?.id as string,{
        ...pb.authStore.record
      })
    }}>
      <TbUser size={"5rem"} color="#181818"/>
    </div>
  )
}
export default Avatar