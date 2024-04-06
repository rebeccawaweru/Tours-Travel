import { MenuItem, ListItemIcon, ListItemText, Divider, Typography } from "@mui/material"
import { Link, useLocation } from "react-router-dom"
export default function CustomMenuItem(props){
    const {icon, title,to} = props
    const location = useLocation()
    const customcolor = location.pathname === to ? {color:'whitesmoke', fontWeight:"bold"} : {color:"#2196f3"};
    return (
        <>
        <MenuItem component={Link} to={to} >
        <ListItemIcon fontSize={14.5} sx={customcolor}>
         {icon}
        </ListItemIcon>
        <Typography fontSize={14.5} sx={customcolor}>{title}</Typography>
      </MenuItem>
    <Divider component="li"  />
    </>
    )
}