import React from "react";
import styled from "styled-components";

const InfoDiv = styled.div`
  margin-top: 3rem;
`;

const ListItem = styled.li`
  margin-bottom: 0.5rem;
`;

const KeyInfo = props => {
  const { location, length, includes, language } = props;
  return (
    <InfoDiv>
      <ul className="fa-ul">
        <ListItem>
          <span className="fa-li">
            <i className="fas fa-map-marker-alt" />
          </span>
          {location}
        </ListItem>
        <ListItem>
          <span className="fa-li">
            <i className="far fa-clock" />
          </span>
          {length}
        </ListItem>
        <ListItem>
          <span className="fa-li">
            <i className="fas fa-gift" />
          </span>
          {includes}
        </ListItem>
        <ListItem>
          <span className="fa-li">
            <i className="far fa-comments" />
          </span>
          {language}
        </ListItem>
      </ul>
    </InfoDiv>
  );
};

export default KeyInfo;
