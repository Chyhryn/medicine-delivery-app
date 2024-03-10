import { useEffect, useState } from "react";
import { FormGroup, FormControlLabel, Checkbox } from "@mui/material";
import { shops } from "../../constants/shops";
import { products } from "../../constants/products";

export const FilterList = ({ setProductList }) => {
  const [checkedShops, setCheckedShops] = useState([]);
  const onChangeHandler = (event) => {
    const shopData = event.target;
    if (shopData.checked) {
      setCheckedShops([...checkedShops, shopData.name]);
    } else if (!shopData.checked) {
      const filteredCheckedShops = checkedShops.filter(
        (shop) => shop !== shopData.name
      );
      setCheckedShops(filteredCheckedShops);
    }
  };

  useEffect(() => {
    if (checkedShops.length) {
      let filteredProductList = [];
      shops.forEach((shop) => {
        checkedShops.find((checkedShop) => checkedShop === shop.name) &&
          filteredProductList.push(...shop.products);
      });
      setProductList(filteredProductList);
    } else {
      setProductList(products);
    }
  }, [checkedShops, setProductList]);
  return (
    <FormGroup
      sx={{
        flex: 1,
        border: 1,
        borderColor: "primary.main",
        borderRadius: 2,
        pr: "10px",
      }}
    >
      {shops.map((shop) => {
        return (
          <>
            <FormControlLabel
              key={shop.name}
              control={<Checkbox />}
              label={shop.name}
              name={shop.name}
              labelPlacement="start"
              onChange={onChangeHandler}
              sx={{ display: "flex", justifyContent: "space-between" }}
            />
          </>
        );
      })}
    </FormGroup>
  );
};
