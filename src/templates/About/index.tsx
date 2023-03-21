import LinkWrapper from "@/components/LinkWrapper"

import * as S from './styles'
import { Close } from '@styled-icons/evil/Close'

const AboutTemplate = () => {
  return(
  <S.Content>
    <LinkWrapper href="/">
      <Close size={32} aria-label="about"/>
    </LinkWrapper>
    <S.Heading>My Trips</S.Heading>

    <S.Body><p>Example Text</p></S.Body>
  </S.Content>
  )
}

export default AboutTemplate