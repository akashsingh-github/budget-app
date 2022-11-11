import { styled, Typography } from "@mui/material";

export const PageTile = styled(Typography)(({ theme }) => ({
    textAlign: "center",
    color: theme.palette.text.primary,
    marginTop: "20px",
    marginBottom: "20px"
}))