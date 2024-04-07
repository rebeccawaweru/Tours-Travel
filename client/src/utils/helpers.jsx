import Train from '../assets/train.jpg'
import Bridge from '../assets/bridge.jpg'
import Sky from '../assets/sky.jpg'
import Palm from '../assets/palm.jpg'
import Europe from '../assets/europe.webp'
import Asia from '../assets/asia.webp'
import Africa from '../assets/africa.webp'
export const content = [
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

export const itemData = [
    {
      img: Palm,
      title: 'Local Travels',
      author: '@bkristastucchio',
      featured: true,
    },
    {
      img: Europe,
      title: 'Hot Pick',
      author: '@rollelflex_graphy726',
    },
    {
      img: Asia,
      title: 'International Holiday',
      author: '@helloimnik',
    },
    {
      img: Africa,
      title: 'East Africa',
      author: '@nolanissac',
      cols: 2,
    }
]

export const handleFileUpload = async (files) =>{
  const data = new FormData()
  data.append("file", files[0])
  data.append("upload_preset", "Images");
  const res = await fetch(
    "https://api.cloudinary.com/v1_1/marite/image/upload",
    {
      method:"POST",
      body:data
    }
  )
  const File = await res.json()
  return File
}

export const whatsappchat = () =>{
  window.open('https://wa.me/254726647255', '_blank')
}