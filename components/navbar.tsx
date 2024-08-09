import styled from "styled-components";
import { IoMenu } from "react-icons/io5";
import { useMediaQuery } from "react-responsive";
import { useState } from "react";

interface NavbarProps {
  NavBarLinks: INavBarLinks[];
}

export type INavBarLinks = {
  Name: string;
  url: string;
  target?: string;
};

export function Navbar({ NavBarLinks }: NavbarProps) {
  const isMobile = useMediaQuery({ query: `(max-width: 1024px)` });
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Container>
      <NavbarLogo>JR Schmidt</NavbarLogo>
      {isMobile ? (
        <>
          <IoMenu size={30} color="#fff" onClick={() => setIsOpen(!isOpen)} />
        </>
      ) : (
        <NavbarLinks>
          {NavBarLinks.map((link, index) => (
            <a key={index} href={link.url} target={link?.target ?? ""}>
              {link.Name}
            </a>
          ))}
        </NavbarLinks>
      )}

      {isOpen && (
        <NavbarLinks>
          {NavBarLinks.map((link, index) => (
            <a key={index} href={link.url}>
              {link.Name}
              
            </a>
          ))}
        </NavbarLinks>
      )}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 0;
  width: 100%;
  @media (max-width: 768px) {
    margin: 0 1rem;
  }
`;

const NavbarLogo = styled.div`
  font-size: 2rem;
  font-weight: 800;
  line-height: 1.15;
  color: ${({ theme }) => theme.colors.text};
  cursor: pointer;
  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const NavbarLinks = styled.div`
  width: 30%;
  display: flex;
  justify-content: space-between;
  font-size: 1.5rem;
  font-weight: 500;

  a:last-child {
    color: ${({ theme }) => theme.colors.highlight};
    background-color: ${({ theme }) => theme.colors.highlightBackground};
    padding: 0.2rem 0.5rem;
    border-radius: 8px;
    transition: transform 0.3s, background-color 0.3s;
    
    &:hover {
      transform: scale(1.1);
      color: ${({ theme }) => theme.colors.text};
      text-decoration: none;
    }
  }

  @media (max-width: 768px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    padding: 1rem;
    font-size: 1.2rem;
  }

  a {
    transition: color 0.2s, text-decoration 0.2s;
    font-weight: 500;
    
    &:hover {
      color: ${({ theme }) => theme.colors.secondary};
      text-decoration: underline;
    }
  }
`;
