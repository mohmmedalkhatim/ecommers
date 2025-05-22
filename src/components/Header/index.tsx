import { AllHTMLAttributes } from "react"
import Logo from "../Logo"
import Input from "../Input"
import { TbMenu2, TbSearch } from "react-icons/tb"
import MyLink from "./Link"


let links = [
    { name: "Home", url: "" },
    { name: "products", url: "" },
    { name: "collation", url: "" },
    { name: "about", url: "" },
    { name: "my_account", url: "" },
]
type Header_Props = {

} & AllHTMLAttributes<HTMLDivElement>

function Header(props: Header_Props) {
    return (
        <header className={"border-b py-4"}{...props}>
            <div className="md:flex hidden content w-full  flex-col gap-4 ">
                <div className="flex justify-between">
                    <Logo />
                    <Input icon={<TbSearch size={"1rem"} />} className="w-[20rem]" placeholder="what are you looking for...." />
                </div>
                <nav className="flex list-none gap-4">
                    {links.map((item, i) => (
                        <MyLink key={i} url={item.url} name={item.name}/>
                    ))}
                </nav>
            </div>
            <div className="flex md:hidden content items-center justify-between gap-4 ">
                <Logo/>
                <TbMenu2 size={"1.6rem"}/>
            </div>
        </header>
    )
}
export default Header