import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;500;600;900&display=swap');

*, *::before, *::after{
    box-sizing: border-box;
}

html{
    font-size: 62.5%;
    scroll-behavior: smooth;
}

body{
    font-family: "Montserrat", sans-serif;
    font-size: 1.6rem;
    margin: 0;
    max-width: 1920px;
    background: hsl(192, 12%, 23%);
}

a{
    text-decoration: none;
    color: black;
}
`;

export default GlobalStyle;
