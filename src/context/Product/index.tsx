export type Product = {
  id?: number;
  name: string;
  price: number;
  image: string;
  quantity?: number;
};
interface Product_context {
    one:()=>Product;
    list:(page:number)=>Product[];
}
