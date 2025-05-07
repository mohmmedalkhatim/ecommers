import { AllHTMLAttributes } from "react"
import Logo from "../Logo"
import { Link } from "react-router-dom"
import Input from "../Input"
import { TbSearch } from "react-icons/tb"


let links = [
    { name: "Home", url: "" },
    { name: "products", url: "" },
    { name: "collation", url: "" },
    { name: "", url: "" },
    { name: "", url: "" },
]
type Header_Props = {

} & AllHTMLAttributes<HTMLDivElement>

function Header(props: Header_Props) {
    return (
        <header className="flex w-screen py-4" {...props}>
            <div className="container flex mx-32 flex-col gap-4
            ">
                <div className="flex justify-between">
                    <Logo />
                    <Input icon={<TbSearch size={"1rem"} />} />
                </div>
                <nav className="flex list-none gap-4">
                    {links.map((item, i) => (
                        <Link to={item.url} key={i}>
                            <li>{item.name}</li>
                        </Link>
                    ))}
                </nav>

            </div>
        </header>
    )
}
export default Header