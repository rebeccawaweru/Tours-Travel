import { Box,  Typography, Select} from "@mui/material"
export default function CustomSelect({...props}){
    return (
        <Box sx={{width:"100%", marginBottom:4}}>
        <Typography variant="body1" color="inherit" fontSize={14}>{props.lbl}{props.required && <span style={{color:"red"}}>*</span>}</Typography>
        <Select
        fullWidth 
        size="small"
        sx={{backgroundColor:"white",color:"black"}}
        {...props}
        variant="outlined" 
        aria-describedby="my-helper-text" 
        >
        {props.children}
        </Select>
        {/* <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText> */}
      </Box>
    )
}