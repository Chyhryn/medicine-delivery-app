import {
  Box,
  Stack,
  TextField,
  ListItem,
  Button,
  Paper,
  Typography,
} from "@mui/material";
import { useState } from "react";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

const ProductImgWrapperSX = {
  display: "flex",
  justifyContent: "center",
  height: 300,
};

const ProductImgSX = { width: "100%", height: "auto", objectFit: "contain" };

export const ShoppingCartItem = ({ product, onDeleteHandler }) => {
  const [quantity, setQuantity] = useState(1);

  const onChangeQuantityHandler = (event) => {
    const newValue = event.currentTarget.value;
    if (newValue <= 0) {
      onDeleteHandler(product.id);
    } else {
      setQuantity(newValue);
    }
  };

  return (
    <ListItem key={product.id}>
      <Paper
        elevation={3}
        sx={{
          position: "relative",
          p: "20px",
          width: "100%",
          display: "flex",
          gap: "10px",
        }}
      >
        <Box sx={ProductImgWrapperSX}>
          <img src={product.image} alt={product.name} style={ProductImgSX} />
        </Box>
        <Stack
          sx={{
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography sx={{ fontSize: "18px", mb: "10px" }}>
            {product.name}
          </Typography>
          <Typography variant="body1" sx={{ mb: "30px" }}>
            {"Price: "}
            <Typography component="span" sx={{ fontWeight: 600 }}>
              ${product.price}
            </Typography>
          </Typography>

          <TextField
            type="number"
            label="Change quantity"
            InputLabelProps={{
              shrink: true,
            }}
            value={quantity}
            onChange={onChangeQuantityHandler}
          />
        </Stack>
        <Button
          sx={{
            position: "absolute",
            top: "10px",
            right: "10px",
            minWidth: "20px",
          }}
          onClick={() => onDeleteHandler(product.id)}
        >
          <DeleteForeverIcon />
        </Button>
      </Paper>
    </ListItem>
  );
};
