/* eslint-disable no-unused-vars */
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';

export enum ValidateProfileError {
    INCORRECT_USER_DATA = 'INCORRECT_USER_DATA',
    INCORRECT_AGE = 'INCORRECT_AGE',
    INCORRECT_COUNTRY = 'INCORRECT_COUNTRY',
    NO_DATA = 'NO_DATA',
    SERVER_ERROR = 'SERVER_ERROR'
}

interface BaseProfile {
    id: string;
    first: string;
    lastname: string;
    age: number;
    currency: Currency;
    country: Country;
    city: string;
    username: string;
    avatar: string;
}

export type Profile = Partial<BaseProfile>;

export interface ProfileSchema {
    data?: Profile;
    form?: Profile;
    error?: string;
    isLoading?: boolean;
    readonly?: boolean;
    validateErrors?: ValidateProfileError[];
}
