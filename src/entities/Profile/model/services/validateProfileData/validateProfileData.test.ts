import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { validateProfileData } from './validateProfileData';
import { ValidateProfileError } from '../../types/profile';

const data = {
    first: 'Alex',
    lastname: 'Ivanov',
    age: 30,
    avatar: 'somesome',
    city: 'Rome',
    country: Country.Sweden,
    currency: Currency.EUR,
    username: 'alexx77',
};

describe('validateProfileData.test', () => {
    test('Should handle success', async () => {
        const result = validateProfileData({ ...data });

        expect(result).toEqual([]);
    });

    test('Should handle no first and last name', async () => {
        const result = validateProfileData({ ...data, first: undefined, lastname: '' });

        expect(result).toEqual([
            ValidateProfileError.INCORRECT_USER_DATA,
        ]);
    });

    test('Should handle incorrect age', async () => {
        const result = validateProfileData({ ...data, age: undefined });

        expect(result).toEqual([
            ValidateProfileError.INCORRECT_AGE,
        ]);
    });

    test('Should handle incorrect country', async () => {
        const result = validateProfileData({ ...data, country: undefined });

        expect(result).toEqual([
            ValidateProfileError.INCORRECT_COUNTRY,
        ]);
    });

    test('Should handle incorrect many fields', async () => {
        const result = validateProfileData(undefined);

        expect(result).toEqual([
            ValidateProfileError.NO_DATA,
        ]);
    });
});
