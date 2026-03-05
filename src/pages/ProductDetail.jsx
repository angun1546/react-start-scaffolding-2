import { useParams } from "react-router";
export function ProductDetail() {
  const {id} = useParams();
  console.log(id);
  return (
    <>
      <h1>ProductDetail</h1>
      <h2>상품제목:{id}</h2>
    </>
  );
}
