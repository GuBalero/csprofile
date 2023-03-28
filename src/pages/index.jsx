import { Ak47, Button, Container, Content, Layer, M4, Main, Menu } from '@/styles/Styled'
import React from 'react'

export default function Home() {
  return (
    <>
      <Container bg="/images/bg-dust2.jpg">
        <Layer />

        <Content>
          <header>
            <Menu>
              <img src="/images/logo-2.png" alt="logo" />
              <h1>CS Profile</h1>
            </Menu>
          </header>

          <Main>
            <h1>Gere seu perfil!</h1>

            <h3>Um cartão de player personalizado com o que você mais gosta no Counter-Strike</h3>

            <a href="/generate">
              <Button>Gerar</Button>
            </a>
          </Main>

          <Ak47 src='/images/arma-ak47.png' />
          <M4 src='/images/arma-m4a4.png' />

        </Content>

      </Container>
    </>
  )
}

