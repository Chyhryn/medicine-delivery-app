import { Box, ListItem, Typography, Paper, Button } from "@mui/material";

const ProductItemSX = {
  width: {
    xs: "100%",
    md: "calc(33.33% - 10px)",
  },
  paddingTop: 0,
  paddingBottom: 0,
  paddingLeft: 0,
  paddingRight: 0,
};

const ProductImgWrapperSX = {
  display: "flex",
  justifyContent: "center",
  height: 300,
};

const ProductImgSX = { width: "100%", height: "auto", objectFit: "contain" };

export const ProductItem = ({ product }) => {
  const onClickHandler = (id) => {
    console.log(id);
  };

  return (
    <ListItem sx={ProductItemSX}>
      <Paper
        elevation={3}
        sx={{
          p: "20px",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          gap: "10px",
        }}
      >
        <Box sx={ProductImgWrapperSX}>
          <img src={product.image} alt={product.name} style={ProductImgSX} />
        </Box>
        <Typography sx={{ fontSize: "18px" }}>{product.name}</Typography>
        <Typography variant="body2" sx={{ color: "primary.light" }}>
          Shop: {product.shop}
        </Typography>
        <Typography variant="body1">
          {"Price: "}
          <Typography component="span" sx={{ fontWeight: 600 }}>
            ${product.price}
          </Typography>
        </Typography>
        <Button
          variant="contained"
          sx={{ width: "100%" }}
          onClick={() => onClickHandler(product.id)}
        >
          Add to cart
        </Button>
      </Paper>
    </ListItem>
  );
};
