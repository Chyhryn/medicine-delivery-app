import { Box, Stack, Button, Typography } from "@mui/material";
import { ShoppingCartForm } from "../../components/shoppingCartForm/ShoppingCartForm";
import { ShoppingCartList } from "../../components/shoppingCartList/ShoppingCartList";
import { useSelector } from "react-redux";
import { getOrderData } from "../../redux/selectors";
import { useFormik } from "formik";
import * as yup from "yup";

const phoneRegExp =
  /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/;

const validationSchema = yup.object({
  name: yup.string().required("Name is required"),
  email: yup
    .string("Enter your email")
    .email("Enter a valid email")
    .required("Email is required"),
  phone: yup
    .string()
    .matches(phoneRegExp, "Phone number is not valid")
    .required("Phone is required"),
  address: yup.string().required("Address is required"),
});

// const appState = {
//   order: [{ product: {}, quantity: 1 }],
//   custumer: { name: "", email: "", phone: "", address: "", order: [{}] },

//   shops: [
//     { id: "", name: "", products: [{ id: "", name: "", price: "", shop: "" }] },
//   ],
//   products: [{ id: "", name: "", price: "", shop: "" }],
// };

export const ShoppingCartPage = () => {
  const shoppingCartData = useSelector(getOrderData);

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      address: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values, actions) => {
      alert(
        JSON.stringify({ order: shoppingCartData, customer: values }, null, 2)
      );
      actions.resetForm();
    },
  });

  let totalPrice = 0;
  shoppingCartData.forEach((product) => {
    totalPrice += product.price * product.quantity;
  });

  return (
    <Box sx={{ py: "30px" }}>
      <Typography variant="h1" sx={{ fontSize: "26px", fontWeight: 600 }}>
        Complete your order
      </Typography>
      <Stack flexDirection="row" sx={{ gap: "20px", py: "20px" }}>
        <ShoppingCartForm formik={formik} />
        <ShoppingCartList />
      </Stack>
      <Stack flexDirection="row" justifyContent="flex-end" alignItems="center">
        <Typography sx={{ mr: "40px", fontSize: "24px", fontWeight: 600 }}>
          {"Total price: $"}
          {totalPrice.toFixed(2)}
        </Typography>
        <Button
          type="submit"
          htmlFor="sopping-cart-form"
          variant="contained"
          sx={{ width: "200px", fontSize: "20px" }}
          onClick={formik.handleSubmit}
        >
          Submit
        </Button>
      </Stack>
    </Box>
  );
};
