import { Stack, Divider } from "@mui/material"
import { Link } from "react-router-dom"
export default function ListItem(props){
    return <Stack direction="column" gap={2}>
           <Link style={{textDecoration:"none",color:"whitesmoke"}} to={props.to}>{props.title}</Link>
           <Divider variant="middle" sx={{backgroundColor:"whitesmoke"}}/>
    </Stack>
}