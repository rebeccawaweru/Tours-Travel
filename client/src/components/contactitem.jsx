import { Stack, Icon, Typography} from "@mui/material"
export default function ContactItem(props){
    const {icon, title} = props;
    return (
        <Stack direction="row" spacing={2}>
        <Icon color="primary">{icon}</Icon>
        <Typography color="inherit">{title}</Typography>
      </Stack>
    )
}