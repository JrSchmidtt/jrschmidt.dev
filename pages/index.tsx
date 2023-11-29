import Head from 'next/head'
import {
  Container,
  Main,
} from '@/components/sharedstyles'
import {
  Navbar,
  NavbarLogo,
  NavbarLinks,
} from '@/components/navbar'

export default function Home() {
  return (
    <Container>
      <Head>
        <title>Junior Schmidt</title>
        <meta name="description" content="Explorando novas tecnologias e desenvolvendo perspicácia em programação. Conheça o portfólio de Junior Schmidt, repleto de projetos inovadores que refletem sua paixão pela programação e suas habilidades em constante evolução." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar>
        <NavbarLogo>
          Junior Schmidt
        </NavbarLogo>
        <NavbarLinks>
          <a href="#">Home</a>
          <a href="#">Sobre</a>
          <a href="#">GitHub</a>
          <a href="#">Fale Comigo</a>
        </NavbarLinks>
      </Navbar>
      <Main>
      </Main>
    </Container>
  )
}
