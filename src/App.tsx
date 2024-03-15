import { BrowserRouter, Routes, Route } from "react-router-dom";
import Weather from "pages/Weather/Weather";

import GlobalStyles from "styles/GlobalStyles";
import Layout from "components/Layout/Layout";

// Pages
import Home from "pages/Home/Home";
import About from "pages/About/About";
import Users from "pages/Users/Users";
import Clients from "pages/Clients/Clients";
import { Apple, Facebook, Sega } from "pages/Clients/components";

// Lessons
import Lesson20 from "lessons/Lesson20/Lesson20";
import Lesson21 from "lessons/Lesson21/Lesson21";
import Lesson22 from "lessons/Lessons22/Lesson22";
import Lesson23 from "lessons/Lesson23/Lesson23";
import Lesson24 from "lessons/Lesson24/Lesson24";
import Lesson25 from "lessons/Lesson25/Lesson25";
import Lesson27 from "lessons/Lesson27/Lesson27";

// Homeworks
import Homework20 from "homeworks/Homework20/Homework20";
import Homework21 from "homeworks/Homework21/Homework21";
import Homework22 from "homeworks/Homework22/Homework22";
import Homework23 from "homeworks/Homework23/Homework23";
import Homework24 from "homeworks/Homework24/Homework24";
import Homework25 from "homeworks/Homework25/Homework25";
import Homework27 from "homeworks/Homework27/Homework27";
import { WeatherWrapper } from "pages/Weather/styles";
import { WeatherErrorWrapper } from "pages/Weather/components/WeatherError/styles";
import WeatherError from "pages/Weather/components/WeatherError/WeatherError";

function App() {
  return (
      <Weather/>
  );
}
export default App;
