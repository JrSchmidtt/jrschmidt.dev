import styled from 'styled-components'

interface ContainerProps {
  backgroundType?: 'image' | 'none'
  backgroundColour?: 'primary' | 'secondary' | 'background'
}

const Container = styled.div<ContainerProps>`
  padding: 0 0.5rem;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  height: 100vh;
  min-height: 100vh;
  color: ${({ theme }) => theme.colors.text};
  background-color: ${({ theme, backgroundColour }) => 
    backgroundColour ? theme.colors[backgroundColour] : theme.colors.background
  };
  background-blend-mode: multiply !important;
  background-repeat: no-repeat;
  background-size: cover;
    ${({ backgroundType }) => 
    backgroundType === 'image' ? `
      background-image: url('/images/bg_home.webp');
    ` : `
      background-image: none;
    `
  }
`;

const Section = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1600px;
  max-height: 100vh;
  gap: 1rem;
  padding: 1rem;
`

const Title = styled.h1`
  margin: 0;
  line-height: 1.15;
  font-size: 4rem;
  text-align: center;
  text-decoration: none;

  a {
    color: ${({ theme }) => theme.colors.secondary};
    text-decoration: none;
    &:hover,
    :focus,
    :active {
      text-decoration: underline;
    }
  }
`

const Description = styled.p`
  text-align: center;
  line-height: 1.5;
  font-size: 1.5rem;
`
const CodeTag = styled.code`
  background: #fafafa;
  border-radius: 5px;
  margin: 0 0.75rem;
  padding: 0.75rem;
  font-size: 1.1rem;
  font-family: Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono,
    Bitstream Vera Sans Mono, Courier New, monospace;
`

export { Container, Section, Title, Description, CodeTag }
