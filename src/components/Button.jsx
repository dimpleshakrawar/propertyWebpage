import { Button } from "@mui/material";

export default function Buttons({ label, variant, color, onClick }) {
  return (
    <Button
      style={{ fontSize: "larger", margin: "0 5px" }}
      variant={variant}
      color={color}
      onClick={onClick}
    >
      {label}
    </Button>
  );
}
