import { Container, Box, TextField, Typography, FormControl, Stack, Grid } from "@mui/material";
import { BasicSelect } from "./inputs";
import { Search } from "@mui/icons-material";
export default function Filter(){
    return (
        <Container maxWidth>
        <Box component={Stack}  spacing={2}  direction={{xs:"column",sm:"column",md:"row"}} justifyContent="space-between" alignItems="center">
        <BasicSelect lbl="Keywords"/>
         <BasicSelect lbl="Activity"/>
         <BasicSelect lbl="Destination"/>
         <BasicSelect lbl="Duration"/>
         <FormControl fullWidth size='small'>
         <Typography fontSize="small" fontWeight="bold">Date</Typography>
         <TextField
          fullWidth
            type="date"
            size="small"
           sx={{backgroundColor:"whitesmoke", color:"black"}}
         />
         </FormControl>
           
            <Box>
           <label></label>
            <Typography backgroundColor="#2196f3" padding={1} display="flex" marginTop={2}><Search/>Search</Typography>

            </Box>
      

    
        </Box>
        </Container>
    )
}