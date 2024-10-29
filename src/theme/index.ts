import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
html,
body{
    padding: 0;
    margin: 0;
    background-color: #2D2727;
    color: #F0EB8D;
    font-family: "Playfair Display", serif;
    overflow-x: hidden;
}
a{
    color: inherit;
    text-decoration: none;
    /* box-shadow: 2px 4px 8px rgba(0, 0, 0, 0.2);  */
}
* {
    box-sizing: border-box;
}
`;
