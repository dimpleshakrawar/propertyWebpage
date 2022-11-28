import { useState } from "react";
import {
  Box,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  TextField,
} from "@mui/material";

export function InputField({ label, type, onChange, error }) {
  return (
    <TextField
      id="outlined-basic"
      error={error}
      label={label}
      variant="outlined"
      type={type}
      onChange={onChange}
    />
  );
}

export function InputFieldDropDown({
  label,
  value,
  onChange,
  options,
  error,
  required,
}) {
  return (
    <Box sx={{ minWidth: 280 }}>
      <FormControl fullWidth>
        <InputLabel required id="demo-simple-select-label">
          {label}
        </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={value}
          label={label}
          error={error}
          onChange={onChange}
        >
          {options?.map((items) => (
            <MenuItem key={items} value={items}>
              {items}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}
