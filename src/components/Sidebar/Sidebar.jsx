import React from "react";

import { DLink, Aside, Ul, List, Label, IconSpan } from "./styles";

const Sidebar = ({ pages }) => {
  return (
    <Aside>
      <Label>Menue</Label>
      <Ul>
        {pages.map((page) => (
          <List>
            <DLink to={page.source}>
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
