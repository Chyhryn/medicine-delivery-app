import { Outlet } from "react-router-dom";
import { Container, Box } from "@mui/material";
import { ResponsiveAppBar } from "../appBar/AppBar";

export const SharedLayout = () => {
  return (
    <Box height="100vh">
      <ResponsiveAppBar />
      <Container
        component="main"
        maxWidth="xl"
        sx={{ background: "#fff", maxHeight: "85%" }}
      >
        <Outlet />
      </Container>
    </Box>
  );
};
