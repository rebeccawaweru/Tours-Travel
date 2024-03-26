import { Routes, Route } from "react-router-dom";
import { LandingPage, SignUp, SignIn } from "../pages";
import { ThemeProvider, createTheme } from '@mui/material/styles';
export default function Root(){
    const theme = createTheme({
     
        components: {
            MuiIconButton: {
              styleOverrides: {
                root: {
                  color: 'whitesmoke', // Set color to white for all icon buttons
                  fontFamily: `system-ui, -apple-system Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif`,

                },
              },
            },
          },
        typography:{
       
                fontFamily: `system-ui, -apple-system Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif`,
                body1:{
                    color:"whitesmoke"
                }
            

        }
    })
    return (
        <ThemeProvider theme={theme}>
        <Routes>
          <Route path='/' element={<LandingPage/>}/>
          <Route path='/signup' element={<SignUp/>}/>
          <Route path='/signin' element={<SignIn/>}/>
        </Routes>
        </ThemeProvider>
    )
}