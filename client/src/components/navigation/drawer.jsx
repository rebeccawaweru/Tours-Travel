import {Drawer} from '@mui/material'
export default function CustomDrawer(props){
    return <Drawer  anchor="right" open={props.open} onClose={props.onClose}>
      {props.children}
  </Drawer>
}