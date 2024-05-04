import client from '../api/client';

export const content = [
    {
        title:"slider.first.title",
        caption:"slider.first.caption",
        arr:"Bern, Lucern, Zurich, Zermatt, Metahorn, Jungfrau",
        image:"https://res.cloudinary.com/dkjb6ziqg/image/upload/q_80/f_auto/v1714485121/train_kfyezj.jpg",
    
      },
     {
      title:"slider.second.title",
      caption:"slider.second.caption",
        arr:"Italy, Rome, Venice, Milan",
        image:"https://res.cloudinary.com/dkjb6ziqg/image/upload/q_80/f_auto/v1714485084/bridge_fmrmqp.jpg"
    },
    {
      title:"slider.third.title",
      caption:"slider.third.caption",
        image:"https://res.cloudinary.com/dkjb6ziqg/image/upload/q_80/f_auto/v1714485110/sky_qgdfgv.jpg"
    },
    {
      title:"slider.fourth.title",
        caption:"slider.fourth.caption",
      arr:"Embrace the Serenity of the Sea",
      image:"https://res.cloudinary.com/dkjb6ziqg/image/upload/q_80/f_auto/v1714485006/1_jhvsvh.jpg"
  },
  {
    title:"slider.fifth.title",
    caption:"slider.fifth.caption",
    arr:"Your Gateway to Coastal Tranquility",
    image:"https://res.cloudinary.com/dkjb6ziqg/image/upload/q_80/f_auto/v1714485062/2_ouotyy.jpg"
   },
   {
    title:"slider.sixth.title",
    caption:"slider.sixth.caption",
    arr:"Walk Among Nature's Towering Beauties",
    image:"https://res.cloudinary.com/dkjb6ziqg/image/upload/q_80/f_auto/v1714485013/3_rgcris.jpg"
  },
  {
    title:"slider.seventh.title",
    caption:"slider.seventh.caption",
    arr:"A Symphony of Pink Elegance",
    image:"https://res.cloudinary.com/dkjb6ziqg/image/upload/q_80/f_auto/v1714485007/4_iwhd1c.jpg"
  },
  {
    title:"slider.eigth.title",
    caption:"slider.eigth.caption",
    arr:"Journey into the Heart of Untamed Beauty",
    image:"https://res.cloudinary.com/dkjb6ziqg/image/upload/q_80/f_auto/v1714485071/5_qe59vu.jpg"
  },
  {
    title:"slider.nineth.title",
    caption:"slider.nineth.caption",
    arr:"Witness the Beauty of Black and White Majesty",
    image:"https://res.cloudinary.com/dkjb6ziqg/image/upload/q_80/f_auto/v1714485043/6_zp5uz3.jpg"
},

]

export const itemData = [
    {
      img:"https://res.cloudinary.com/dkjb6ziqg/image/upload/q_80/f_auto/v1714485108/palm_cvujpu.jpg",
      title: 'destination.local',
    },
    {
      img:"https://res.cloudinary.com/dkjb6ziqg/image/upload/q_80/f_auto/v1714485100/europe_m7hgbj.webp",
      title: 'destination.hot',
    },
    {
      img:"https://res.cloudinary.com/dkjb6ziqg/image/upload/q_80/f_auto/v1714485100/asia_j4p5zt.webp",
      title: 'destination.holiday',
    },
    {
      img: "https://res.cloudinary.com/dkjb6ziqg/image/upload/q_80/f_auto/v1714485047/africa_situ5k.webp",
      title: 'destination.africa',
    },
    {
      img:"https://res.cloudinary.com/dkjb6ziqg/image/upload/q_80/f_auto/v1714485185/vacation_p1cgqq.jpg",
      title: 'destination.vacay',
    },
    {
      img:"https://res.cloudinary.com/dkjb6ziqg/image/upload/q_80/f_auto/v1714485102/education_wo56oh.jpg",
      title: 'destination.edu',
    },
    {
      img:"https://res.cloudinary.com/dkjb6ziqg/image/upload/q_80/f_auto/v1714485136/special_el11px.jpg",
      title: 'destination.special',
    },
    {
      img:"https://res.cloudinary.com/dkjb6ziqg/image/upload/q_80/f_auto/v1714485113/sport_k25wyc.jpg",
      title: 'destination.sports',
    },
    {
      img: "https://res.cloudinary.com/dkjb6ziqg/image/upload/q_80/f_auto/v1714485086/charity_vz5muw.jpg",
      title: 'destination.charity',
    },
    {
      img:"https://res.cloudinary.com/dkjb6ziqg/image/upload/q_80/f_auto/v1714485168/wine_wzvtno.jpg",
      title: 'destination.wine',
    },
    {
      img:"https://res.cloudinary.com/dkjb6ziqg/image/upload/q_80/f_auto/v1714485107/foodfestival_pjly9s.jpg",
      title: 'destination.food',
    },
    {
      img:"https://res.cloudinary.com/dkjb6ziqg/image/upload/q_80/f_auto/v1714485037/birds_bvn5uh.jpg",
      title: 'destination.bird',
    },
    {
      img:"https://res.cloudinary.com/dkjb6ziqg/image/upload/q_80/f_auto/v1714485109/gliding_ndptrm.jpg",
      title: 'destination.sky',
    },
]

export const services = [
  {
    img:"https://res.cloudinary.com/dkjb6ziqg/image/upload/q_80/f_auto/v1714485108/plane_ixfry2.webp",
    title:"quality.destination.title",
    caption:"quality.destination.caption"
  },
  {
    img:"https://res.cloudinary.com/dkjb6ziqg/image/upload/q_80/f_auto/v1714485109/prices_npfyfs.png",
    title:"quality.price.title",
    caption:"quality.price.caption"
  },
  {
    img:"https://res.cloudinary.com/dkjb6ziqg/image/upload/q_80/f_auto/v1714485115/support_qbin6j.png",
    title:"quality.care.title",
    caption:"quality.care.caption"
  },
  {
    img:"https://res.cloudinary.com/dkjb6ziqg/image/upload/q_80/f_auto/v1714485046/calender_yag80u.webp",
    title:"quality.booking.title",
    caption:"quality.booking.caption"
  }
]

export const handleFileUpload = async (files) =>{
  const data = new FormData()
  data.append("file", files[0])
  data.append("upload_preset", "Images");
  const res = await fetch(
    "https://api.cloudinary.com/v1_1/dkjb6ziqg/image/upload",
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

export const textTranslate = async(lang, text) =>{
  try {
    const response = await client.post(`/translate/${lang}`, {text});
    return response
  } catch (error) {
    console.log(error)
  }
}
export const currencyConverter = async (to,amount,response) => {
   try {
     const currentRate = response[to]
     const result = amount * currentRate
     return result
   } catch (error) {
     console.log(error)
   }
}

export const languages = [
  {
    url:"https://res.cloudinary.com/dkjb6ziqg/image/upload/united-states-removebg-preview_mbwjxr.png",
    abb:'en',
    lang:"English (US)",
    abv: 'EN'
  },
  {
    url:"https://res.cloudinary.com/dkjb6ziqg/image/upload/united-kingdom_up03xv.png",
    abb:'uk',
    lang:"English (UK)",
    abv: 'UK'
  },
  {
    url:"https://res.cloudinary.com/dkjb6ziqg/image/upload/france_wjph1w.png",
    abb:'fr',
    lang:"Français",
    abv: 'FR'
  },
  {
    url:"https://res.cloudinary.com/dkjb6ziqg/image/upload/germany_c5a1yx.png",
    abb:"ger",
    lang:"Deutsch",
    abv: 'DE'
  },
  {
    url:"https://res.cloudinary.com/dkjb6ziqg/image/upload/v1714485902/netherlands_sph9h8.png",
    abb:"nth",
    lang:"Nederlands",
    abv: 'NL'
  },
  {
    url:"https://res.cloudinary.com/dkjb6ziqg/image/upload/v1714472109/flag_zcbv1j.png",
    abb:"spanish",
    lang:"Español",
    abv: 'ES'
  },
  {
    url:"https://res.cloudinary.com/dkjb6ziqg/image/upload/v1714485902/flag_1_v8s3jw.png",
    abb:"spanish",
    lang:"Español (AR)",
    abv: 'ES-AR'
  },
  {
    url:"https://res.cloudinary.com/dkjb6ziqg/image/upload/v1714485901/flag_2_uckvbs.png",
    abb:"spanish",
    lang:"Español (MX)",
    abv: 'ES-MX'
  },
  {
    url:"https://res.cloudinary.com/dkjb6ziqg/image/upload/v1714487075/catala-removebg-preview_qh6njj.png",
    abb:"catala",
    lang:"Català",
    abv: 'CA'
  },
  {
    url:"https://res.cloudinary.com/dkjb6ziqg/image/upload/v1714487222/flag_3_tswaf4.png",
    abb:"italy",
    lang:"Italiano",
    abv: 'IT'
  },
  {
    url:"https://res.cloudinary.com/dkjb6ziqg/image/upload/v1714487559/flag_4_ajwpjy.png",
    abb:"portugal",
    lang:"Português (PT)",
    abv: 'PT'
  },
  {
    url:"https://res.cloudinary.com/dkjb6ziqg/image/upload/v1714487459/flag_5_nvqb3p.png",
    abb:"portugal",
    lang:"Português (BR)",
    abv: 'BR'
  },
  {
    url:"https://res.cloudinary.com/dkjb6ziqg/image/upload/v1714488228/world_mvt8j2.png",
    abb:"norway",
    lang:"Norsk",
    abv: 'NO'
  },
  {
    url:"https://res.cloudinary.com/dkjb6ziqg/image/upload/v1714488222/flag_6_iqka4d.png",
    abb:"finland",
    lang:"Suomi",
    abv: 'FI'
  },
  {
    url:"https://res.cloudinary.com/dkjb6ziqg/image/upload/v1714488072/world_1_xvbvg1.png",
    abb:"sweden",
    lang:"Svenska",
    abv: 'SV'
  },
  {
    url:"https://res.cloudinary.com/dkjb6ziqg/image/upload/v1714488046/denmark_ogipgj.png",
    abb:"denmark",
    lang:"Dansk",
    abv: 'DA'
  },
  {
    url:"https://res.cloudinary.com/dkjb6ziqg/image/upload/v1714488674/flag_7_folmi5.png",
    abb:"czech",
    lang:"Čeština",
    abv: 'CS'
  },
  {
    url:"https://res.cloudinary.com/dkjb6ziqg/image/upload/v1714488669/flag_8_bz7vtl.png",
    abb:"hungary",
    lang:"Magyar",
    abv: 'HU'
  },
  {
    url:"https://res.cloudinary.com/dkjb6ziqg/image/upload/v1714489058/flag_9_f1peds.png",
    abb:"romania",
    lang:"Română",
    abv: 'RO'
  },
  {
    url:"https://res.cloudinary.com/dkjb6ziqg/image/upload/v1714489079/flag_10_v52dco.png",
    abb:"japan",
    lang:"日本語",
    abv: 'JA'
  },
  {
    url:"https://res.cloudinary.com/dkjb6ziqg/image/upload/china_dgm4gy.png",
    abb:"chinesesimplified",
    lang:"简体中文",
    abv: 'ZH-CN'
  },
  {
    url:"https://res.cloudinary.com/dkjb6ziqg/image/upload/v1714490183/tradchineese_coajko.png",
    abb:"chinesetraditional",
    lang:"繁體中文",
    abv: 'ZH-TW'
  },
  {
    url:"https://res.cloudinary.com/dkjb6ziqg/image/upload/v1714496690/flag_11_ttccsb.png",
    abb:"polish",
    lang:"Polski",
    abv: 'PL'
  },
  {
    url:"https://res.cloudinary.com/dkjb6ziqg/image/upload/v1714496689/flag_12_asu5ed.png",
    abb:"greek",
    lang:"Ελληνικά",
    abv: 'EL'
  },
  {
    url:"https://res.cloudinary.com/dkjb6ziqg/image/upload/v1714497191/russia_dwxatl.png",
    abb:"russian",
    lang:"Русский",
    abv: 'RU'
  },
  {
    url:"https://res.cloudinary.com/dkjb6ziqg/image/upload/v1714497348/turkey_t0vfvu.png",
    abb:"turkish",
    lang:"Türkçe",
    abv: 'TR'
  },
  {
    url:"https://res.cloudinary.com/dkjb6ziqg/image/upload/v1714497022/flag_13_pbx7so.png",
    abb:"bulgaria",
    lang:"Български",
    abv: 'BG'
  },
  {
    url:"https://res.cloudinary.com/dkjb6ziqg/image/upload/v1714552770/flag_14_q4cozy.png",
    abb:"arabic",
    lang:"العربية",
    abv: 'AR'
  },
  {
    url:"https://res.cloudinary.com/dkjb6ziqg/image/upload/v1714552823/flag_15_fumeon.png",
    abb:"korean",
    lang:"한국어",
    abv: 'KO'
  },
  {
    url:"https://res.cloudinary.com/dkjb6ziqg/image/upload/v1714553424/flag_16_jpdmgo.png",
    abb:"hebrew",
    lang:"עברית",
    abv: 'HE'
  },
  {
    url:"https://res.cloudinary.com/dkjb6ziqg/image/upload/v1714553237/austria_b0xnwn.png",
    abb:"latvian",
    lang:"Latviski",
    abv: 'LV'
  },
  {
    url:"https://res.cloudinary.com/dkjb6ziqg/image/upload/v1714553592/flag_17_sbulus.png",
    abb:"ukranian",
    lang:"Українська",
    abv: 'UKR'
  },
  {
    url:"https://res.cloudinary.com/dkjb6ziqg/image/upload/v1714553858/flag_18_lxh0kh.png",
    abb:"hindi",
    lang:"हिन्दी",
    abv: 'HI'
  },
  { 
    url:"https://res.cloudinary.com/dkjb6ziqg/image/upload/v1714553931/flag_19_ppc5rp.png",
    abb:"bahasa",
    lang:"Bahasa Indonesia",
    abv: 'ID'
  },
  {   
    url:"https://res.cloudinary.com/dkjb6ziqg/image/upload/v1714556575/malaysia_jcqoam.png",
    abb:"bahasa" ,
    lang:"Bahasa Malysia",
    abv: 'MS'
  },
  {
    url:"https://res.cloudinary.com/dkjb6ziqg/image/upload/v1714556532/flag_20_a5lxw0.png",
    abb:"thai",
    lang:"ภาษาไทย",
    abv: 'TH'
  },
  {
    url:"https://res.cloudinary.com/dkjb6ziqg/image/upload/v1714557049/flag_21_dszynv.png",
    abb:"estonia",
    lang:"Eesti",
    abv: 'ET'
  },
  {
    url:"https://res.cloudinary.com/dkjb6ziqg/image/upload/v1714556981/flag_22_aa1fwf.png",
    abb:"croatian",
    lang:"Hrvatski",
    abv: 'HR'
  },
  {     
    url:"https://res.cloudinary.com/dkjb6ziqg/image/upload/v1714557307/flag_23_qk3hnj.png",
    abb:"lithuanian",
    lang:"Lietuvių",
    abv: 'LT'
  },
  {   
    url:"https://res.cloudinary.com/dkjb6ziqg/image/upload/v1714559058/slovania_twbw7f.png",
    abb:"slovak",
    lang:"Slovenčina",
    abv: 'SK'
  },
  {      
    url:"https://res.cloudinary.com/dkjb6ziqg/image/upload/v1714559749/flag_24_m3wsna.png",
    abb:"serbian",
    lang:"Srpski",
    abv: 'SR'
  },
  {     
    url:"https://res.cloudinary.com/dkjb6ziqg/image/upload/v1714559058/slovania_twbw7f.png",
    abb:"slovene",
    lang:"Slovenščina",
    abv: 'SL'
  },
  {
    url:"https://res.cloudinary.com/dkjb6ziqg/image/upload/v1714559786/world_2_mxthme.png",
    abb:"vietnamese",
    lang:"Tiếng Việt",
    abv: 'VI'
  },
  {
    url:"https://res.cloudinary.com/dkjb6ziqg/image/upload/v1714560040/flag_25_kfnwxa.png",
    abb:"filipino",
    lang:"Filipino",
    abv: 'TL'
  }
];


export const currencies = {
"AED": "United Arab Emirates Dirham",
"AFN": "Afghan Afghani",
"ALL": "Albanian Lek",
"AMD": "Armenian Dram",
"ANG": "Netherlands Antillean Guilder",
"AOA": "Angolan Kwanza",
"ARS": "Argentine Peso",
"AUD": "Australian Dollar",
"AWG": "Aruban Florin",
"AZN": "Azerbaijani Manat",
"BAM": "Bosnia-Herzegovina Convertible Mark",
"BBD": "Barbadian Dollar",
"BDT": "Bangladeshi Taka",
"BGN": "Bulgarian Lev",
"BHD": "Bahraini Dinar",
"BIF": "Burundian Franc",
"BMD": "Bermudan Dollar",
"BND": "Brunei Dollar",
"BOB": "Bolivian Boliviano",
"BRL": "Brazilian Real",
"BSD": "Bahamian Dollar",
"BTC": "Bitcoin",
"BTN": "Bhutanese Ngultrum",
"BWP": "Botswanan Pula",
"BYN": "Belarusian Ruble",
"BZD": "Belize Dollar",
"CAD": "Canadian Dollar",
"CDF": "Congolese Franc",
"CHF": "Swiss Franc",
"CLF": "Chilean Unit of Account (UF)",
"CLP": "Chilean Peso",
"CNH": "Chinese Yuan (Offshore)",
"CNY": "Chinese Yuan",
"COP": "Colombian Peso",
"CRC": "Costa Rican Colón",
"CUC": "Cuban Convertible Peso",
"CUP": "Cuban Peso",
"CVE": "Cape Verdean Escudo",
"CZK": "Czech Republic Koruna",
"DJF": "Djiboutian Franc",
"DKK": "Danish Krone",
"DOP": "Dominican Peso",
"DZD": "Algerian Dinar",
"EGP": "Egyptian Pound",
"ERN": "Eritrean Nakfa",
"ETB": "Ethiopian Birr",
"EUR": "Euro",
"FJD": "Fijian Dollar",
"FKP": "Falkland Islands Pound",
"GBP": "British Pound Sterling",
"GEL": "Georgian Lari",
"GGP": "Guernsey Pound",
"GHS": "Ghanaian Cedi",
"GIP": "Gibraltar Pound",
"GMD": "Gambian Dalasi",
"GNF": "Guinean Franc",
"GTQ": "Guatemalan Quetzal",
"GYD": "Guyanaese Dollar",
"HKD": "Hong Kong Dollar",
"HNL": "Honduran Lempira",
"HRK": "Croatian Kuna",
"HTG": "Haitian Gourde",
"HUF": "Hungarian Forint",
"IDR": "Indonesian Rupiah",
"ILS": "Israeli New Sheqel",
"IMP": "Manx pound",
"INR": "Indian Rupee",
"IQD": "Iraqi Dinar",
"IRR": "Iranian Rial",
"ISK": "Icelandic Króna",
"JEP": "Jersey Pound",
"JMD": "Jamaican Dollar",
"JOD": "Jordanian Dinar",
"JPY": "Japanese Yen",
"KES": "Kenyan Shilling",
"KGS": "Kyrgystani Som",
"KHR": "Cambodian Riel",
"KMF": "Comorian Franc",
"KPW": "North Korean Won",
"KRW": "South Korean Won",
"KWD": "Kuwaiti Dinar",
"KYD": "Cayman Islands Dollar",
"KZT": "Kazakhstani Tenge",
"LAK": "Laotian Kip",
"LBP": "Lebanese Pound",
"LKR": "Sri Lankan Rupee",
"LRD": "Liberian Dollar",
"LSL": "Lesotho Loti",
"LYD": "Libyan Dinar",
"MAD": "Moroccan Dirham",
"MDL": "Moldovan Leu",
"MGA": "Malagasy Ariary",
"MKD": "Macedonian Denar",
"MMK": "Myanma Kyat",
"MNT": "Mongolian Tugrik",
"MOP": "Macanese Pataca",
"MRO": "Mauritanian Ouguiya (pre-2018)",
"MRU": "Mauritanian Ouguiya",
"MUR": "Mauritian Rupee",
"MVR": "Maldivian Rufiyaa",
"MWK": "Malawian Kwacha",
"MXN": "Mexican Peso",
"MYR": "Malaysian Ringgit",
"MZN": "Mozambican Metical",
"NAD": "Namibian Dollar",
"NGN": "Nigerian Naira",
"NIO": "Nicaraguan Córdoba",
"NOK": "Norwegian Krone",
"NPR": "Nepalese Rupee",
"NZD": "New Zealand Dollar",
"OMR": "Omani Rial",
"PAB": "Panamanian Balboa",
"PEN": "Peruvian Nuevo Sol",
"PGK": "Papua New Guinean Kina",
"PHP": "Philippine Peso",
"PKR": "Pakistani Rupee",
"PLN": "Polish Zloty",
"PYG": "Paraguayan Guarani",
"QAR": "Qatari Rial",
"RON": "Romanian Leu",
"RSD": "Serbian Dinar",
"RUB": "Russian Ruble",
"RWF": "Rwandan Franc",
"SAR": "Saudi Riyal",
"SBD": "Solomon Islands Dollar",
"SCR": "Seychellois Rupee",
"SDG": "Sudanese Pound",
"SEK": "Swedish Krona",
"SGD": "Singapore Dollar",
"SHP": "Saint Helena Pound",
"SLL": "Sierra Leonean Leone",
"SOS": "Somali Shilling",
"SRD": "Surinamese Dollar",
"SSP": "South Sudanese Pound",
"STD": "São Tomé and Príncipe Dobra (pre-2018)",
"STN": "São Tomé and Príncipe Dobra",
"SVC": "Salvadoran Colón",
"SYP": "Syrian Pound",
"SZL": "Swazi Lilangeni",
"THB": "Thai Baht",
"TJS": "Tajikistani Somoni",
"TMT": "Turkmenistani Manat",
"TND": "Tunisian Dinar",
"TOP": "Tongan Pa'anga",
"TRY": "Turkish Lira",
"TTD": "Trinidad and Tobago Dollar",
"TWD": "New Taiwan Dollar",
"TZS": "Tanzanian Shilling",
"UAH": "Ukrainian Hryvnia",
"UGX": "Ugandan Shilling",
"USD": "United States Dollar",
"UYU": "Uruguayan Peso",
"UZS": "Uzbekistan Som",
"VEF": "Venezuelan Bolívar Fuerte",
"VND": "Vietnamese Dong",
"VUV": "Vanuatu Vatu",
"WST": "Samoan Tala",
"XAF": "CFA Franc BEAC",
"XAG": "Silver Ounce",
"XAU": "Gold Ounce",
"XCD": "East Caribbean Dollar",
"XDR": "Special Drawing Rights",
"XOF": "CFA Franc BCEAO",
"XPD": "Palladium Ounce",
"XPF": "CFP Franc",
"XPT": "Platinum Ounce",
"YER": "Yemeni Rial",
"ZAR": "South African Rand",
"ZMW": "Zambian Kwacha",
"ZWL": "Zimbabwean Dollar",
}
