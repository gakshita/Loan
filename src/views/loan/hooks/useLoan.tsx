import { useCallback, useEffect, useState } from "react";
import {
    PersonalData,
    BusinessData,
    BankData,
    PERSONAL_DATA,
    BUSINESS_DATA,
    BANK_DATA
} from "../interfaces";
import { debouncedLocalStorageSetter } from "../../../utils";
import PersonalForm from "../components/PersonalForm";
import BusinessForm from "../components/BusinessForm";
import BankForm from "../components/BankForm";

const useLoan = () => {
    const [personalData, setPersonalData] = useState<PersonalData>({
        name: "",
        email: "",
        phone: "",
        address: "",
        city: "",
        country: ""
    });
    const [businessData, setBusinessData] = useState<BusinessData>({
        businessName: "",
        businessType: "",
        businessAddress: "",
        businessEmail: ""
    });
    const [bankData, setBankData] = useState<BankData>({
        accountNumber: "",
        bankName: "",
        branchName: ""
    });
    const [error, setError] = useState<string>("");
    const [step, setStep] = useState(1);

    const setCachedData = () => {
        const cachedPersonalData = localStorage.getItem(PERSONAL_DATA);
        const cachedBusinessData = localStorage.getItem(BUSINESS_DATA);
        const cachedBankData = localStorage.getItem(BANK_DATA);
        const cachedStep = localStorage.getItem("step");
        if (cachedPersonalData) {
            setPersonalData(JSON.parse(cachedPersonalData));
        }
        if (cachedBusinessData) {
            setBusinessData(JSON.parse(cachedBusinessData));
        }
        if (cachedBankData) {
            setBankData(JSON.parse(cachedBankData));
        }
        if (cachedStep) {
            setStep(JSON.parse(cachedStep));
        }
    };

    const validatePersonalData = () => {
        if (
            !personalData.name ||
            !personalData.email ||
            !personalData.phone ||
            !personalData.address ||
            !personalData.city ||
            !personalData.country
        ) {
            setError("Please fill all fields");
            return false;
        }
        if (personalData.email.indexOf("@") === -1) {
            setError("Please enter a valid email");
            return false;
        }
        if (personalData.phone.length < 10) {
            setError("Please enter a valid phone number");
            return false;
        }

        return true;
    };

    const validateBusinessData = () => {
        if (
            !businessData.businessName ||
            !businessData.businessType ||
            !businessData.businessAddress ||
            !businessData.businessEmail
        ) {
            setError("Please fill all fields");
            return false;
        }
        if (businessData.businessEmail.indexOf("@") === -1) {
            setError("Please enter a valid email");
            return false;
        }

        return true;
    };

    const validateBankData = () => {
        if (
            !bankData.accountNumber ||
            !bankData.bankName ||
            !bankData.branchName
        ) {
            setError("Please fill all fields");
            return false;
        }
        return true;
    };

    const nextStep = () => {
        if (step === 1 && !validatePersonalData()) return;
        if (step === 2 && !validateBusinessData()) return;
        if (step === 3 && !validateBankData()) return;
        setError("");
        setStep(step + 1);
        localStorage.setItem("step", JSON.stringify(step + 1));
    };

    const prevStep = () => {
        setError("");
        setStep(step - 1);
        localStorage.setItem("step", JSON.stringify(step - 1));
    };

    const personalDataSetter = useCallback(
        debouncedLocalStorageSetter(PERSONAL_DATA),
        []
    );
    const businessDataSetter = useCallback(
        debouncedLocalStorageSetter(BUSINESS_DATA),
        []
    );
    const bankDataSetter = useCallback(
        debouncedLocalStorageSetter(BANK_DATA),
        []
    );

    const setData = (type: string) => {
        let data: PersonalData | BusinessData | BankData | null = null;
        return (key: any, value: any) => {
            setError("");
            if (type === PERSONAL_DATA) {
                data = { ...personalData };
                data[key as keyof PersonalData] = value;
                setPersonalData(data);
                personalDataSetter(data);
            } else if (type === BUSINESS_DATA) {
                data = { ...businessData };
                data[key as keyof BusinessData] = value;
                setBusinessData(data);
                businessDataSetter(data);
            } else if (type === BANK_DATA) {
                data = { ...bankData };
                data[key as keyof BankData] = value;
                setBankData(data);
                bankDataSetter(data);
            }
        };
    };

    useEffect(() => {
        let timerId: NodeJS.Timeout;
        if (step === 4) {
            setTimeout(() => {
                nextStep();
            }, 2000);
        }
        return () => {
            clearTimeout(timerId);
        };
    }, [step]);

    useEffect(() => {
        setCachedData();
    }, []);

    const renderForm = () => {
        switch (step) {
            case 1:
                return (
                    <PersonalForm
                        data={personalData}
                        setter={setData(PERSONAL_DATA)}
                    />
                );
            case 2:
                return (
                    <BusinessForm
                        data={businessData}
                        setter={setData(BUSINESS_DATA)}
                    />
                );
            case 3:
                return <BankForm data={bankData} setter={setData(BANK_DATA)} />;
        }
    };
    return {
        step,
        error,
        renderForm,
        nextStep,
        prevStep
    };
};
export default useLoan;
