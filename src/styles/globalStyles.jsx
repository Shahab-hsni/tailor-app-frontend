import { createGlobalStyle } from "styled-components";

import poppinsMedium from "../assets/fonts/Poppins-Medium.ttf";
import poppinsLarge from "../assets/fonts/Poppins-SemiBold.ttf";

const FontStyles = createGlobalStyle`
    
    @font-face {
        font-family: 'Poppins';
        src: url(${poppinsMedium}) format('woff');
        src: url(${poppinsLarge}) format('woff');
    }


    body {
  font-family: 'Poppins', sans-serif;
  box-sizing: border-box;
 
  margin: 0;
  
  /* position: relative;
  max-height: 100vh;
  overflow: hidden; */

}
`;

export default FontStyles;
