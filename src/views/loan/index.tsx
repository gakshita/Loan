import Loader from "../../components/Loader";
import Completed from "../../components/Completed";
import Error from "../../components/Error";
import { PrimaryButton, SecondaryButton } from "../../style";
import useLoan from "./hooks/useLoan";
import { Container } from "./style";

const Loan = () => {
    const { step, error, renderForm, nextStep, prevStep } = useLoan();

    return (
        <Container>
            {step < 4 && (
                <div className="loan-form">
                    <div className="step-info">Step {step}/3</div>
                    {renderForm()}
                    {error && <Error message={error} />}
                    <div className="action">
                        <SecondaryButton
                            onClick={prevStep}
                            disabled={step === 1}
                        >
                            Previous
                        </SecondaryButton>
                        <PrimaryButton onClick={nextStep}>Next</PrimaryButton>
                    </div>
                </div>
            )}
            {step === 4 && <Loader />}
            {step === 5 && <Completed />}
        </Container>
    );
};
export default Loan;
