import React, { memo } from 'react';
import styled from 'styled-components';

const GridContainer = styled.section`
  display: grid;
  width: auto;
  grid-auto-columns: auto;
  grid-auto-rows: auto;
  grid-gap: 1rem;
`;

const Grid = ({ children }) => (
  <GridContainer>
    {children}
  </GridContainer>
);

export default memo(Grid);
