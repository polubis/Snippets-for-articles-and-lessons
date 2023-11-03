const GlobalStyle = createGlobalStyle`
    html {
        font-size: 62.5%;
        height: 100%;
    }

    body {
        height: 100%;
    }

    ul, ol {
        list-style: none;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p,
    figure,
    picture,
    ul,
    ol,
    body,
    html,
    blockquote {
        margin: 0;
        padding: 0;
    }

    * {
        box-sizing: border-box;
    }
`;

export { GlobalStyle };
