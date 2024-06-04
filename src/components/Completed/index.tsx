import { Container } from "./style";

const Completed = () => {
    return (
        <Container>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="svg-success"
                viewBox="0 0 24 24"
            >
                <g
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeMiterlimit="10"
                >
                    <circle
                        className="success-circle-outline"
                        cx="12"
                        cy="12"
                        r="11.5"
                    />
                    <circle
                        className="success-circle-fill"
                        cx="12"
                        cy="12"
                        r="11.5"
                    />
                    <polyline
                        className="success-tick"
                        points="17,8.5 9.5,15.5 7,13"
                    />
                </g>
            </svg>{" "}
            <h2>
                Thankyou for you <br /> application!
            </h2>
        </Container>
    );
};

export default Completed;
