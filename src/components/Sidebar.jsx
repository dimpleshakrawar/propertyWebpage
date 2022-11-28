import { useState } from "react";
import {
  Box,
  Divider,
  IconButton,
  Fab,
  SwipeableDrawer,
  List,
  ListItem,
  ListItemText,
  ListItemButton,
} from "@mui/material";
import FolderIcon from "@mui/icons-material/Folder";
import { KeyboardBackspace as KeyboardBackspaceIcon } from "@mui/icons-material";

export default function Sidebar({ openSidebar, toggleDrawer }) {
  const [modal, setModal] = useState(false);
  const listing = ["Rent", "Buy", "Sell", "Manage Property", "Resources"];
  const list = () => (
    <Box
      sx={{ width: 250, height: "100vh" }}
      role="presentation"
      onKeyDown={toggleDrawer(false)}
    >
      <List sx={{ background: "rgb(141,201,54)" }}>
        <ListItem disablePadding style={{ gap: "20px" }}>
          <IconButton onClick={toggleDrawer(false)}>
            <KeyboardBackspaceIcon />
          </IconButton>
          <ListItemText
            primaryTypographyProps={{ fontSize: 22, p: 0, color: "white" }}
            primary="Folder"
          />
        </ListItem>
      </List>
    </Box>
  );

  return (
    <div>
      <>
        <SwipeableDrawer
          anchor="left"
          open={openSidebar}
          onClose={toggleDrawer(false)}
          onOpen={toggleDrawer(true)}
        >
          {list()}
          <List>
            {listing.map((text) => (
              <ListItem key={text} disablePadding>
                <ListItemButton
                  sx={{
                    marginTop: "3px",
                    background: "RGB(195 225 129)",
                    color: "RGB(23 62 25)",
                  }}
                >
                  <ListItemText
                    primaryTypographyProps={{ fontSize: 17 }}
                    primary={text}
                  />
                </ListItemButton>
                <Divider />
              </ListItem>
            ))}
          </List>
        </SwipeableDrawer>
      </>
    </div>
  );
}
