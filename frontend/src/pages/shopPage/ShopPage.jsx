import { Box } from "@mui/material";
import { useState } from "react";
import { FilterList } from "../../components/filterList/FilterList";
import { products } from "../../constants/products";
import { ProductList } from "../../components/productList/ProductList";

const ShopPageWrapperSX = {
  display: { xs: "block", md: "flex" },
  height: "100%",
  py: "20px",
  gap: "10px",
};

export const ShopPage = () => {
  const [propuctList, setProductList] = useState(products);

  return (
    <>
      <Box sx={ShopPageWrapperSX}>
        <FilterList setProductList={setProductList} />
        <ProductList propuctList={propuctList} />
      </Box>
    </>
  );
};
