import {Grid, Box} from '@mui/material'
import { Wrapper } from '../../layouts'
export default function Gallery(){
    return (
        <Wrapper>
        <Grid height="100vh" bgcolor="whitesmoke" container justifyContent="center" alignItems="center">
            <Box marginTop={20} component="img" src="https://res.cloudinary.com/dkjb6ziqg/image/upload/q_80/f_auto/v1715634213/gallery_qwouwf.png" alt="denzetoursandtravels">
            </Box>
        </Grid>
        </Wrapper>
    )
}