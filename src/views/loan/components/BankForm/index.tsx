import { StyledInput, StyledLable } from "../../../../style";
import { BankData } from "../../interfaces";

interface BankFormProps {
    data: BankData;
    setter: (key: keyof BankData, value: any) => void;
}

const BankForm: React.FC<BankFormProps> = ({ data, setter }) => {
    return (
        <div>
            <h1>Bank Form</h1>
            <form>
                <StyledLable>Account Number</StyledLable>
                <StyledInput
                    type="number"
                    placeholder="Account Number"
                    value={data?.accountNumber}
                    required
                    onChange={(e) => setter("accountNumber", e.target.value)}
                />
                <StyledLable>Bank Name</StyledLable>
                <StyledInput
                    type="text"
                    placeholder="Bank Name"
                    value={data?.bankName}
                    required
                    onChange={(e) => setter("bankName", e.target.value)}
                />
                <StyledLable>Branch Name</StyledLable>
                <StyledInput
                    type="text"
                    placeholder="Branch Name"
                    value={data?.branchName}
                    required
                    onChange={(e) => setter("branchName", e.target.value)}
                />
            </form>
        </div>
    );
};

export default BankForm;
