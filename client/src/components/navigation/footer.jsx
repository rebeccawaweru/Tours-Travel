import { Paper, Typography } from "@mui/material";

export default function Footer(){
    return (
    <Paper sx={{top:'auto', bottom:0, backgroundColor:"black", textAlign:"center", paddingY:2}}>
    <Typography fontSize={12} sx={{letterSpacing:1}}>Copyright &copy; 2024 Denze Tours and Travels. All Rights Reseved</Typography>
    </Paper>
    )
}