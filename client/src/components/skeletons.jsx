import { Box, Skeleton } from "@mui/material"
export default function Skeletons(){
    return <Box> 
    <Skeleton  variant="rectangular" width={300} height={250}  />
    <Skeleton  width={300} variant="text" sx={{ fontSize: '1rem' }} />
    <Skeleton  width={120} variant="text" sx={{ fontSize: '1rem' }} />
    </Box>
}