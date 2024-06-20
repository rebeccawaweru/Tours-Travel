import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import { useEffect } from 'react';
import emailjs from "@emailjs/browser";
import Root from './routes/Root';
import { Grid,Box, Typography } from '@mui/material';
import danger from './danger.png'
const router = createBrowserRouter([
  {path:'*', Component:Root}
])

function App() {
  useEffect(() => emailjs.init(process.env.REACT_APP_PUBLIC_KEY), []);
  return (
  // <RouterProvider router={router}/>
   <Grid bgcolor="rgb(203 213 225)" height="100vh" gap={1} container display="flex" flexDirection="column" textAlign="center" justifyContent="center" alignItems="center">
      <img src={danger} alt="suspension" width={100} height={100}/>
      <Typography variant="h4" fontWeight="bold">Website Suspended</Typography>
      <Typography>Contact developer for further information</Typography>
   </Grid>
);
}

export default App;
