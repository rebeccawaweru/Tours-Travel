import { Box, Skeleton } from "@mui/material"
export default function Skeletons(){
    return <Box> 
    <Skeleton animation="wave" variant="rectangular" width={300} height={250}  />
    <Skeleton animation="wave" width={250} variant="text" sx={{ fontSize: '1rem' }} />
    <Skeleton animation="wave" width={120} variant="text" sx={{ fontSize: '1rem' }} />
    </Box>
}