import { Link } from "react-router-dom";

interface mylink_prop{
    url:string,
    name:string
}

function MyLink (item:mylink_prop) {
  return (
    <Link to={item.url}>
      <li>{item.name}</li>
    </Link>
  );
}
export default MyLink;
