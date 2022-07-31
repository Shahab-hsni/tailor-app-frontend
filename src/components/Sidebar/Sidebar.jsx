import React from "react";
import { useLocation } from "react-router-dom";

import { DLink, Aside, Ul, List, Label, IconSpan } from "./styles";

const Sidebar = ({ pages }) => {
  const location = useLocation();
  return (
    <Aside>
      <Label>Menue</Label>
      <Ul>
        {pages.map((page, idx) => (
          <List key={`d_link_${idx}`}>
            <DLink to={page.source} state={location.state}>
              <IconSpan>{page.icon}</IconSpan>

              {page.name}
            </DLink>
          </List>
        ))}
      </Ul>
    </Aside>
  );
};

export default Sidebar;
