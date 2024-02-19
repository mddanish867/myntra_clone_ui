import "./Mens.css";
import { useGetProductCategoryDetailsQuery } from "../../../Apis/productCategoryApi";
import { Link } from "react-router-dom";

function Mens() {
  const { data } = useGetProductCategoryDetailsQuery("Men");
  let categories: any = [];
  if (data) {
    let categoryList = data.map((items: any) => items.category);
    categories = Array.from(new Set(categoryList));
  }
  // Function to chunk array into groups of size 'chunk size'
  const chunkArray = (arr: any, chunkSize: any) => {
    const chunkedArray = [];
    for (let i = 0; i < arr.length; i += chunkSize) {
      chunkedArray.push(arr.slice(i, i + chunkSize));
    }
    return chunkedArray;
  };
  // Chunk the data array into group of 5
  const chunkData = chunkArray(categories, 3);

  return (
    <>
    <div className="nav_link_row">
    {chunkData.map((row: any, rowIndex: number) => (
      <div key={rowIndex} className="nav_links_column_men">
        {row.map((item: any, columnIndex: number) => (
          <Link to="" key={columnIndex} className="heading_category_men">
            {item}
          </Link>
        ))}
      </div>
    ))}
  </div>
    </>
  );
}

export default Mens;