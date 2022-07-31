import styled from "styled-components";

import { v, b } from "../../styles/variables";

export const SMain = styled.main`
  transition: 0.3s ease padding;

  height: 100vh;
`;
export const RMain = styled.main`
  transition: 0.3s ease padding;
  display: grid;
  grid-template-columns: 15vw 1fr;
  grid-template-rows: 80px 1fr;
  height: 100vh;
  box-sizing: border-box;
`;
