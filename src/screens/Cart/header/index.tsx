import { useCart } from "../../../context/cart"

function CartHeader() {
  let total_price = useCart(state=>state.total_price)
  return (
    <header className="cart_header top-[6.65rem] w-full border-b bg-white">
        <div className="content h-12 flex  items-center">
            ${Math.floor(total_price)}
        </div>
        <div></div>
    </header>
  )
}
export default CartHeader