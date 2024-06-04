import { styled } from "styled-components";

const Container = styled.div`
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    flex-direction: column;
    text-align: center;

    h2 {
        animation: fadeIn 3s;
        @keyframes fadeIn {
            0% {
                opacity: 0;
            }
            100% {
                opacity: 1;
            }
        }
    }
    .svg-success {
        display: inline-block;
        vertical-align: top;
        width: 65px;
        opacity: 1;
        overflow: visible;

        @keyframes success-tick {
            0% {
                stroke-dashoffset: 16px;
                opacity: 1;
            }

            100% {
                stroke-dashoffset: 31px;
                opacity: 1;
            }
        }

        @keyframes success-circle-outline {
            0% {
                stroke-dashoffset: 72px;
                opacity: 1;
            }

            100% {
                stroke-dashoffset: 0px;
                opacity: 1;
            }
        }

        @keyframes success-circle-fill {
            0% {
                opacity: 0;
            }

            100% {
                opacity: 1;
            }
        }

        .success-tick {
            fill: none;
            stroke-width: 1px;
            stroke: #ffffff;
            stroke-dasharray: 15px, 15px;
            stroke-dashoffset: -14px;
            animation: success-tick 450ms ease 1400ms forwards;
            opacity: 0;
        }

        .success-circle-outline {
            fill: none;
            stroke-width: 1px;
            stroke: black;
            stroke-dasharray: 72px, 72px;
            stroke-dashoffset: 72px;
            animation: success-circle-outline 300ms ease-in-out 800ms forwards;
            opacity: 0;
        }

        .success-circle-fill {
            fill: black;
            stroke: none;
            opacity: 0;
            animation: success-circle-fill 1ms ease-out 1100ms forwards;
        }

        // Can't animate stroke-dashoffset on IE 10 and 11, just show svg instead
        @media screen and (-ms-high-contrast: active),
            screen and (-ms-high-contrast: none) {
            .success-tick {
                stroke-dasharray: 0;
                stroke-dashoffset: 0;
                animation: none;
                opacity: 1;
            }

            .success-circle-outline {
                stroke-dasharray: 0;
                stroke-dashoffset: 0;
                animation: none;
                opacity: 1;
            }

            .success-circle-fill {
                animation: none;
                opacity: 1;
            }
        }
    }
`;
export { Container };
