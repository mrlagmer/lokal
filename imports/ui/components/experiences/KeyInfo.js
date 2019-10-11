import React from "react";
import styled from "styled-components";

import { formatCurrency } from "../../tools/General";

const InfoDiv = styled.div`
  margin-top: 3rem;
`;

const ListItem = styled.li`
  margin-bottom: 0.5rem;
`;

const KeyInfo = props => {
  const { location, length, includes, language, cost, min } = props;
  const minCost = cost * min;
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
        {minCost > 0 && (
          <ListItem>
            <span className="fa-li">
              <i className="fas fa-dollar-sign" />
            </span>
            From USD {formatCurrency(minCost).us}
          </ListItem>
        )}
      </ul>
    </InfoDiv>
  );
};

export default KeyInfo;
