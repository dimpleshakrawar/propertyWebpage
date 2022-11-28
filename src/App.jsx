import { Box } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import Favorites from "./favorites";
import Home from "./Home";

function App() {
  return (
    <Box style={{ height: "100%" }}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </Box>
  );
}

export default App;
