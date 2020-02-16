import React from "react";
import { Helmet } from "react-helmet";

import Footer from "./components/Footer";
import GlobalStyle from "./components/GlobalStyle";
import { Main, AppDiv } from "./components/Main";
import HeaderSection from "./components/HeaderSection";
import HeroHome from "./components/home/HeroHome";
import GuidesHome from "./components/home/GuidesHome";
import EmailForm from "./components/home/EmailForm";
import { googleAnalyticsId } from "./tools/General";
import LokalHead from "./components/LokalHead";
import Section from "./components/home/Section";
import Benefits from "./components/home/Benefits";
import Snaps from "./components/home/Snaps";
import Easy from "./components/home/Easy";

const App = props => {
  return (
    <AppDiv url={props.location.pathname}>
      <Helmet>
        <meta charSet="utf-8" />
        <meta
          name="description"
          content="Explore like a lokal. Connect to the very best local culture has to offer. Eat, drink and adventure through our curated experiences with the expertise of local guides."
        />
        <meta
          name="google-site-verification"
          content="YFqpA1nuLgL3D1QFnhVy05b5dOtAKwwkdmcs5EF6I9o"
        />
        <title>
          Explore Manila Tours, Team Building & Things To Do | Explore Lokal.ly
        </title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script>
          {`
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','${googleAnalyticsId}');
        `}
        </script>
      </Helmet>
      <GlobalStyle />
      <Main>
        <HeroHome />
        <Section
          header="Think of us as your offshore strategy concierge"
          p="We know how to grow teams, and we understand the factors of outsourcing,
          freelancing, and offshoring in Manila. Our service works to ensure that you
          make the best choices in regard to growing your team as well as recognise how to expand further."
        />
        <Easy />
        <EmailForm />
        <Benefits header="Benefits of Using Us" />
        <Snaps />
      </Main>
      <Footer />
    </AppDiv>
  );
};

export default App;
