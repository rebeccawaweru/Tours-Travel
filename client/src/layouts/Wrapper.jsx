import { NavBar, Footer, Slider } from '../components';
import Train from '../assets/train.jpg'
import Bridge from '../assets/bridge.jpg'
import Sky from '../assets/sky.jpg'
export default function Wrapper({children}){
    const content = [
        {
            title:"Special",
            caption:"7 days in Switzerland",
            arr:"Bern, Lucern, Zurich, Zermatt, Metahorn, Jungfrau",
            image:Train
        },
        {
            title:"It is time to",
            caption:"GO ON A VACATION",
            arr:"Italy, Rome, Venice, Milan",
            image:Bridge
        },
        {
            title:"OPEN YOUR EYES TO",
            caption:"THE HIDDEN WORLD",
            arr:"",
            image:Sky
        },

    ]
    return (
        <>
          <NavBar/>
          <Slider images={content}/>
          {children}
          <Footer/>
        </>
    )
}