import { NavBar, Footer, Slider } from '../components';
import Train from '../assets/train.jpg'
import Bridge from '../assets/bridge.jpg'
import Sky from '../assets/sky.jpg'
export default function Wrapper({children}){
    return (
        <>
          <NavBar/>
          <Slider images={[Train,Bridge,Sky]}/>
          {children}
          <Footer/>
        </>
    )
}