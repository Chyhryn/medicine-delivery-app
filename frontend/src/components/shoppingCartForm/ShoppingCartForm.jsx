import { Stack, TextField, InputLabel } from "@mui/material";

export const ShoppingCartForm = ({ formik }) => {
  return (
    <Stack
      component="form"
      onSubmit={formik.handleSubmit}
      id="sopping-cart-form"
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
      <TextField
        id="name-input"
        name="name"
        type="text"
        value={formik.values.name}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.name && Boolean(formik.errors.name)}
        helperText={formik.touched.name && formik.errors.name}
      />
      <InputLabel htmlFor="email-input">Email</InputLabel>
      <TextField
        id="email-input"
        name="email"
        type="email"
        value={formik.values.email}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.email && Boolean(formik.errors.email)}
        helperText={formik.touched.email && formik.errors.email}
      />
      <InputLabel htmlFor="phone-input">Phone</InputLabel>
      <TextField
        id="phone-input"
        name="phone"
        type="tel"
        value={formik.values.phone}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.phone && Boolean(formik.errors.phone)}
        helperText={formik.touched.phone && formik.errors.phone}
      />
      <InputLabel htmlFor="address-input">Address</InputLabel>
      <TextField
        id="address-input"
        name="address"
        type="text"
        value={formik.values.address}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.address && Boolean(formik.errors.address)}
        helperText={formik.touched.address && formik.errors.address}
      />
      {/* <Button type="submit">Submit</Button> */}
    </Stack>
  );
};
