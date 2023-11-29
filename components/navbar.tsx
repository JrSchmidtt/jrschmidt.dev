import styled from 'styled-components'

const Navbar = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 0;
  width: 100%;
  max-width: 100%;
  margin: 0 1rem;
`

const NavbarLogo = styled.div`
  font-size: 2rem;
  font-weight: 800;
  line-height: 1.15;
  color: ${({ theme }) => theme.colors.text};
`

const NavbarLinks = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 30%;
    a:last-child {
        color: ${({ theme }) => theme.colors.secondary};
        margin-right: 3rem;
    }
`

export {
    Navbar,
    NavbarLogo,
    NavbarLinks,
}