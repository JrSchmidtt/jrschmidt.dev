import styled from "styled-components";

const Banner = () => {
  return (
    <Container>
      <CallToAction>
        <h3>HELLO</h3>
        <h1>I AM JUNIOR SCHMIDT</h1>
        <h4>
          🤔 Exploring new technologies and developing programming insights.
        </h4>
        <Button>VER PROJETOS</Button>
      </CallToAction>
      <Profile>
        <img
          src="https://avatars.githubusercontent.com/u/28675529"
          alt="Junior Schmidt Profile"
        />
        <div>
          <p>Web Developer - Full Stack</p>
        </div>
      </Profile>
    </Container>
  );
};

const Profile = styled.div`
  width: 30%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1rem;
  img {
    width: 400px;
    object-fit: cover;
    border-radius: 50%;
  }
  backdrop-filter: blur(7px) saturate(180%);
  -webkit-backdrop-filter: blur(7px) saturate(180%);
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.125);
  // mobile
  @media (max-width: 768px) {
    display: none;
  }
`;

const Button = styled.button`
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease;
  &:hover {
    color: #fff;
    transform: scale(1.1);
  }
  background-color: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(30px);
  color: rgba(255, 255, 255, 0.8);
`;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  // mobile
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const CallToAction = styled.div`
  gap: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 70%;
  h3 {
    font-size: 1.5rem;
    color: #fff;
  }
  h1 {
    font-size: 3.5rem;
    color: #fff;
  }
  p {
    font-size: 1.5rem;
    color: #fff;
  }
  // mobile
  @media (max-width: 768px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 1rem;
    h1 {
      font-size: 1.5rem;
    }
  }
`;

export { Banner };