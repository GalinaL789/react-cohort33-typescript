//В компоненте WeatherError должны ьыть показаны данные о погоде
//Данные должны приходить через props от комонента Weather
import { WeatherErrorWrapper} from "./styles";
function WeatherError({ result }: any){
    console.log(result);
    return<WeatherErrorWrapper>Error: {result}</WeatherErrorWrapper>
}
export default WeatherError;