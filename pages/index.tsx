import { Container, Main } from '@/components/sharedstyles'
import { Navbar } from '@/components/navbar'
import { NavBarLinks } from '@/constants/menu'
import { Banner } from '@/components/banner'

export default function Home() {
  return (
    <Container>
      <Main>
        <Navbar
          NavBarLinks={NavBarLinks}
        />
        <Banner />
      </Main>
    </Container>
  )
}