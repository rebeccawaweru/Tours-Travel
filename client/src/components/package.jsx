import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Timer, Star, Share, LocationOn } from '@mui/icons-material';
import { Stack, Grid} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'
import {useTranslation} from 'react-i18next'
import { useCurrency } from '../context/currency';
import { currencyConverter,textTranslate } from '../utils/helpers';

export default function Package({id,image, duration, title, price, currency, location, link}) {
  const {t} = useTranslation()
  const { selectedCurrency,conversionRates, selectLang } = useCurrency();
 const [finalTitle, setFinalTitle] = React.useState(title)
 const [finalLocation, setFinalLocation] = React.useState(location)
  const rating = [1, 2, 3, 4, 5]
  const navigate = useNavigate()
  const handleShare = (id) => {
      Swal.fire({
        title:"Share tour package via link",
        text:'https://denzetoursandtravels.com/package/'+id,
        icon:"info",
        showCancelButton:true
      })
  }
  const from = currency === '$' ? 'USD' : currency === '€' ? 'EUR' : currency === 'ZAR' ? 'ZAR' : currency === 'KES' ? 'KES' : '';
    // Function to convert price to the selected currency
  const [result, setResult] = React.useState(price)
  React.useEffect(() => {
      const convertPrice = async()=>{
        try {
          const pr = await currencyConverter(selectedCurrency,price,conversionRates)
          setResult((Math.round(pr)))
        } catch (error) {
          console.log(error)
        }
      }
      convertPrice()

  },[selectedCurrency,price, conversionRates])
  React.useEffect(() => {
       const convertLanguage = async() => {
        try {
          const t = await textTranslate(selectLang,title)
          if (t.data !== "PLEASE SELECT TWO DISTINCT LANGUAGES") {
            setFinalTitle(t.data)
          }
          const lc = await textTranslate(selectLang,location)
          if (lc.data !== "PLEASE SELECT TWO DISTINCT LANGUAGES") {
            setFinalLocation(lc.data)
          }
        } catch (error) {
          console.log(error)
        }
       }
       convertLanguage()
  },[selectLang,title,location])
  return (
    <Card sx={{width:{xs:"100%",sm:320,md:380}}}>
      <CardMedia
        sx={{ height: 250, objectFit:"cover" }}
        component="img"
        loading="lazy"
        alt="tours and travels"
        image={image}
        title={title}
      />
      <CardContent component={Grid} direction="column" container gap={2}>
        
        <Typography sx={{display:"flex", justifyContent:"space-between"}} gutterBottom variant="p" component="div">
          <Typography fontSize="medium" fontWeight="bold" color="inherit">{finalTitle}</Typography>
          <Typography color="primary" fontWeight="bold">{selectedCurrency} {result ? result.toLocaleString() : 0} </Typography>
        </Typography>
        <Stack direction="row" spacing={1}>
            <LocationOn/>
           <Typography>{finalLocation} </Typography>
        </Stack>
           <Stack direction="row" spacing={1}>
            <Timer/>
            <Typography variant="body2" color="text.secondary"> {duration}
            </Typography>
           </Stack>

           <Stack direction="row" spacing={1}>
            {rating.map((star)=>{
               return <Star key={star} sx={{color:"#FFCA28"}}/>
            })}
            <Typography variant="body2" color="text.secondary"> (5 Reviews)
            </Typography>
           </Stack>          
      </CardContent>
      <CardActions sx={{justifyContent:"space-between", cursor:"pointer"}}>
        {link ? <Button variant="outlined" size="small" component="a" href={link}>{t('destination.learn')}</Button> :
        <Button onClick={()=>navigate(`/package/${id}`)} variant="outlined" size="small">{t('destination.learn')}</Button> 
        }
        <Share onClick={()=>handleShare(id)}/>
      </CardActions>
    </Card>
  );
}
