import { Container } from "./style";

const ErrorIcon = () => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="red"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-alert-circle"
        >
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="12" y1="8" x2="12" y2="12"></line>
            <line x1="12" y1="16" x2="12.01" y2="16"></line>
        </svg>
    );
};
const Error = ({ message }: { message: string }) => {
    return (
        <Container className="error">
            <ErrorIcon />
            <div>{message}</div>
        </Container>
    );
};

export default Error;
