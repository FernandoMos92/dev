import type { AppProps } from "next/app";
import "../style/global.scss";

import Header from "../components";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
