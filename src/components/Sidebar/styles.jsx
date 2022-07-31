import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";
import { font, v } from "@/styles/variables";

export const Aside = styled.aside`
  grid-column: 1/2;
  grid-row: 2/3;
  padding: ${v.smSpacing} 0;
  border-right: 1px solid ${({ theme }) => theme.gray2};
`;
export const Ul = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  margin-top: ${v.smSpacing};
`;
export const List = styled.li``;
export const DLink = styled(NavLink)`
  color: ${({ theme }) => theme.black};
  text-decoration: none;
  font-size: ${font.pl};
  padding: ${v.mdSpacing} ${v.rgSpacing};
  display: flex;
  align-items: center;
  gap: ${v.smSpacing};

  &.active {
    background-color: ${({ theme }) => theme.primaryTransparent};
    color: ${({ theme }) => theme.primary};
    border-right: 2px solid ${({ theme }) => theme.primary};
  }
`;

export const Label = styled.span`
  font-size: ${font.psm};
  text-transform: uppercase;
  color: ${({ theme }) => theme.gray3};
  font-weight: 300;
  padding: 0 ${v.rgSpacing};
`;

export const IconSpan = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
`;
