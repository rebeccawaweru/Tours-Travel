import { Routes, Route } from "react-router-dom";
import { LandingPage, SignUp, SignIn, ForgotPassword, ResetPassword, About, Packages, PackageDetails, Destinations, Contact, Bookings,CreatePackage, UpdatePackage, TourPackages, AddReferal, UpdateReferal, Dashboard } from "../pages";
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
          {/* <GoogleTranslate/> */}
        <Routes>
          <Route path='/' element={<LandingPage/>}/>
          <Route path='/signup' element={<SignUp/>}/>
          <Route path='/signin' element={<SignIn/>}/>
          <Route path="/forgotpassword" element={<ForgotPassword/>}/>
          <Route path="/resetpassword" element={<ResetPassword/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/destinations" element={<Destinations/>}/>
          <Route path="/packages" element={<Packages/>}/>
          <Route path="/package/:id" element={<PackageDetails/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/bookings" element={<Bookings/>}/>
          <Route path="/addreferal" element={<AddReferal/>}/>
          <Route path="/updatereferal/:id" element={<UpdateReferal/>}/>
          <Route path="/newpackage" element={<CreatePackage/>}/>
          <Route path="/updatepackage/:id" element={<UpdatePackage/>}/>
          <Route path="/tourpackages" element={<TourPackages/>}/>
          <Route path="/dashboard" element={<Dashboard/>}/>
        </Routes>
        </ThemeProvider>
    )
}