import { useContext } from "react";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
  Grid,
  Divider,
} from "@mui/material";
import {
  Delete as DeleteIcon,
  SentimentVeryDissatisfied as SentimentVeryDissatisfiedIcon,
  Bed as BedIcon,
  Bathtub as BathtubIcon,
} from "@mui/icons-material";
import { StoreContext } from "../Context";
import useMediaQuery from "@mui/material/useMediaQuery";

export default function WishlistData() {
  const isDesktopView = useMediaQuery("(min-width:600px)");
  const { store, setFavData, setDeletedData } = useContext(StoreContext);
  const data = store.favData;
  const deleteHandler = (id) => {
    const updatedData = store?.favData?.filter((data) => data.id !== id);
    setDeletedData(...updatedData);
  };
  return (
    <>
      {!data.length && (
        <Box>
          <SentimentVeryDissatisfiedIcon
            color="disabled"
            style={{
              fontSize: isDesktopView ? "300px" : "120px",
              position: "absolute",
              bottom: isDesktopView ? "25%" : "30%",
              right: isDesktopView ? "42%" : "35%",
            }}
          />
        </Box>
      )}
      {data?.map((ele) => (
        <Grid container key={ele.id}>
          <Card
            sx={{
              display: "flex",
              height: isDesktopView ? "180px" : "120px",
              mt: 3,
              mb: 1,
              background: "rgb(210,242,145)",
            }}
          >
            <CardMedia
              component="img"
              xs={4}
              sx={{ width: isDesktopView ? 192 : 120 }}
              image={ele.image}
              alt="Live from space album cover"
            />
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Grid container justifyContent={"space-between"}>
                <Grid item sx={{ marginRight: "500px", width: 400 }}>
                  <CardContent sx={{ flex: "1 0 auto" }}>
                    <Typography gutterBottom variant="h5" component="div">
                      ${ele.price.toLocaleString("en-US")}
                    </Typography>

                    <Typography variant="h4" color="text.secondary">
                      {ele.title}
                    </Typography>
                    <Typography variant="h7" color="text.secondary">
                      {ele.address}
                    </Typography>
                    <Divider />
                  </CardContent>
                  <Grid
                    container
                    justifyContent={"space-between"}
                    sx={{ mt: 2 }}
                  >
                    <Grid item>
                      <BedIcon
                        style={{ textAlign: "center", verticalAlign: "middle" }}
                        fontSize="medium"
                      />
                      <Typography
                        variant="h7"
                        style={{ textAlign: "center", verticalAlign: "middle" }}
                      >
                        {ele.description.bedroom} Bedroom
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
                        {ele.description.toilet} Bathroon
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Typography
                        style={{ textAlign: "center", verticalAlign: "middle" }}
                        variant="h7"
                      >
                        {ele.description.area} Sq.ft
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item>
                  <Box
                    sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}
                  >
                    <IconButton
                      onClick={() => deleteHandler(ele.id)}
                      aria-label="delete"
                      sx={{ mt: 6 }}
                    >
                      <DeleteIcon fontSize="large" />
                    </IconButton>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Card>
        </Grid>
      ))}
    </>
  );
}
