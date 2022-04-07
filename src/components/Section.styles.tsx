import styled from "styled-components";

let Section = styled.section`
  padding: 10px 15px;
  width: 100%;
  overflow-x: auto;
  white-space: nowrap;

  & > *:first-child {
    margin-top: 0;
  }

  & > *:last-child {
    margin-bottom: 0;
  }
`;

export default {
  Section,
};
