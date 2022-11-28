import {
  Grid,
  Box,
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
} from "@mui/material";
import { Link } from "react-router-dom";
import {
  Favorite as FavoriteIcon,
  Menu as MenuIcon,
} from "@mui/icons-material";
import FilterBar from "./FilterBar";
import { InputFieldDropDown } from "../components/InputFields";
import PropertyInfo from "./PropertyInfo";
import Buttons from "../components/Button";
import { useContext, useState, useEffect } from "react";
import { useStore } from "../Context";
import data from "../data.json";
import useMediaQuery from "@mui/material/useMediaQuery";
import Sidebar from "../components/Sidebar";

export default function Home() {
  const isDesktopView = useMediaQuery("(min-width:600px)");
  const [openSidebar, setOpenSidebar] = useState(false);
  const { store, setPropertyList, setFavData } = useStore();
  const find = ["Land", "Flat", "Buildings", "Rent"];

  useEffect(() => {
    setPropertyList(data);
  }, []);

  const toggleDrawer = (open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setOpenSidebar(open);
  };

  const filterHandler = (details) => {
    const priceRange = details.price.replace(/[,$-]/g, "").split("  ");
    const minPrice = Number(priceRange[0]);
    const maxPrice = Number(priceRange[1]);
    let search = store.propertyList?.filter(
      (info) =>
        info.place === details.location &&
        info.price >= minPrice &&
        info.price < maxPrice &&
        info.type === details.property &&
        info.available <= details.date
    );

    setPropertyList(search);
  };

  const addfavoriteHandler = (data) => {
    setFavData(data);
  };

  return (
    <Box>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          position="sticky"
          sx={{ height: "80px", background: "rgb(141,201,54)" }}
        >
          <Toolbar>
            <Grid
              container
              style={{
                justifyContent: "space-between",
              }}
            >
              {isDesktopView ? (
                <Grid item sm={8} md={10} style={{ padding: "15px 0" }}>
                  <Buttons label={"Rent"} color={"inherit"} />
                  <Buttons label={"Buy"} color={"inherit"} />
                  <Buttons label={"Sell"} color={"inherit"} />
                  <Buttons label={"Manage Property"} color={"inherit"} />
                  <Buttons label={"Resources"} color={"inherit"} />
                </Grid>
              ) : (
                <>
                  <IconButton
                    size="small"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    onClick={toggleDrawer(true)}
                  >
                    <MenuIcon />
                  </IconButton>
                  <Sidebar
                    toggleDrawer={toggleDrawer}
                    openSidebar={openSidebar}
                  />
                </>
              )}
              <Grid item sm={4} md={2} style={{ padding: "25px 0" }}>
                <Buttons
                  label={"Login"}
                  color={"inherit"}
                  variant={"outlined"}
                />
                <Buttons
                  label={"Sign Up"}
                  color={"success"}
                  variant={"contained"}
                />
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
      </Box>

      <Box style={{ padding: isDesktopView && "50px 170px" }}>
        <Grid
          container
          sx={{
            justifyContent: "space-around",
          }}
        >
          <Grid item>
            <Typography
              variant={isDesktopView ? "h3" : "h4"}
              sx={{ mt: !isDesktopView && 2 }}
              fontWeight={"bold"}
            >
              Rent a property
            </Typography>
          </Grid>
          <Grid
            item
            sx={{ marginLeft: isDesktopView && "41%", mt: !isDesktopView && 3 }}
          >
            <InputFieldDropDown
              label={"Search with Search bar"}
              type={"text"}
              options={find}
            />
          </Grid>
          <Grid item sx={{ ml: isDesktopView && 2, mt: !isDesktopView && 1 }}>
            <Link style={{ textDecoration: "none" }} to="/favorites">
              <Button
                variant="contained"
                color="success"
                style={{ fontSize: "20px", height: "55px" }}
                startIcon={<FavoriteIcon fontSize="large" color="inherit" />}
              >
                Favorites
              </Button>
            </Link>
          </Grid>
        </Grid>
        <FilterBar filterHandler={filterHandler} />
        <PropertyInfo
          addfavoriteHandler={addfavoriteHandler}
          propertyList={store.propertyList}
        />
      </Box>
    </Box>
  );
}
