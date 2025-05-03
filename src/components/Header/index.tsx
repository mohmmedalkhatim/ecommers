import React, { ButtonHTMLAttributes } from "react"


let links = [
    {},
    {},
    {},
    {},
]
type Header_Props = {

} & ButtonHTMLAttributes<HTMLDivElement> 

function Header(props:Header_Props) {
    
    return (
        <header {...props}></header>
    )
}
export default Header