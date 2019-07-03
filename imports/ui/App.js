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
import Featured from "./components/home/Featured";

const App = props => (
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
      <HeaderSection
        header="Have a team looking for activities?"
        p="Find local guides who can help your team develop and grow"
        href="https://docs.google.com/forms/d/e/1FAIpQLSdd6fVYwNETmMp01TQYbDq7QkZQ0BX9Ir2DbcFG8hFNVMisJQ/viewform"
        button_text="Inquire now"
      />
      <Featured />
      <EmailForm />
      <GuidesHome />
      <HeaderSection
        header="Ready to get started?"
        p="Become a local guide and share your experience with travelers and teams"
        href="https://docs.google.com/forms/d/e/1FAIpQLSePymXwG9WpNk87bSKd1pRk34vxTPQf-mVFAn2bK74rGWgYIg/viewform"
        button_text="Get Started!"
      />
    </Main>
    <Footer />
  </AppDiv>
);

export default App;
