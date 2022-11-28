import { Grid, Box } from "@mui/material";
import { InputField, InputFieldDropDown } from "../components/InputFields";
import Buttons from "../components/Button";
import { useState } from "react";

export default function FilterBar({ filterHandler }) {
  const [location, setLocation] = useState("");
  const [isError, setIsError] = useState(false);
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
    "$7,000 - $8,000",
  ];
  const places = ["New York", "Lebanon", "Mississippi", "New Mexico"];

  const filterData = {
    location,
    date,
    property,
    price,
  };

  const submitHandler = (filterData) => {
    if (location.length && date.length && property.length && price.length)
      setIsError(true);
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
          sx={{
            "& .MuiTextField-root": { width: "32ch" },
            mb: 1,
          }}
        >
          <InputFieldDropDown
            error={isError}
            label={"Location"}
            value={location}
            variant={"standard"}
            onChange={(e) => setLocation(e.target.value)}
            options={places}
          />
        </Grid>
        <Grid
          item
          sx={{
            "& .MuiTextField-root": { width: "32ch" },
            mb: 1,
          }}
        >
          <InputField
            type={"date"}
            value="when"
            onChange={(e) => setDate(e.target.value)}
          />
        </Grid>
        <Grid item sx={{ mb: 1 }}>
          <InputFieldDropDown
            label={"Price"}
            value={price}
            variant={"standard"}
            onChange={(e) => setPrice(e.target.value)}
            options={priceRange}
          />
        </Grid>
        <Grid item sx={{ mb: 1 }}>
          <InputFieldDropDown
            label={"Property Type"}
            value={property}
            onChange={(e) => setProperty(e.target.value)}
            options={propertyType}
          />
        </Grid>
        <Grid item>
          <Buttons
            label={"Search"}
            color={"success"}
            variant={"contained"}
            onClick={() => submitHandler(filterData)}
          />
        </Grid>
      </Grid>
    </Box>
  );
}
