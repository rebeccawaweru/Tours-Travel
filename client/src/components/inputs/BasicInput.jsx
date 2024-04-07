import {InputAdornment, TextField, Box, Typography} from "@mui/material"
export default function BasicInput({...props}){
    return (
        <Box sx={{width:"100%", marginBottom:4}}>
        <Typography variant="body1" color={props.coloor ? props.coloor : "inherit"} fontSize={14}>{props.lbl}{props.required && <span style={{color:"red"}}>*</span>}</Typography>
        <TextField 
        fullWidth 
        size="small"
        sx={{backgroundColor:"white"}}
        {...props}
        variant="outlined" 
        aria-describedby="my-helper-text" 
        InputProps={{
            startAdornment:props.start &&  (
              <InputAdornment  position="start"><props.start fontSize="small" color="primary" /></InputAdornment>
            ),
            endAdornment: props.end && (
              <InputAdornment sx={{cursor:"pointer"}} onClick={props.show}  position="end">{props.end}</InputAdornment>
            )
          }}
         />
        {/* <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText> */}
      </Box>
    )
}