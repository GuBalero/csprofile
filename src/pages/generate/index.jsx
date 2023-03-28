import React from 'react';
import { Button, Container, Content, Inputs, Layer, Main, Menu } from '@/styles/Styled';
import { BsInfoCircleFill } from 'react-icons/bs';

function Generate() {

    function handleGenerate() {

        const inputUser = document.querySelector('#steam').value;
        const inputPlayer = document.querySelector('#player').value;
        const inputTeam = document.querySelector('#team').value;

        if (inputUser !== '' || inputPlayer !== '' || inputTeam !== '') {

            if (!inputUser.includes('https://steamcommunity.com/profiles/'))
                return alert('Link de steam inválida');

            if (!inputPlayer.includes('https://www.hltv.org/player/'))
                return alert('Link de player inválido');

            if (!inputTeam.includes('https://www.hltv.org/team/'))
                return alert('Link de time inválido');

            let idUser = inputUser.replace('https://steamcommunity.com/profiles/', '').replace('/', '').trim();
            let idPlayer = inputPlayer.replace('https://www.hltv.org/player/', '').split('/');
            let idTeam = inputTeam.replace('https://www.hltv.org/team/', '').split('/');

            if (idUser === '' || isNaN(parseInt(idUser)))
                return alert('Link de steam inválida');

            if (idPlayer.length < 2 || idPlayer[0].trim() === '' || isNaN(parseInt(idPlayer[0].trim())))
                return alert('Link de player inválido');

            if (idTeam.length < 2 || idTeam[0].trim() === '' || isNaN(parseInt(idTeam[0].trim())))
                return alert('Link de time inválido');

            window.location.href = `/profile/${idUser}/${idPlayer[0].trim()}/${idTeam[0].trim()}`;

        } else {
            alert('Preencha todos os campos');
            return;
        }

    }

    return (
        <>
            <Container bg="/images/bg-dust2.jpg">
                <Layer />

                <Content>
                    <header>
                        <a href="/">
                            <Menu>
                                <img src="/images/logo-2.png" alt="logo" />
                                <h1>CS Profile</h1>
                            </Menu>
                        </a>
                    </header>

                    <Inputs>
                        <h2>Preencha os campos</h2>

                        <div className="campo">
                            <label htmlFor="steam">Sua Steam</label>
                            <a href="http://" target="_blank" rel="noopener noreferrer">
                                <BsInfoCircleFill className='info' />
                            </a>
                            <br />
                            <input type="text" name="steam" id="steam" placeholder='Steam link' />
                        </div>

                        <div className="campo">
                            <label htmlFor="player">Player favorito</label>
                            <a href="http://" target="_blank" rel="noopener noreferrer">
                                <BsInfoCircleFill className='info' />
                            </a>
                            <br />
                            <input type="text" name="player" id="player" placeholder='HLTV Link' />
                        </div>

                        <div className="campo">
                            <label htmlFor="team">Time favorito</label>
                            <a href="http://" target="_blank" rel="noopener noreferrer">
                                <BsInfoCircleFill className='info' />
                            </a>
                            <br />
                            <input type="text" name="team" id="team" placeholder='HLTV Link' />
                        </div>

                        <Button onClick={handleGenerate}>Gerar</Button>
                    </Inputs>

                </Content>

            </Container>
        </>
    )
}

export default Generate;