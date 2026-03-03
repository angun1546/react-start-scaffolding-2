import { useParams } from 'react-router';
export function ProductDetail() {
  const id = useParams();
  console.log(id);
  return (
    <>
      <h1>Product Detail</h1>
      <h2>상품제목:{id.id}</h2>
    </>
  );
}
