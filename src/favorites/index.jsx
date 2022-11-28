import { Link } from "react-router-dom";
import useMediaQuery from "@mui/material/useMediaQuery";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Grid,
  Typography,
  Container,
  Divider,
  Button,
} from "@mui/material";
import {
  Menu as MenuIcon,
  Favorite as FavoriteIcon,
  Home as HomeIcon,
} from "@mui/icons-material";
import WishlistData from "./WishlistData";

export default function Favorites() {
  return (
    <Box sx={{ height: "100vh" }}>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          sx={{ height: "80px", background: "rgb(101,180,65)" }}
          position="sticky"
        >
          <Toolbar>
            <Grid
              container
              justifyContent={"space-between"}
              alignItems={"center"}
              sx={{ pt: 1 }}
            >
              <Grid item>
                <IconButton
                  size="large"
                  edge="start"
                  color="inherit"
                  aria-label="menu"
                  sx={{ mr: 2 }}
                >
                  <MenuIcon fontSize="large" />
                </IconButton>
              </Grid>
              <Grid>
                <Link style={{ textDecoration: "none" }} to="/">
                  <Button
                    variant="contained"
                    color="success"
                    style={{ fontSize: "20px", height: "55px" }}
                    startIcon={<HomeIcon fontSize="large" color="inherit" />}
                  >
                    Home
                  </Button>
                </Link>
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
      </Box>
      <Container sx={{ height: "80vh", background: "white", mt: 2 }}>
        <Grid container justifyContent={"space-between"}>
          <Typography variant="h4" sx={{ p: 4 }}>
            Wishlist
          </Typography>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon color="success" fontSize="large" />
          </IconButton>
        </Grid>
        <Divider />
        <WishlistData />
      </Container>
    </Box>
  );
}
