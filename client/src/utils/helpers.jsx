import Train from '../assets/train.jpg'
import Bridge from '../assets/bridge.jpg'
import Sky from '../assets/sky.jpg'
import Palm from '../assets/palm.jpg'
import Europe from '../assets/europe.webp'
import Asia from '../assets/asia.webp'
import Africa from '../assets/africa.webp'
import one from '../assets/1.jpg'
import two from '../assets/2.jpg'
import three from '../assets/3.jpg'
import four from '../assets/4.jpg'
import five from '../assets/5.jpg'
import six from '../assets/6.jpg'
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
    {
      title:"Paradise Unleashed",
      caption:"Dive into Sun-Kissed Shores",
      arr:"Embrace the Serenity of the Sea",
      image:one
  },
  {
    title:"Where the Waves Whisper",
    caption:"Memories Last Forever",
    arr:"Your Gateway to Coastal Tranquility",
    image:two
   },
   {
    title:"Tall and Majestic",
    caption:"Discover the Grace of the Giraffe",
    arr:"Walk Among Nature's Towering Beauties",
    image:three
  },
  {
    title:"Flamingo Haven",
    caption:"Discover Nature's Pink Parade",
    arr:"A Symphony of Pink Elegance",
    image:four
  },
  {
    title:"Golden Sands",
    caption:"Explore the Magic of the Desert Dunes",
    arr:"Journey into the Heart of Untamed Beauty",
    image:five
  },
  {
    title:"Zebra Serengeti",
    caption:"Stripes in Motion on the Savannah",
    arr:"Witness the Beauty of Black and White Majesty",
    image:six
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
  window.open('https://wa.me/254707741232', '_blank')
}