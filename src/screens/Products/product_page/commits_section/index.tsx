import { Product } from "../../../../context/Product"

function Commits({product}:{product:Product}) {
  return (
    <section className="content">
        {product.commits_ids.map(commit=>(
            <div>
                
            </div>
        ))}
    </section>
  )
}
export default Commits