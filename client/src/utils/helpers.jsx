export const content = [
    {
        title:"Special",
        caption:"7 days in Switzerland",
        arr:"Bern, Lucern, Zurich, Zermatt, Metahorn, Jungfrau",
        image:"https://res.cloudinary.com/dkjb6ziqg/image/upload/q_80/f_auto/v1714485121/train_kfyezj.jpg"
    },
    {
        title:"It is time to",
        caption:"GO ON A VACATION",
        arr:"Italy, Rome, Venice, Milan",
        image:"https://res.cloudinary.com/dkjb6ziqg/image/upload/q_80/f_auto/v1714485084/bridge_fmrmqp.jpg"
    },
    {
        title:"OPEN YOUR EYES TO",
        caption:"THE HIDDEN WORLD",
        arr:"",
        image:"https://res.cloudinary.com/dkjb6ziqg/image/upload/q_80/f_auto/v1714485110/sky_qgdfgv.jpg"
    },
    {
      title:"Paradise Unleashed",
      caption:"Dive into Sun-Kissed Shores",
      arr:"Embrace the Serenity of the Sea",
      image:"https://res.cloudinary.com/dkjb6ziqg/image/upload/q_80/f_auto/v1714485006/1_jhvsvh.jpg"
  },
  {
    title:"Where the Waves Whisper",
    caption:"Memories Last Forever",
    arr:"Your Gateway to Coastal Tranquility",
    image:"https://res.cloudinary.com/dkjb6ziqg/image/upload/q_80/f_auto/v1714485062/2_ouotyy.jpg"
   },
   {
    title:"Tall and Majestic",
    caption:"Discover the Grace of the Giraffe",
    arr:"Walk Among Nature's Towering Beauties",
    image:"https://res.cloudinary.com/dkjb6ziqg/image/upload/q_80/f_auto/v1714485013/3_rgcris.jpg"
  },
  {
    title:"Flamingo Haven",
    caption:"Discover Nature's Pink Parade",
    arr:"A Symphony of Pink Elegance",
    image:"https://res.cloudinary.com/dkjb6ziqg/image/upload/q_80/f_auto/v1714485007/4_iwhd1c.jpg"
  },
  {
    title:"Golden Sands",
    caption:"Explore the Magic of the Desert Dunes",
    arr:"Journey into the Heart of Untamed Beauty",
    image:"https://res.cloudinary.com/dkjb6ziqg/image/upload/q_80/f_auto/v1714485071/5_qe59vu.jpg"
  },
  {
    title:"Zebra Serengeti",
    caption:"Stripes in Motion on the Savannah",
    arr:"Witness the Beauty of Black and White Majesty",
    image:"https://res.cloudinary.com/dkjb6ziqg/image/upload/q_80/f_auto/v1714485043/6_zp5uz3.jpg"
},

]

export const itemData = [
    {
      img:"https://res.cloudinary.com/dkjb6ziqg/image/upload/q_80/f_auto/v1714485108/palm_cvujpu.jpg",
      title: 'Local Travels',
    },
    {
      img:"https://res.cloudinary.com/dkjb6ziqg/image/upload/q_80/f_auto/v1714485100/europe_m7hgbj.webp",
      title: 'Hot Pick',
    },
    {
      img:"https://res.cloudinary.com/dkjb6ziqg/image/upload/q_80/f_auto/v1714485100/asia_j4p5zt.webp",
      title: 'International Holiday',
    },
    {
      img: "https://res.cloudinary.com/dkjb6ziqg/image/upload/q_80/f_auto/v1714485047/africa_situ5k.webp",
      title: 'East Africa',
    },
    {
      img:"https://res.cloudinary.com/dkjb6ziqg/image/upload/q_80/f_auto/v1714485185/vacation_p1cgqq.jpg",
      title: 'Vacations',
    },
    {
      img:"https://res.cloudinary.com/dkjb6ziqg/image/upload/q_80/f_auto/v1714485102/education_wo56oh.jpg",
      title: 'Educational Tours',
    },
    {
      img:"https://res.cloudinary.com/dkjb6ziqg/image/upload/q_80/f_auto/v1714485136/special_el11px.jpg",
      title: 'Special Tours',
    },
    {
      img:"https://res.cloudinary.com/dkjb6ziqg/image/upload/q_80/f_auto/v1714485113/sport_k25wyc.jpg",
      title: 'Sporting events',
    },
    {
      img: "https://res.cloudinary.com/dkjb6ziqg/image/upload/q_80/f_auto/v1714485086/charity_vz5muw.jpg",
      title: 'Charity tours',
    },
    {
      img:"https://res.cloudinary.com/dkjb6ziqg/image/upload/q_80/f_auto/v1714485168/wine_wzvtno.jpg",
      title: 'Wine tasting tours',
    },
    {
      img:"https://res.cloudinary.com/dkjb6ziqg/image/upload/q_80/f_auto/v1714485107/foodfestival_pjly9s.jpg",
      title: 'Food festivals',
    },
    {
      img:"https://res.cloudinary.com/dkjb6ziqg/image/upload/q_80/f_auto/v1714485037/birds_bvn5uh.jpg",
      title: 'Bird watching explorations',
    },
    {
      img:"https://res.cloudinary.com/dkjb6ziqg/image/upload/q_80/f_auto/v1714485109/gliding_ndptrm.jpg",
      title: 'Sky gliding tours',
    },
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