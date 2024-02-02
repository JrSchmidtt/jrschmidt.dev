import styled from 'styled-components'

const Banner = () => {
    return (
        <>
            <Container>
                <CallToAction>
                    <h3>HELLO</h3>
                    <h1>I AM JUNIOR SCHMIDT</h1>
                    <p>Explorando novas tecnologias e desenvolvendo perspicácia em programação.</p>
                </CallToAction>
                <Button>VER PROJETOS</Button>
            </Container>
        </>
    )
}

const Button = styled.button`
    background-color: #1f2447;
    border: 1px solid #000;
    padding: 10px 20px;
    border-radius: 5px;
    font-size: 1.2rem;
    font-weight: 700;
    color: #000;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    &:hover {
        background-color: #000;
        color: #fff;
    }
`;

const Container = styled.div`
 width: 100%;
 height: 100vh;
`

const CallToAction = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
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