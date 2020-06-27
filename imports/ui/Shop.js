import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Helmet } from "react-helmet";

import Footer from "./components/Footer";
import GlobalStyle from "./components/GlobalStyle";
import LokalHead from "./components/LokalHead";
import { googleAnalyticsId } from "./tools/General";
import { Main, AppDiv } from "./components/Main";

const ShopDiv = styled.div`
  max-width: 1200px;
  margin: 4rem auto;
  padding: 1rem;
`;

const Shop = (props) => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "http://sdks.shopifycdn.com/buy-button/2.1.3/buybutton.js";
    script.async = false;
    document.body.appendChild(script);

    script.onload = () => {
      var client = ShopifyBuy.buildClient({
        storefrontAccessToken: "12c001bd2f321032f0553442b1f0a261",
        domain: "lokal-ly.myshopify.com",
      });

      var ui = ShopifyBuy.UI.init(client);

      ui.createComponent("collection", {
        id: 202372513959,
        node: document.getElementById("collection-component"),
        options: {
          product: {
            styles: {
              button: {
                "background-color": "black",
              },
            },
          },
          cart: {
            styles: {
              button: {
                "background-color": "black",
              },
            },
          },
          toggle: {
            styles: {
              toggle: {
                "background-color": "black",
              },
            },
          },
        },
      });
    };
  }, []);

  return (
    <AppDiv>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Lokal.ly | Lokal Shop </title>
        <script>
          {`
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','${googleAnalyticsId}');
          window.prerenderReady = false;
        `}
        </script>
      </Helmet>
      <GlobalStyle />
      <Main>
        <LokalHead />
        <ShopDiv>
          <div id="collection-component"></div>
        </ShopDiv>
      </Main>
      <Footer />
    </AppDiv>
  );
};

export default Shop;
