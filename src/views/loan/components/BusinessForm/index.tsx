import { StyledInput, StyledLable } from "../../../../style";
import { BusinessData } from "../../interfaces";

interface BusinessFormProps {
    data: BusinessData;
    setter: (key: keyof BusinessData, value: any) => void;
}
const BusinessForm: React.FC<BusinessFormProps> = ({ data, setter }) => {
    return (
        <div>
            <h1>Business Form</h1>
            <form>
                <StyledLable>Business Name</StyledLable>
                <StyledInput
                    type="text"
                    placeholder="Business Name"
                    value={data?.businessName}
                    required
                    onChange={(e) => setter("businessName", e.target.value)}
                />
                <StyledLable>Business Type</StyledLable>
                <StyledInput
                    type="text"
                    placeholder="Business Type"
                    value={data?.businessType}
                    required
                    onChange={(e) => setter("businessType", e.target.value)}
                />
                <StyledLable>Business Email</StyledLable>
                <StyledInput
                    type="email"
                    placeholder="Business Email"
                    value={data?.businessEmail}
                    required
                    onChange={(e) => setter("businessEmail", e.target.value)}
                />
                <StyledLable>Business Address</StyledLable>
                <StyledInput
                    type="text"
                    placeholder="Business Address"
                    value={data?.businessAddress}
                    required
                    onChange={(e) => setter("businessAddress", e.target.value)}
                />
            </form>
        </div>
    );
};

export default BusinessForm;
