import { Link } from "react-router";
const PRODUCTS=[
  {id:"1",title:'상품1'},
  {id:"2",title:'상품2'},
  {id:"3",title:'상품3'},
  {id:"4",title:'상품4'},
  {id:"5",title:'상품5'},
  {id:"6",title:'상품6'},
]
export function Products() {
  return (
    <>
      <div>Products</div>
      <ul>
        <li>
          <Link to={`${PRODUCTS[0].id}`}>상품1</Link>
        </li>
        <li>
          <Link to={`${PRODUCTS[1].id}`}>상품2</Link>
        </li>
        <li>
          <Link to={`${PRODUCTS[2].id}`}>상품3</Link>
        </li>
      </ul>
      <h2>map</h2>
      <ul>
        {PRODUCTS.map((item) => (
          <li key={item.id}>
            <Link to={`${item.id}`}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
