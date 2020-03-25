import React from 'react';
import { Helmet } from "react-helmet";
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'theme-ui';
import GoogleFontLoader from 'react-google-font-loader';

import theme from './theme';
import Main from './Main';
import * as serviceWorker from './serviceWorker';
import './i18n';

ReactDOM.render(
  <React.StrictMode>
      <GoogleFontLoader
          fonts={[
              {
                  font: 'Roboto',
                  weights: [400, 700, '400i'],
              },
              {
                  font: 'Roboto Slab',
                  weights: [400, 700],
              },
              {
                  font: 'Roboto Mono',
                  weights: [400, 700],
              },
          ]}
      />
      <Helmet>
          <meta charSet="utf-8" />
          <title>Carlos Cañellas</title>
      </Helmet>
      <ThemeProvider theme={theme}><Main /></ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
