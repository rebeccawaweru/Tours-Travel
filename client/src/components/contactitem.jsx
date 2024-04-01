import { Paper,Icon,Typography } from "@mui/material"
export default function ContactItem(props){
    const {icon} = props;
    return (
        <Paper sx={{padding:5}}>
        <Icon>{icon}</Icon>
        <Typography variant="h5">Phone</Typography>
        <Typography color="inherit">A wonderful serenity has taken possession of my entire soul, like these.</Typography>
        <Typography variant="h6">+254 </Typography>
      </Paper>
    )
}