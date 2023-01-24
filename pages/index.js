import Head from 'next/head'
import styles from '../styles/Home.module.css'
import axios from 'axios'
import { useState } from 'react'
import { TextField, Typography } from '@mui/material'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
import BasicCard from '../comps/card' 
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

export default function Home() {

  const [data, setData] = useState({})
  const [location, setLocation] = useState('')
  const [weather, setWeather] = useState()
  const [error, setError] = useState('')
  const [imgType, setImgType] = useState('')
  

  let apiKey = '9d723e2a314f7a4d9684342df385a9a4'
  let lang = 'en'
  let units = 'metric'
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=${units}&appid=${apiKey}&lang=${lang}`


  const searchLocation = async (e) => {
    if (e.key === 'Enter' || e.type === 'click'){
    try {
        const res = await axios.get(url)
        console.clear()
        setData(res.data)
        setWeather(res.data.weather)
        setError('')
        setImgType(res.data.weather[0].icon)
        console.log(res.data.weather[0].icon)
      } catch (e) {
        console.log(e)
        setError('Please enter another location')
        setData({})
        setWeather()
        setImgType()
      }
    }
  }



  return (
    <div>
      <Head>
        <title>Clint's Weather API</title>
        <meta name="description" content="Weather API" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ThemeProvider theme={darkTheme}>
      <CssBaseline />

    <main className={styles.main}>
      <div className={styles.parent}>

      <Typography
        variant='h1'
        sx={{fontSize: 36}}
      >
        Don't have a window like me? <br/>
        Check the weather right now!
      </Typography>

      <Stack
        spacing={2}
        direction={'column'}
      >
        <TextField 
          value={location}
          onChange={e => setLocation(e.target.value)}
          placeholder='Enter Location'
          type='text'
          onKeyDown={searchLocation}
          id="outlined-basic" 
          label={error == '' ? 'Enter a location' : 'Try again'}
          variant="outlined"
          >
        </TextField>

        <Button
          onClick={(e) => {
            searchLocation(e)
  
          }}
          variant="outlined"
        >
          Get Weather
        </Button>

      </Stack>
      {
        weather && weather.map((o, i) => {
          return (<>
              <BasicCard 
                description={o.description}
                main={o.main}
                city={data.name}
                temp={data.main.temp}
                feelsLike={data.main.feels_like}
                gust={data.wind.speed}
                imgType={imgType}
                key={i}
              />
          </>)
        })
      }

      <Typography
        variant='body1'
      >
      {error}

      </Typography>
      </div>

    </main>
      </ThemeProvider>
    </div>
  )
}
