import { FormControlLabel, Checkbox, Typography } from "@mui/material"
export default function CheckBox({...props}){
    return (
        <FormControlLabel control={<Checkbox {...props}/>}   
        label={<Typography fontSize={15}>{props.label}</Typography>} />
       
    )
}