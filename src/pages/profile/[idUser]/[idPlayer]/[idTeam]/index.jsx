
import React, { useEffect } from 'react';
import Card from '@/components/Card/Card';
import { Container, View } from '@/styles/Styled';

function Profile({ infos }) {

    const [imgBg, setImgBg] = React.useState('/images/bg-dust2.jpg');

    return (
        <>
            <Container bg={imgBg}>

                <View>
                    <Card infos={infos?.infos} />
                </View>

            </Container>
        </>
    )
}

export async function getServerSideProps(context) {
    const { idUser, idPlayer, idTeam } = context.params;

    const url = `${process.env.INTERNA_URL_API}/api/infos`

    const res = await fetch(url, {
        method: 'POST',
        body: JSON.stringify({
            idUser,
            idPlayer,
            idTeam
        })
    })
    const infos = await res.json()

    if (!infos || res.status !== 200) {
        return {
            redirect: {
                destination: '/',
                permanent: true,
            },
        }
    }

    return { props: { infos } }
}

export default Profile;