import Head from 'next/head'
import { Container, Main } from '@/components/sharedstyles'
import { Navbar } from '@/components/navbar'
import { NavBarLinks } from '@/constants/menu'
import { Banner } from '@/components/banner'

export default function Home() {
  return (
    <Container>
      <Head>
        <title>Junior Schmidt</title>
        <meta name="description" content="Explorando novas tecnologias e desenvolvendo perspicácia em programação. Conheça o portfólio de Junior Schmidt, repleto de projetos inovadores que refletem sua paixão pela programação e suas habilidades em constante evolução." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main>
        <Navbar
          NavBarLinks={NavBarLinks}
        />
        <Banner />
      </Main>
    </Container>
  )
}