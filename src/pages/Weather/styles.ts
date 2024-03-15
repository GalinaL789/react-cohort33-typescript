import styled from "@emotion/styled";
import { WeatherImg } from "assets";
export const WeatherWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1;
  background: url(${WeatherImg});
  background-repeat: no-repeat;
  background-size: cover;
`;
export const Header = styled.header`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  height: 80px;
  padding: 20px;
  color: dark-blue;

`;

export const Main = styled.main`
  display: flex;
  flex-direction:column;
  align-items:center;
  flex: 1;

`;
export const InputWrapper=styled.div`
display:flex;
gap:20px;
`;

export const LineTitle= styled.div`

  color: white;
  font-size: 32px;

`;

 