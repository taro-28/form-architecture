---
to: src/pages/<%= h.changeCase.pascal(component_name) %>/index.tsx
---

import { FC } from 'react'

type Props = {

}

export const <%= h.changeCase.pascal(component_name) %>: FC<Props> = ({}) => {
  return (
    <></>
  )
}