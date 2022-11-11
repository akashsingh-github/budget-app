import React from "react";
import {
  Box,
  Grid,
  MenuItem,
  TextField,
  RadioGroup,
  FormControlLabel,
  Radio,
  Button,
} from "@mui/material";
import { PageTile } from "../StyledComponent";

function NewExpense() {
  const [selectedCategory, setSelectedCategory] = React.useState("item1");
  const [description, setDescription] = React.useState<string | null>(null);
  const [amount, setAmount] = React.useState<number | null>(null);
  const [event, setEvent] = React.useState<string | null>(null);
  const [mode, setMode] = React.useState<string>("online");

  const categories = ["item1", "item 2"];

  const handleCategoryChange = (text: string) => {
    setSelectedCategory(text);
  };

  const handleAmountChange = (value: number) => {
    setAmount(value);
  };

  const handleEventChange = (text: string) => {
    setEvent(text);
  };

  const handleModeChange = (text: string) => {
    setMode(text);
  };

  const handleDescriptionChange = (text: string) => {
    setDescription(text)
  }

  return (
    <Box>
      <Box>
        <PageTile variant="h4">Add new expense</PageTile>
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
              select
              variant="outlined"
              label="category"
              required
              value={selectedCategory}
              fullWidth
              onChange={(e) => handleCategoryChange(e.target.value)}
            >
              {categories.map((option) => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              label="Event"
              placeholder="Event"
              fullWidth
              value={event}
              onChange={(e) => handleEventChange(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
              onChange={(e) => handleModeChange(e.target.value)}
              value={mode}
            >
              <FormControlLabel
                value="Online"
                control={<Radio />}
                label="Online"
                checked
              />
              <FormControlLabel value="Cash" control={<Radio />} label="Cash" />
            </RadioGroup>
          </Grid>
          <Grid item xs={12}>
            <TextField
            label="description"
              multiline
              rows={3}
              fullWidth
              value={description}
              onChange={e => handleDescriptionChange(e.target.value)}
            />
          </Grid>
          <Box className="flex-center" sx={{ width: "100%", mt: 2 }}>
            <Button variant="contained" color="primary" sx={{ width: "200px", height: "50px", borderRadius: 10 }}>Add</Button>
          </Box>
        </Grid>
      </Box>
    </Box>
  );
}
export default NewExpense;
