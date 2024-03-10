import { Stack, TextField, InputLabel } from "@mui/material";

export const ShoppingCartForm = () => {
  return (
    <Stack
      component="form"
      type="submit"
      sx={{
        flex: 1,
        border: 1,
        borderColor: "primary.dark",
        borderRadius: 2,
        p: "20px",
        gap: "20px",
      }}
    >
      <InputLabel htmlFor="name-input">Name</InputLabel>
      <TextField id="name-input" type="text" />
      <InputLabel htmlFor="email-input">Email</InputLabel>
      <TextField id="email-input" type="email" />
      <InputLabel htmlFor="phone-input">Phone</InputLabel>
      <TextField id="phone-input" type="tel" />
      <InputLabel htmlFor="address-input">Address</InputLabel>
      <TextField id="address-input" type="text" />
    </Stack>
  );
};
