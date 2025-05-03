import { useParams } from "react-router-dom"

function Product() {
    const { id } = useParams()
    return (
        <main>Product</main>
    )
}
export default Product