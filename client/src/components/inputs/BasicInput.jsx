import {InputAdornment, TextField, Box, FormControl, FormHelperText, Input, Typography, Icon} from "@mui/material"
export default function BasicInput({...props}){
    return (
        <Box sx={{width:"100%", marginBottom:4}}>
        <Typography fontSize={15} sx={{color:"gray"}}>{props.lbl}</Typography>
        <TextField 
        required
        fullWidth 
        {...props}
        variant="outlined" 
        aria-describedby="my-helper-text" 
        InputProps={{
            startAdornment:props.start &&  (
              <InputAdornment  position="start"><props.start fontSize="small" color="primary" /></InputAdornment>
            ),
            endAdornment: props.end && (
              <InputAdornment position="end">{props.end}</InputAdornment>
            )
          }}
         />
        {/* <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText> */}
      </Box>
    )
}