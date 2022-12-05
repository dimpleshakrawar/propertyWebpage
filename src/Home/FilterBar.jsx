import { Grid, Box } from "@mui/material";
import { InputField, InputFieldDropDown } from "../components/InputFields";
import Buttons from "../components/Button";
import { useState } from "react";
import useMediaQuery from "@mui/material/useMediaQuery";

export default function FilterBar({ filterHandler }) {
  const isDesktopView = useMediaQuery("(min-width:600px)");
  const [location, setLocation] = useState("");
  const [property, setProperty] = useState("");
  const [price, setPrice] = useState("");
  const [date, setDate] = useState("");

  const propertyType = ["House", "Bungalow", "Villa"];
  const priceRange = [
    "$2,000 - $3,000",
    "$3,000 - $4,000",
    "$4,000 - $5,000",
    "$5,000 - $6,000",
    "$6,000 - $7,000",
  ];
  const places = ["New York", "Lebanon", "Mississippi", "Nebraska"];

  const filterData = {
    location,
    date,
    property,
    price,
  };

  const submitHandler = () => {
    filterHandler(filterData);
  };
  return (
    <Box
      sx={{
        background: "white",
        margin: "70px 20px",
        padding: "20px 0",
      }}
    >
      <Grid
        container
        alignItems={"center"}
        textAlign={"center"}
        justifyContent={"space-evenly"}
      >
        <Grid
          item
          md={2}
          sm={3}
          sx={{
            "& .MuiTextField-root": { width: "25ch" },
            mb: 1,
          }}
        >
          <InputFieldDropDown
            label={"Location"}
            value={location}
            variant={"standard"}
            onChange={(e) => setLocation(e.target.value)}
            options={places}
          />
        </Grid>
        <Grid
          item
          md={2}
          sm={3}
          sx={{
            "& .MuiTextField-root": { width: "32ch" },
            mb: 1,
          }}
        >
          <InputField
            type={"date"}
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </Grid>
        <Grid
          item
          sx={{
            "& .MuiTextField-root": { width: "25ch" },
            mb: 1,
          }}
          md={2}
          sm={3}
        >
          <InputFieldDropDown
            label={"Price"}
            value={price}
            variant={"standard"}
            onChange={(e) => setPrice(e.target.value)}
            options={priceRange}
          />
        </Grid>
        <Grid
          item
          sx={{
            "& .MuiTextField-root": { width: "25ch" },
            mb: 1,
          }}
          md={2}
          sm={3}
        >
          <InputFieldDropDown
            label={"Property Type"}
            value={property}
            onChange={(e) => setProperty(e.target.value)}
            options={propertyType}
          />
        </Grid>
        <Grid item md={1} sm={12}>
          <Buttons
            label={"Search"}
            color={"success"}
            variant={"contained"}
            onClick={submitHandler}
          />
        </Grid>
      </Grid>
    </Box>
  );
}
