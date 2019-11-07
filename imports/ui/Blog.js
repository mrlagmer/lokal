import React from "react";
import styled from "styled-components";
import { Helmet } from "react-helmet";
import ApolloClient from "apollo-client";
import gql from "graphql-tag";
import { InMemoryCache } from "apollo-cache-inmemory";
import { HttpLink } from "apollo-link-http";
import { Query } from "react-apollo";

import GlobalStyle from "./components/GlobalStyle";
import { Main, AppDiv } from "./components/Main";
import Footer from "./components/Footer";
import LokalHead from "./components/LokalHead";
import PagesTitle from "./components/PagesTitle";
import PageContent from "./components/PageContent";
import { googleAnalyticsId } from "./tools/General";
import BlogItem from "./components/blog/ListItem";
import LoadPage from "./components/Loading";

const BlogList = styled.ul`
  margin: 2rem auto;
`;

const BLOGQUERY = gql`
  query MyQuery {
    posts {
      edges {
        node {
          title
          slug
          featuredImage {
            sourceUrl(size: MEDIUM)
          }
          excerpt
          author {
            name
          }
        }
      }
    }
  }
`;

const cache = new InMemoryCache();

const httpLink = new HttpLink({
  uri: "https://blog.lokal.ly/graphql"
});

const customClient = new ApolloClient({
  link: httpLink,
  cache: cache
});

const Blog = props => (
  <AppDiv>
    <Helmet>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>Lokal.ly | Lokal Blog </title>
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
      <PagesTitle title="Blog (Alamat)" />
      <div css="max-width: 960px; margin: 0 auto;">
        <BlogList>
          <Query query={BLOGQUERY} client={customClient}>
            {({ loading, error, data }) => {
              if (loading) return <LoadPage />;
              if (error) return <p>Error :(</p>;
              window.prerenderReady = true;
              return (
                <>
                  {data.posts.edges.map(post => (
                    <BlogItem
                      title={post.node.title}
                      excerpt={post.node.excerpt}
                      imageURL={post.node.featuredImage}
                      slug={post.node.slug}
                    />
                  ))}
                </>
              );
            }}
          </Query>
        </BlogList>
      </div>
    </Main>
    <Footer />
  </AppDiv>
);

export default Blog;
