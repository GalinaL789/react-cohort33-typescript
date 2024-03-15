import Input from "components/Input/Input";
import WeatherInfo from "./components/WeatherInfo/WeatherInfo";
import { WeatherWrapper, Header, Main, LineTitle, InputWrapper } from "./styles";
import { useState, ChangeEvent } from "react";
import Button from "components/Button/Button";
import WeatherError from "./components/WeatherError/WeatherError";
// const APP_ID = "341416a0ff27ce881f56e6873c9330d3";

function Weather()   {
  const [city, setCity] = useState<string>("");
  const [showWeather, setShowWeather]=useState<boolean>(false);
  const [result, setResult]=useState<any>({});
  
  const onChangeInput1 = (event: ChangeEvent<HTMLInputElement>) => {
     console.log(event.target.value);
     setCity(event.target.value);
   };

   const getCityWeather = async () => {
     console.log("getCityWeather function in use");
     try {
       const cityName = city;
       const url =
         "https://api.openweathermap.org/data/2.5/weather?q=" +
        cityName +
        "&appid=d0bbf9d1f21dc9e538d4e1e79ce0ffb9&units=metric";

      const response = await fetch(url, { method: "GET" });
      
       setResult(await response.json());
       console.log(result);
       console.log(result.main.temp);
       setShowWeather(true);
      if (!response.ok) {
        alert("Probably you entered invalid city name");
        setShowWeather(false);
        throw Object.assign(new Error("Some Request Error"), {
           response: result,
         });
      }
     } catch (error) {
       console.log(error);
       setShowWeather(false);
     }
    }
    return (
      <WeatherWrapper>
        <Header>
          <LineTitle> Weather app</LineTitle>
        </Header>
        <Main>
          <InputWrapper>
          <Input
            value={city}
             onChange={onChangeInput1}
           label="Enter your city"
            name="simpleInput"
            id="simple-input"
             placeholder="Enter your city"
             type="text"
           />
           <Button
            name="Получить погоду"
            onClick={() => {
              getCityWeather();
             }}
           />
           {showWeather && <WeatherInfo result={result}/>}
           </InputWrapper>
           {/* <WeatherError/> */}
        </Main>
      </WeatherWrapper>
    );
  };
export default Weather;
