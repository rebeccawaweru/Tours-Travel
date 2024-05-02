import { Typography } from "@mui/material"
import { Link,useLocation } from "react-router-dom"
export default function LinkItem(props){
    const location = useLocation()
    const {page, to} = props
    return (
        <Typography fontWeight={location.pathname === to ? "bold" : null} component={Link} to={to} sx={{'&:hover':{scale:"110%", color:"#2196f3"}, color:location.pathname === to ? "#2196f3" :"whitesmoke", textDecoration:"none"}}>
               {page}
               {location.pathname === to ? <hr></hr> : null}
       </Typography>
    )
}