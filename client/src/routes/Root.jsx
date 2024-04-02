import { Routes, Route } from "react-router-dom";
import { LandingPage, SignUp, SignIn, ForgotPassword, ResetPassword, Packages, Contact, Bookings,CreatePackage,TourPackages,Users } from "../pages";
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
            MuiMenuItem:{
              styleOverrides: {
                root: {
                  color: 'black', // Set color to white for all icon buttons
                  fontFamily:`"Poppins",sans-serif`,
                  letterSpacing:"0.9px"

                },
              },
            },
            MuiFormControlLabel:{
              styleOverrides:{
                root:{
                  fontSize:"12px"
                }
              }
            }
          },
        typography:{
       
                fontFamily:`"Poppins",sans-serif`,
                letterSpacing:"0.9px",
                // body1:{
                //     color:"whitesmoke"
                // }
            

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
          <Route path="/bookings" element={<Bookings/>}/>
          <Route path="/newpackage" element={<CreatePackage/>}/>
          <Route path="/tourpackages" element={<TourPackages/>}/>
          <Route path="/users" element={<Users/>}/>
        </Routes>
        </ThemeProvider>
    )
}