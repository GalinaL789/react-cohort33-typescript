//В компоненте WeatherError должны ьыть показаны данные о погоде
//Данные должны приходить через props от комонента Weather
import { ApiError, ErrorMessage, WeatherErrorWrapper} from "./styles";
function WeatherError({ result }: any){
    return(
    <WeatherErrorWrapper>
    <ApiError>Error: {result.cod}</ApiError>
     <ErrorMessage>{result.message}</ErrorMessage>
     </WeatherErrorWrapper>
    );
}
export default WeatherError;