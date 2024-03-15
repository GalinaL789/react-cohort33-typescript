// В компоненте WeatherInfo должны быть показаны данные о погоде
import { WeatherInfoWrapper} from "./styles";
// Данные должны приходить через props от комопонента Weather

function WeatherInfo({ result }: any) {
  console.log(result);
  return <WeatherInfoWrapper>Temp: {result.main && result.main.temp} °C</WeatherInfoWrapper>
}
export default WeatherInfo;