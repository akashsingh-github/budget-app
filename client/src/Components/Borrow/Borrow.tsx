import React from "react";
import {
  Box,
  Button,
  FormControlLabel,
  Grid,
  MenuItem,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { PageTile } from "../StyledComponent";

function Borrow() {
  const [amount, setAmount] = React.useState<number | null>(null);
  const [estimatedDate, setEstimatedDate] = React.useState(new Date());
  const [borrowedFrom, setBorrowedFrom] = React.useState('')

  const handleAmountChange = (value: number) => {
    setAmount(value);
  };
  const handleBorrowedFromChange = (text: string) => {
    setBorrowedFrom(text)
  }
  const handleDateChange = (date: Date) => {
    setEstimatedDate(date)
  }
  return (
    <Box>
      <Box>
        <PageTile variant="h4">Add new Borrowed money</PageTile>
      </Box>

      <Box
        className="flex-center"
        sx={{ overflow: "hidden", pt: 4, ml: 2, mr: 2 }}
      >
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <TextField
              type="number"
              fullWidth
              placeholder="amount"
              variant="outlined"
              label="amount"
              required
              value={amount}
              onChange={(e) => handleAmountChange(parseInt(e.target.value))}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              type="text"
              fullWidth
              placeholder="borrowed from"
              variant="outlined"
              label="borrowed from"
              required
              value={borrowedFrom}
              onChange={(e) => handleBorrowedFromChange(e.target.value)}
            />
          </Grid>
          <Grid item xs={6}>
            <DatePicker
              selected={estimatedDate}
              onChange={(date: Date) => handleDateChange(date)}
            />
          </Grid>
          <Box className="flex-center" sx={{ width: "100%", mt: 2 }}>
            <Button
              variant="contained"
              color="primary"
              sx={{ width: "200px", height: "50px", borderRadius: 10 }}
            >
              Add
            </Button>
          </Box>
        </Grid>
      </Box>
    </Box>
  );
}
export default Borrow;
