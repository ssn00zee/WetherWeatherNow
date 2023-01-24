import { Typography, Card, CardContent, Stack } from "@mui/material";
import Image from "next/image";



export default function BasicCard({
  city,
  description,
  main,
  temp,
  feelsLike,
  gust,
  imgType
}) {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Stack
          direction='row'
          gap={9}
          alignItems='center'
        >
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Temperature: {temp}°C <br/> Feels Like: {feelsLike}°C
        </Typography>
        <Image 
          src={`http://openweathermap.org/img/wn/${imgType}@2x.png`}
          width={50}
          height={50}
          alt='Image Icon'
        />

        </Stack>
        <Typography variant="h5" component="div">
          {city}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          Wind Speed: {gust}m/s
        </Typography>
        <Typography variant="body2">
          {main}
          <br />
          {description}
        </Typography>
      </CardContent>

    </Card>
  )
}