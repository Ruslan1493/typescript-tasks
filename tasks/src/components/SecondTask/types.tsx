export interface Environment extends Main {
    username: string,
    email: string,
    date_of_birth: string
}

export interface Social extends Main {
    id: number,
    country: string,
    city: string
}

export interface Governance extends Main {
    id: number,
    account_number: string,
    bank_name: string
}

export interface Main {
    username: string,
    email: string,
    date_of_birth: string,
    id: number,
    account_number: string,
    bank_name: string
}

export interface ESGTypes {
    environment: '',
    social: '',
    governance: ''
}