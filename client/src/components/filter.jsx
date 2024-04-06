import { Container, Box, TextField, Typography, Button, FormControl, Stack, MenuItem, Grid } from "@mui/material";
import { BasicSelect, BasicInput} from "./inputs";
import { BubbleChartTwoTone, Search } from "@mui/icons-material";
export default function Filter({handleChange, handleSearch}){
    return (
        <Container maxWidth>
        <Box component={Stack}  spacing={2}  direction={{xs:"column",sm:"column",md:"row"}} justifyContent="space-between" alignItems="center">
        {/* <BasicSelect lbl="Keywords"/> */}
        <BasicInput name="keyword" start={Search} lbl="Keyword" onChange={handleChange}/>
         <BasicSelect name="activity" lbl="Activity" onChange={handleChange}>
            <MenuItem value="Swimming">Swimming</MenuItem>
            <MenuItem value="Sightseeing">Sightseeing</MenuItem>
            <MenuItem value="Hiking">Hiking</MenuItem>
            <MenuItem value="Ski">Ski</MenuItem>
            <MenuItem value="Paragliding">Paragliding</MenuItem>
            <MenuItem value="Parachuting">Parachuting</MenuItem>
            <MenuItem value="Kayaking">Kayaking</MenuItem>
            <MenuItem value="Baloon Safaris">Baloon Safaris</MenuItem>
            <MenuItem value="Game Drive">Game Drive</MenuItem>
         </BasicSelect>
         <BasicSelect lbl="Destination" name="category" onChange={handleChange}>
                <MenuItem value="Local Travels">Local Travels</MenuItem>
                <MenuItem value="East Africa">East Africa</MenuItem>
                <MenuItem value="Hot Pick">Hot Pick</MenuItem>
                <MenuItem value="International Holiday">International Holiday</MenuItem>
        </BasicSelect>

         <BasicSelect name="duration" lbl="Duration" onChange={handleChange}>
            <MenuItem value="1 day">1 Day Tour</MenuItem>
            <MenuItem value="2 - 4 Days Tour">2 - 4 Days Tour</MenuItem>
            <MenuItem value="5 - 7 Days Tour">5 - 7 Days Tour</MenuItem>
            <MenuItem value="7+ Days Tour">7+ Days Tour</MenuItem>
         </BasicSelect>
         <FormControl fullWidth size='small'>
         <Typography fontSize="small" fontWeight="bold">Date</Typography>
         <TextField
         onChange={handleChange}
          fullWidth
            name="date"
            type="date"
            size="small"
           sx={{backgroundColor:"whitesmoke", color:"black"}}
         />
         </FormControl>
         <Box>
        <label></label>
        <Button onClick={handleSearch} variant="contained" sx={{marginTop:2}}>Search</Button>
        </Box>
        </Box>
        </Container>
    )
}