import * as S from './styles'

const Main = () => {
  return (
    <S.Wrapper>
      <S.Logo src='/vercel.svg' alt='Imagem de um triangulo com Vercel Escrito ao lado'/>
      <S.Title>React Avançado</S.Title>
      <S.Description>Typescript, ReactJS, NextJS e Styled Components</S.Description>
      <S.Illustration src='/thirteen.svg' alt='Imagem ilustrativa'/>
    </S.Wrapper>
  )
}

export default Main