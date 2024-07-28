import styled from 'styled-components'

const Banner = () => {
    return (
        <Container>
            <CallToAction>
                <h3>HELLO</h3>
                <h1>I AM JUNIOR SCHMIDT</h1>
                <p>🤔 Exploring new technologies and developing programming insights.</p>
                <Button>VER PROJETOS</Button>
            </CallToAction>
            <Profile>
                <img src='https://avatars.githubusercontent.com/u/28675529' alt="Junior Schmidt Profile" />
                <div>
                    <p>Desenvolvedor Full-Stack</p>
                </div>
            </Profile>
        </Container>
    )
}

const Profile = styled.div`
    width: 30%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    img {
        width: 400px;
        object-fit: cover;
        border-radius: 50%;
    }
`;

const Button = styled.button`
    background-color: ${({ theme }) => theme.colors.primary};
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
    transition: all 0.3s ease;
    &:hover {
        background-color: ${({ theme }) => theme.colors.secondary};
        color: #fff;
        transform: scale(1.1);
    }
`;

const Container = styled.div`
 width: 100%;
height: 100vh;
 display: flex;
 flex-direction: row;
 align-items: center;
 justify-content: center;
`

const CallToAction = styled.div`
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
`;

export { Banner }