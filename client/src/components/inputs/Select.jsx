import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
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
          MenuProps={{ sx:{color:"black"}}}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>

  );
}