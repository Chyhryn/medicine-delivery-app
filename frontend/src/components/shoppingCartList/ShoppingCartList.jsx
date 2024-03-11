import { Stack } from "@mui/material";
import { ShoppingCartItem } from "./shoppingCartItem/ShoppingCartItem";
import { useSelector } from "react-redux";
import { getOrderData } from "../../redux/selectors";

export const ShoppingCartList = () => {
  // const [cartProducts, setCartProducts] = useState(products.slice(0, 5));
  const shoppingCartData = useSelector(getOrderData);
  // const onDeleteHandler = (id) => {
  //   const updatedCartProducts = cartProducts.filter(
  //     (product) => product.id !== id
  //   );
  //   setCartProducts(updatedCartProducts);
  // };

  return (
    <Stack
      component="ul"
      sx={{
        flex: 1,
        height: { xs: "auto", md: "75vh" },
        overflow: { xs: "none", md: "scroll" },
        border: 1,
        borderRadius: 2,
        borderColor: "primary.dark",
      }}
    >
      {shoppingCartData.map((product) => {
        return <ShoppingCartItem key={product.id} product={product} />;
      })}
    </Stack>
  );
};
