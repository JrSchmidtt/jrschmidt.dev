// Card.tsx
import styled from 'styled-components';

export const Card = styled.div`
  background-color: ${({ theme }) => theme.colors.cardBackground};
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 16px;
  padding: 16px;
  transition: transform 0.2s ease-in-out;
  &:hover {
    transform: translateY(-5px);
  }
  
  h4 {
    margin: 0;
    font-size: 1.5rem;
    color: ${({ theme }) => theme.colors.primary};
    white-space: nowrap;
  }
  
  p {
    font-size: 1rem;
    color: ${({ theme }) => theme.colors.text};
  }
  
  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.link};
    &:hover {
      text-decoration: underline;
    }
  }
  
  ul {
    list-style: none;
    padding: 0;
    
    li {
      font-size: 0.9rem;
      color: ${({ theme }) => theme.colors.textSecondary};
    }
  }
`;

export default Card;
