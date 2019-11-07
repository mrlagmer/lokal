import React from "react";
import styled from "styled-components";
import { Helmet } from "react-helmet";
import ApolloClient from "apollo-client";
import { ApolloLink } from "apollo-link";
import gql from "graphql-tag";
import { InMemoryCache } from "apollo-cache-inmemory";
import { HttpLink } from "apollo-link-http";
import { Query } from "react-apollo";
import { onError } from "apollo-link-error";

import GlobalStyle from "../GlobalStyle";
import { Main, AppDiv } from "../Main";
import Footer from "../Footer";
import LokalHead from "../LokalHead";
import PagesTitle from "../PagesTitle";
import { googleAnalyticsId } from "../../tools/General";
import LoadPage from "../Loading";
import PageContent from "../PageContent";
import { colors } from "../colors";

const BlogList = styled.ul`
  margin: 2rem auto;
`;

const Bio = styled.div`
  padding: 1rem;
  margin: 2rem 0;
  border-width: 2px;
  border-style: solid;
  border-image: linear-gradient(to right, ${colors.lg}) 10;
`;

const BioImage = styled.img`
  border-radius: 45px;
`;

const BLOGSINGLEQUERY = gql`
  query MyQuery($slug: String!) {
    postBy(slug: $slug) {
      id
      date
      title
      content
      author {
        firstName
        description
        avatar(size: 90) {
          url
        }
      }
    }
  }
`;

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors)
    graphQLErrors.map(({ message, locations, path }) =>
      console.log(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
      )
    );
  if (networkError) console.log(`[Network error]: ${networkError}`);
});

const cache = new InMemoryCache();

const httpLink = new HttpLink({
  uri: "https://blog.lokal.ly/graphql"
});

const link = ApolloLink.from([errorLink, httpLink]);

const customClient = new ApolloClient({
  link: link,
  cache: cache
});

const BlogPage = props => {
  const slug = props.match.params.slug;
  return (
    <Query query={BLOGSINGLEQUERY} client={customClient} variables={{ slug }}>
      {({ loading, error, data }) => {
        if (loading) {
          window.prerenderReady = false;
          return <LoadPage />;
        }
        if (error) return <p>Error :(</p>;
        window.prerenderReady = true;
        return (
          <AppDiv>
            <Helmet>
              <meta charSet="utf-8" />
              <meta
                name="viewport"
                content="width=device-width, initial-scale=1"
              />
              <title>Lokal.ly | Lokal Blog | {data.postBy.title} </title>
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
              <LokalHead />
              <PagesTitle title={data.postBy.title} />
              <PageContent css="margin-top: 0">
                <div
                  dangerouslySetInnerHTML={{ __html: data.postBy.content }}
                ></div>
                <Bio>
                  <BioImage src={data.postBy.author.avatar.url} />
                  <p>
                    <span css="font-weight: bold">Written By:</span>{" "}
                    {data.postBy.author.firstName}
                  </p>
                  <p>{data.postBy.author.description}</p>
                </Bio>
              </PageContent>
            </Main>
            <Footer />
          </AppDiv>
        );
      }}
    </Query>
  );
};

export default BlogPage;
