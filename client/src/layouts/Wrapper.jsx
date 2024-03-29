import { NavBar, Footer } from '../components';

export default function Wrapper({children}){
    return (
        <>
          <NavBar/>
          {children}
          <Footer/>
        </>
    )
}