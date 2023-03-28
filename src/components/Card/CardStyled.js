import styled from "styled-components";

export const CardStyled = styled.div`
    position: relative;
    display: flex;
    background-image: ${props => props.bg};
    backdrop-filter: blur(5px);
    border-radius: 20px;
    border-top: 1px solid rgba(255,255,255,0.5);
    border-left: 1px solid rgba(255,255,255,0.5);
    box-shadow: 20px 20px 50px rgba(0,0,0,0.5);
    height: 400px;
    width: 700px;
    overflow: hidden;
    transform-style: preserve-3d;

    .img-icon{
        color: var(--laranja);
        background-color: whitesmoke;
        height: 120px;
        width: 120px;
        padding: 10px;
        border-radius: 50%;
        margin: 30px 30px 0 30px;
        transform: translateZ(20px);
        transform-style: preserve-3d;
    }
    
    .foto{
        height: 120px;
        width: 120px;
        border-radius: 50%;
        margin: 30px 30px 0 30px;
        object-fit: cover;
        box-shadow: 0px 5px 50px rgba(0,0,0,0.5);
        transform: translateZ(20px);
        transform-style: preserve-3d;
    }

    .nick{
        font-family: 'montserrat';
        font-weight: 900;
        font-size: 2.5rem;
        color: ${props => props.primary};
        text-shadow: 0 0 10px rgba(0,0,0,0.5);
        margin-top: calc(30px + 1.25rem);
        transform: translateZ(20px);
        transform-style: preserve-3d;
    }
    
    .name{
        font-family: 'poppins';
        font-weight: 700;
        font-size: 1.6rem;
        color: ${props => props.secundary};
        text-shadow: 0 0 10px rgba(0,0,0,0.5);
        transform: translateZ(20px);
        transform-style: preserve-3d;
    }


`;

export const Stats = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    margin: 0px 0px 30px 40px;
    display: flex;
    flex-direction: column;
    gap: 3px;
    transform-style: preserve-3d;
    transform: translateZ(20px);

    .stat{
        display: flex;
        align-items: center;
        gap: 5px;
        font-family: 'montserrat';
        font-size: 1.2rem;
        font-weight: 400;
        color: ${props => props.secundary};
        text-shadow: 0 0 10px rgba(0,0,0,0.5);
        transform: translateZ(20px);
        transform-style: preserve-3d;

        span, .stat-icon{
            font-weight: 900;
            font-family: 'poppins';
            color: ${props => props.primary};
            transform: translateZ(20px);
            transform-style: preserve-3d;
        }

        span{
            margin-right: 5px;
        }
    }
`;

export const Favoritos = styled.div`
    position: absolute;
    width: 50%;
    height: 100%;
    right: 0;
    z-index: -1;
`;

export const Time = styled.img`
    position: absolute;
    width: auto;
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%);
    height: 80%;
    opacity: 0.6;
`;

export const Player = styled.img`
    position: absolute;
    width: auto;
    height: 70%;
    bottom: 0;
    left: 50%;
    transform: translateZ(20px) translateX(-50%);
    transform-style: preserve-3d;
`;