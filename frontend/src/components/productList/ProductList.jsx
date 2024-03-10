import { List } from "@mui/material";
import { ProductItem } from "./productItem/ProductItem";

const ProductListSX = {
  display: { xs: "block", md: "flex" },
  flex: 3,
  flexWrap: "wrap",
  gap: "10px",
  paddingTop: 0,
  paddingBottom: 0,
};

export const ProductList = ({ propuctList }) => {
  return (
    <List sx={ProductListSX}>
      {propuctList.length &&
        propuctList.map((product) => {
          return <ProductItem key={product.id} product={product} />;
        })}
    </List>
  );
};
