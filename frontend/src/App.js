import { Routes, Route } from "react-router-dom";
import { ShopPage } from "./pages/shopPage/ShopPage";
import { ShoppingCartPage } from "./pages/shoppingCartPage/ShoppingCartPage";
import { SharedLayout } from "./components/sharedLayout/SharedLayout";
import { ThemeProvider } from "@mui/material/styles";
import { customTheme } from "./theme/customTheme";
import CssBaseline from "@mui/material/CssBaseline";

export const App = () => {
  return (
    <ThemeProvider theme={customTheme}>
      <CssBaseline />
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<ShopPage />} />
          <Route path="shopping-cart" element={<ShoppingCartPage />} />
          <Route path="*" element={<ShopPage />} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
};
