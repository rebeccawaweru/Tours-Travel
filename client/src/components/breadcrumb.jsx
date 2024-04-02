import { Paper, Stack, Typography } from "@mui/material"
import { Home } from "@mui/icons-material"
export default function BreadCrumb(props){
    const {cap1, cap2} = props
    return (
        <Paper sx={{marginY:2,padding:2,backgroundColor:"whitesmoke"}}>
        <Stack direction="row" spacing={1}>
          <Home color="primary" />
          <Typography variant="body1" color="primary" fontSize={14.5}>Dashboard / {cap1} /  {cap2}</Typography>
        </Stack>
      </Paper>
    )
}