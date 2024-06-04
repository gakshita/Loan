import styled from "styled-components";

const Container = styled.div`
    width: 500px;
    text-align: left;
    border: 1px solid #ccc;
    border-radius: 12px;
    height: 700px;

    .step-info {
        font-weight: 500;
        color: grey;
    }
    .loan-form {
        padding: 3em;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 100%;
    }
    .action {
        display: flex;
        justify-content: end;
        gap: 1em;

        * {
            width: 100%;
        }
    }
`;

export { Container };
