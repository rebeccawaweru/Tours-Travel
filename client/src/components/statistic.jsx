import {Grid, Typography, Stack, Icon, Paper} from '@mui/material'
export default function Statistic(props){
    const {caption, number, icon} = props
    return <Grid component={Paper} item container  bgcolor="black"  xs={12} md={3} border="1px solid #2196f3" paddingY={4} paddingX={2} display="flex" justifyContent="space-between">
    <Stack spacing={2}>
    <Typography variant="body2" color="#ccc" >No. of {caption}</Typography>
    <Typography color="whitesmoke">{number}</Typography>
    </Stack>
     <Icon color="primary">{icon}</Icon>
  </Grid>
}