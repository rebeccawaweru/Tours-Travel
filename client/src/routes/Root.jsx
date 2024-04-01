import { Routes, Route } from "react-router-dom";
import { LandingPage, SignUp, SignIn, ForgotPassword, ResetPassword, Packages, Contact } from "../pages";
import { ThemeProvider, createTheme } from '@mui/material/styles';
export default function Root(){
    const theme = createTheme({
        components: {
            MuiIconButton: {
              styleOverrides: {
                root: {
                  color: 'whitesmoke', // Set color to white for all icon buttons
                  fontFamily:`"Poppins",sans-serif`,
                  letterSpacing:"0.9px"

                },
              },
            },
          },
        typography:{
       
                fontFamily:`"Poppins",sans-serif`,
                letterSpacing:"0.9px",
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
          <Route path="/forgotpassword" element={<ForgotPassword/>}/>
          <Route path="/resetpassword" element={<ResetPassword/>}/>
          <Route path="/packages" element={<Packages/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
        </ThemeProvider>
    )
}