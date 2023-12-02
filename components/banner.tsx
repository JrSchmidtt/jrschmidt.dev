import styled from 'styled-components'

const Banner = () => {
    return (
        <Container>
            <h3>HELLO</h3>
            <h1>I AM JUNIOR SCHMIDT</h1>
            <p>Explorando novas tecnologias e desenvolvendo perspicácia em programação.</p>
        </Container>
    )
}

const Container = styled.div`
 width: 100%;
 height: 100vh;
`

export { Banner }