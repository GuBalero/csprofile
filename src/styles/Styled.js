import styled from "styled-components";

export const Container = styled.div`
    background-image: url(${props => props.bg});
    height: 100vh;
    width: 100vw;
    position: relative;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
`;

export const Content = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    z-index: 1;
    backdrop-filter: blur(5px);
`;

export const Layer = styled.div`
    background-color: var(--azul);
    height: 100vh;
    width: 100vw;
    position: absolute;
    opacity: 0.8;
    top: 0;
    left: 0;
    z-index: 0;
`;

export const Menu = styled.nav`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    padding: 20px;
    z-index: 10;

    h1{
        font-family: 'cs_regular';
        font-size: 4rem;
        color: var(--laranja);
    }

    img{
        height: 80px;
        width: 80px;
    }
`;

export const Main = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 100px;
    color: whitesmoke;
    height: 30%;

    h1{
        font-family: 'poppins';
        font-weight: 900;
        font-size: 2.4rem;
    }

    h3{
        font-family: 'roboto';
        font-weight: 400;
        font-size: 1.4rem;
        margin-top: 20px;
    }
`;

export const Button = styled.button`

    margin-top: 50px;
    color: #fff;
    border: 1px solid var(--laranja);
    border-radius: 4px;
    padding: 0.8em 2em;
    background: var(--laranja);
    transition: 0.2s;
    cursor: pointer;
    font-weight: 700;
    font-family: 'montserrat';
    font-size: 1.2rem;

    :hover {
        color: var(--laranja);
        transform: translate(-0.25rem,-0.25rem);
        background: white;
        box-shadow: 0.25rem 0.25rem var(--laranja);
    }

    :active {
        transform: translate(0);
        box-shadow: none;
    }
`;

export const View = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const Inputs = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-top: 40px;
    align-items: center;

    h2{
        font-family: 'poppins';
        font-weight: 700;
        font-size: 1.8rem;
        color: whitesmoke;
        margin-bottom: 20px;
    }

    .campo{
        width: 100%;
        text-align: center;
        font-size: 1.2rem;
        margin-top: 10px;
    }

    .info{
        margin-left: 10px;
        cursor: pointer;
        color: #888;

        :hover{
            color: #bbb;
        }
    }

    label{
        font-family: 'roboto';
        color: var(--laranja);
        font-weight: 600;
    }

    input[type="text"]{
        width: 50%;
        background-color: whitesmoke;
        border-radius: 8px;
        font-family: 'roboto';
        padding: 10px;
        font-size: 1.2rem;
        text-align: center;
        border: 3px solid #aaa;
        outline: none;
        margin-top: 5px;

        :focus, :not(:placeholder-shown){
            border: 3px solid var(--laranja);
        }
    }
`;

export const Ak47 = styled.img`
    position: absolute;
    width: 1000px;
    bottom: -200px;
    left: -350px;
`;

export const M4 = styled.img`
    position: absolute;
    width: 1000px;
    bottom: -30px;
    right: -230px;
`;