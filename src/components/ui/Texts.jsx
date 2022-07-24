import { font, b, s, v } from "@/styles/variables";
import { lightTheme } from "@/styles/theme";
import styled from "styled-components";

export const H1 = styled.h1`
  font-size: ${font.xxl};
  line-height: 72px;
  color: ${(props) => props.color};
  font-weight: 700;
  margin: ${(props) => props.margin} 0;
`;
H1.defaultProps = {
  color: `${lightTheme.black}`,
  margin: `${v.lgSpacing}`,
};
export const H2 = styled.h2`
  font-size: ${font.xl};
  line-height: 60px;
  color: ${({ theme }) => theme.black};
  font-weight: 600;
`;

// const H2 = () => {
//   return <div>Texts</div>;
// };
