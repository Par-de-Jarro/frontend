import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
    font-family: 'Montserrat', sans-serif;  
  }

  body, html {
    color: #FFF;
    width: 100%;
    height: 100%;
  }

  body, input, button, p {
    font-family: 'Montserrat', sans-serif;
    font-size: 16px;
  }
  
  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 400;
  }

  button {
    cursor: pointer;
  }
`
