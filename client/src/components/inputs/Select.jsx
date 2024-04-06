import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Typography } from '@mui/material';

export default function BasicSelect({...props}) {
  return (
      <FormControl fullWidth size='small'>
        <Typography fontSize="small" fontWeight="bold">{props.lbl}</Typography>
        <Select
          {...props}
          sx={{backgroundColor:"whitesmoke", color:"black"}}
        >
        {props.children}
        </Select>
      </FormControl>

  );
}