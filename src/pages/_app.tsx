
import { useContext, useState } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import '../styles/themes/global.css';

import Switch from "react-switch";

function MyApp({ Component, pageProps }) {


  return(
         <Component {...pageProps} />
  )
}

export default MyApp;
