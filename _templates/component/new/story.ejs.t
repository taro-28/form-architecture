---
to: src/pages/<%= h.changeCase.pascal(component_name) %>/<%= h.changeCase.pascal(component_name) %>.stories.tsx
---

import { FC } from 'react';
import { <%= h.changeCase.pascal(component_name) %> } from './index';

export default { component: <%= h.changeCase.pascal(component_name) %> };

export const <%= h.changeCase.camel(component_name) %>: FC = () => {
  return <<%= h.changeCase.pascal(component_name) %> />;
};