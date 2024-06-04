export interface PersonalData {
    name: string;
    email: string;
    phone: string;
    address: string;
    city: string;
    country: string;
}

export interface BankData {
    accountNumber: string;
    bankName: string;
    branchName: string;
}

export interface BusinessData {
    businessName: string;
    businessType: string;
    businessAddress: string;
    businessEmail: string;
}

export const PERSONAL_DATA = "personalData";
export const BUSINESS_DATA = "businessData";
export const BANK_DATA = "bankData";
