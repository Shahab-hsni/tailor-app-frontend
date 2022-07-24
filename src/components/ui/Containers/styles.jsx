import styled from "styled-components";

export const Grid2 = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 100%;
  position: relative;
`;

export const SFixedContainer = styled.div`
  max-width: ${({ size }) => (!size ? "initial" : `${size}px`)};
  width: 100%;
  margin: 0 auto;
`;
