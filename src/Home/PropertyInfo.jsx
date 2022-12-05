import { useState } from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Grid,
  IconButton,
  Divider,
  Box,
} from "@mui/material";
import {
  Favorite as FavoriteIcon,
  Bed as BedIcon,
  Bathtub as BathtubIcon,
  SentimentVeryDissatisfied as SentimentVeryDissatisfiedIcon,
} from "@mui/icons-material";

export default function PropertyInfo({ addfavoriteHandler, propertyList }) {
  const wishListing = (id) => {
    propertyList?.map((ele) => {
      if (ele.id === id) {
        addfavoriteHandler(ele);
        ele.isFavorite = true;
        return ele;
      }
    });
  };

  return (
    <Grid container flexDirection="row">
      {propertyList?.map((info) => (
        <Grid item md={4} key={info.id} xs={12} flexDirection="row">
          <Card
            key={info.id}
            sx={{ maxWidth: 400, minWidth: 400, display: "inline-block", m: 2 }}
          >
            <CardMedia
              component="img"
              height="250"
              image={info.image}
              alt="green iguana"
            />
            <CardContent>
              <Grid container justifyContent={"space-between"}>
                <Grid item>
                  <Typography gutterBottom variant="h5" component="div">
                    ${info.price.toLocaleString("en-US")}
                  </Typography>
                </Grid>
                <Grid item>
                  <IconButton
                    onClick={() => wishListing(info.id)}
                    aria-label="add to favorites"
                  >
                    <FavoriteIcon
                      color={info.isFavorite ? "error" : "action"}
                    />
                  </IconButton>
                </Grid>
              </Grid>
              <Typography variant="h4" color="text.secondary">
                {info.title}
              </Typography>
              <Typography variant="h7" color="text.secondary">
                {info.address}
              </Typography>
              <Divider />
              <Grid container justifyContent={"space-between"} sx={{ mt: 2 }}>
                <Grid item>
                  <BedIcon
                    style={{ textAlign: "center", verticalAlign: "middle" }}
                    fontSize="medium"
                  />
                  <Typography
                    variant="h7"
                    style={{ textAlign: "center", verticalAlign: "middle" }}
                  >
                    {info.description.bedroom} Bedroom
                  </Typography>
                </Grid>
                <Grid item>
                  <BathtubIcon
                    style={{ textAlign: "center", verticalAlign: "middle" }}
                  />
                  <Typography
                    style={{ textAlign: "center", verticalAlign: "middle" }}
                    variant="h7"
                  >
                    {info.description.toilet} Bathrooms
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography
                    style={{ textAlign: "center", verticalAlign: "middle" }}
                    variant="h7"
                  >
                    {info.description.area}
                  </Typography>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}
