import Wrapper from "../../layouts/Wrapper"
import { Container, Box } from "@mui/material"
import { Slider } from "../../components"
import { content } from "../../utils/helpers"
export default function LandingPage(){
    return (
        <Wrapper>
        <Slider images={content}/>
        <Container>
            <Box sx={{height:"100vh"}}>

            </Box>
        </Container>
        </Wrapper>
    )
}