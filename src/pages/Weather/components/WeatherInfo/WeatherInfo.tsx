// В компоненте WeatherInfo должны быть показаны данные о погоде
import { WeatherInfoWrapper} from "./styles";
// Данные должны приходить через props от комопонента Weather

function WeatherInfo({ result }: any) {
  return <WeatherInfoWrapper>Temp: {result.main && result.main.temp} °C
  <img src={`http://openweathermap.org/img/w/${result?.weather[0]?.icon}.png`} alt="Weather icon" 
  height="100" width="100"/>
  </WeatherInfoWrapper>
}
export default WeatherInfo;