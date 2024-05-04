import { Grid, Typography, Box } from "@mui/material";
export default function Currency(onClick, name, currency ){
    return <Box  onClick={onClick} component={Grid} item xs={12} md={3} marginBottom={4} color="text.secondary">
    <Typography fontSize="small" color="black">{name} </Typography>
    <Typography>{currency}</Typography>
  </Box>
}