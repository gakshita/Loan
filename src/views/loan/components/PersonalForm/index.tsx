import { FlexRow, StyledInput, StyledLable } from "../../../../style";
import { PersonalData } from "../../interfaces";

interface PersonalFormProps {
    data: PersonalData;
    setter: (key: keyof PersonalData, value: any) => void;
}

const PersonalForm: React.FC<PersonalFormProps> = ({ data, setter }) => {
    return (
        <div>
            <h1>Personal Form</h1>
            <form>
                <StyledLable>Name</StyledLable>
                <StyledInput
                    type="text"
                    placeholder="Name"
                    value={data?.name}
                    required
                    onChange={(e) => setter("name", e.target.value)}
                />

                <StyledLable>Email</StyledLable>
                <StyledInput
                    type="email"
                    placeholder="Email"
                    value={data?.email}
                    required
                    onChange={(e) => setter("email", e.target.value)}
                />

                <StyledLable>Phone Number</StyledLable>
                <StyledInput
                    type="number"
                    placeholder="phone"
                    value={data?.phone}
                    required
                    onChange={(e) => setter("phone", e.target.value)}
                />

                <StyledLable>Address</StyledLable>
                <StyledInput
                    type="text"
                    placeholder="Address"
                    value={data?.address}
                    required
                    onChange={(e) => setter("address", e.target.value)}
                />
                <FlexRow>
                    <div>
                        <StyledLable>City</StyledLable>
                        <StyledInput
                            type="text"
                            placeholder="City"
                            value={data?.city}
                            required
                            onChange={(e) => setter("city", e.target.value)}
                        />
                    </div>
                    <div>
                        <StyledLable>Country</StyledLable>
                        <StyledInput
                            type="text"
                            placeholder="Country"
                            value={data?.country}
                            required
                            onChange={(e) => setter("country", e.target.value)}
                        />
                    </div>
                </FlexRow>
            </form>
        </div>
    );
};

export default PersonalForm;
