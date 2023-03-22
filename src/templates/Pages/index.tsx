import LinkWrapper from "@/components/LinkWrapper"

import * as S from './styles'
import { Close } from '@styled-icons/evil/Close'

export type PageTemplateProps = {
  heading: string
  body: string
}

const PageTemplate = ({heading, body} : PageTemplateProps) => {
  return(
  <S.Content>
    <LinkWrapper href="/">
      <Close size={32} aria-label="about"/>
    </LinkWrapper>
    <S.Heading>{heading}</S.Heading>

    <S.Body>
      <div dangerouslySetInnerHTML={{ __html: body}}/>
    </S.Body>
  </S.Content>
  )
}

export default PageTemplate