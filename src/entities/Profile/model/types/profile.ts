import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';

interface BaseProfile {
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
    isLoading: boolean;
    readonly: boolean;
}
