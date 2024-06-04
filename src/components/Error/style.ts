import styled from "styled-components";

const Container = styled.div`
    display: flex;
    border: 2px solid red;
    border-radius: 12px;
    background-color: #fef2f2;
    padding: 0.8em;
    font-size: 16px;
    svg {
        margin: auto 10px auto 0;
    }

    @keyframes smooth-appear {
        to {
            bottom: 20px;
            opacity: 1;
        }
    }
    & {
        position: fixed;
        bottom: -100%;
        opacity: 0;
        left: 50%;
        transform: translateX(-50%);

        animation: smooth-appear 0.5s ease forwards;
    }
`;

export { Container };
