import { Button, Typography } from "@mui/material"
import { Link } from "react-router-dom"
export default function LinkBtn(props){
    const {to, title} = props;
    return <Typography  color="primary" sx={{textDecoration:"none", '&:hover':{textDecoration:"underline"}}} component={Link} to={to}>{title}</Typography>

}