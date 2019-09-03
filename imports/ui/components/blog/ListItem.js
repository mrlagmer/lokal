import React from "react";
import styled from "styled-components";

import media from "../media";

const Title = styled.h2`
  font-size: 2rem;
`;

const ItemLink = styled.a`
  color: black;
  text-decoration: none;
`;

const Author = styled.p`
  font-size: 1rem;
`;

const Excerpt = styled.p`
  font-size: 1rem;
  margin: 2rem 0;
`;

const PostItem = styled.li`
  display: flex;
  justify-content: space-between;
  margin: 2rem 0;
  ${media.phone`flex-direction: column-reverse;`}
`;

const PostItemDiv = styled.div`
  width: 60% ${media.phone`width: 100%`};
  padding: 1rem;
`;

const BlogItem = props => {
  const image = props.imageURL ? props.imageURL.sourceUrl : "";
  return (
    <ItemLink href={`alamat/${props.slug}`}>
      <PostItem>
        <PostItemDiv>
          <Title>{props.title}</Title>
          <Author>{props.author}</Author>
          <Excerpt
            dangerouslySetInnerHTML={{ __html: props.excerpt }}
          ></Excerpt>
        </PostItemDiv>
        <img src={image} css="flex-shrink: 0;" />
      </PostItem>
    </ItemLink>
  );
};

export default BlogItem;
