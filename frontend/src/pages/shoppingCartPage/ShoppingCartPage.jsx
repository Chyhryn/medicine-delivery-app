import { Box, Stack, Button, Typography } from "@mui/material";
import { ShoppingCartForm } from "../../components/shoppingCartForm/ShoppingCartForm";
import { ShoppingCartList } from "../../components/shoppingCartList/ShoppingCartList";

export const ShoppingCartPage = () => {
  return (
    <Box sx={{ py: "30px" }}>
      <Typography variant="h1" sx={{ fontSize: "26px", fontWeight: 600 }}>
        Complete your order
      </Typography>
      <Stack flexDirection="row" sx={{ gap: "20px", py: "20px" }}>
        <ShoppingCartForm />
        <ShoppingCartList />
      </Stack>
      <Stack flexDirection="row" justifyContent="flex-end" alignItems="center">
        <Typography sx={{ mr: "40px", fontSize: "24px", fontWeight: 600 }}>
          Total price: $999
        </Typography>
        <Button
          type="submit"
          variant="contained"
          sx={{ width: "200px", fontSize: "20px" }}
        >
          Submit
        </Button>
      </Stack>
    </Box>
  );
};
