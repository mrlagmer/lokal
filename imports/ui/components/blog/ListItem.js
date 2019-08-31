import React from "react";
import styled from "styled-components";

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
`;

const BlogItem = props => {
  const image = props.imageURL ? props.imageURL.sourceUrl : "";
  return (
    <ItemLink href={`blog/${props.slug}`}>
      <PostItem>
        <div css="width: 60%">
          <Title>{props.title}</Title>
          <Author>{props.author}</Author>
          <Excerpt
            dangerouslySetInnerHTML={{ __html: props.excerpt }}
          ></Excerpt>
        </div>
        <img src={image} />
      </PostItem>
    </ItemLink>
  );
};

export default BlogItem;
