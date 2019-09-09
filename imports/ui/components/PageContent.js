import styled from "styled-components";

import { fonts } from "./text/fonts";

const PageContent = styled.div`
  line-height: ${fonts.lineHeightPages};
  max-width: 980px;
  margin: 4rem auto;
  padding: 1rem;
  h3 {
    font-size: 2rem;
    margin: 1rem 0;
  }
  ol {
    margin: 0.5rem;
    list-style-type: decimal;
    list-style-position: inside;
  }
  figure {
    margin: 0;
    margin-top: 1rem;
  }
  p {
    margin: 1rem 0;
  }
`;

export default PageContent;
