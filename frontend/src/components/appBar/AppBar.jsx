import * as React from "react";
import {
  AppBar,
  Box,
  Menu,
  MenuItem,
  List,
  ListItem,
  IconButton,
  Toolbar,
  Button,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { NavLink } from "react-router-dom";
import { pages } from "../../constants/pages";

export const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static">
      <Toolbar
        disableGutters
        maxWidth="xl"
        sx={{ paddingLeft: "24px", paddingRight: "24px" }}
      >
        <Box
          sx={{
            flexGrow: 1,
            display: { xs: "flex", md: "none" },
          }}
        >
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleOpenNavMenu}
            color="inherit"
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorElNav}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            sx={{
              display: {
                xs: "block",
                md: "none",
              },
            }}
          >
            {pages.map((page) => (
              <MenuItem key={page.anchor}>
                <Box
                  component={NavLink}
                  to={page.url}
                  onClick={() => handleCloseNavMenu()}
                  sx={{ color: "inherit", display: "block" }}
                >
                  {page.anchor}
                </Box>
              </MenuItem>
            ))}
          </Menu>
        </Box>
        <List
          sx={{
            flexGrow: 1,
            display: { xs: "none", md: "flex" },
            justifyContent: "space-between",
            gap: "20px",
            padding: 0,
          }}
        >
          {pages.map((page) => (
            <ListItem
              key={page.anchor}
              sx={{
                width: "auto",
                padding: 0,
              }}
            >
              <Button
                component={NavLink}
                to={page.url}
                onClick={() => handleCloseNavMenu()}
                sx={{
                  py: 0.5,
                  color: "primary.contrastText",
                  borderColor: "secondary.main",
                  "&:hover": {
                    color: "secondary.main",
                  },
                }}
              >
                {page.anchor}
              </Button>
            </ListItem>
          ))}
        </List>
      </Toolbar>
    </AppBar>
  );
};
