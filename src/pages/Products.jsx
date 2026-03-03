import { Link } from 'react-router';
const PRODUCT = [
  { id: 1, title: '상품1' },
  { id: 2, title: '상품2' },
  { id: 3, title: '상품3' },
];
export function Products() {
  return (
    <>
      <div>Products</div>
      <ul>
        <li>
          <link to={`${PRODUCT[0].id}`} />
          상품1
        </li>
        <li>
          <link to={`${PRODUCT[1].id}`} />
          상품2
        </li>
        <li>
          <link to={`${PRODUCT[2].id}`} />
          상품3
        </li>
      </ul>
      <h2>map</h2>
      <ul>
        {PRODUCT.map((item) => (
          <li>
            <Link to={`${item.id}`}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
