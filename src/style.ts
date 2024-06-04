import { styled } from "styled-components";
const PrimaryButton = styled.button`
    border-radius: 8px;
    border: 1px solid transparent;
    padding: 0.6em 1.2em;
    font-size: 1em;
    font-weight: 500;
    font-family: inherit;
    background-color: #1a1a1a;
    cursor: pointer;
    transition: border-color 0.25s;
    color: #fff;

    &:disabled,
    &[disabled] {
        cursor: not-allowed;
        background-color: #ccc;
    }
`;

const SecondaryButton = styled.button`
    border-radius: 8px;
    border: 1px solid #1a1a1a;
    padding: 0.6em 1.2em;
    font-size: 1em;
    font-weight: 500;
    font-family: inherit;
    background-color: transparent;
    cursor: pointer;
    transition: border-color 0.25s;
    color: black;

    &:disabled,
    &[disabled] {
        cursor: not-allowed;
        color: #ccc;
        border-color: #ccc;
    }
`;

const StyledInput = styled.input`
    border-radius: 8px;
    border: 1px solid #ccc;
    padding: 0.6em 1.2em;
    font-size: 1em;
    font-weight: 500;
    font-family: inherit;
    background-color: transparent;
    color: black;
    width: 100%;
    margin-bottom: 1em;
    &:disabled,
    &[disabled] {
        cursor: not-allowed;
        color: #ccc;
        border-color: #ccc;
    }
`;

const StyledLable = styled.label`
    font-weight: 500;
    font-size: 1em;
    margin-bottom: 0.8em;
    color: #808080;
`;

const FlexRow = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1em;
`;

export { PrimaryButton, SecondaryButton, StyledInput, StyledLable, FlexRow };
