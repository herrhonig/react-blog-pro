import { DeepPartial } from 'global/types';

import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { profileActions, profileReducer } from './profileSlice';
import { ProfileSchema, ValidateProfileError } from '../types/profile';
import { updateProfileData } from '../services/updateProfileData/updateProfileData';

const data = {
    first: 'Alex',
    lastname: 'Ivanov',
    age: 30,
    avatar: '',
    city: 'Rome',
    country: Country.Sweden,
    currency: Currency.EUR,
    username: 'alexx77',
};

describe('profileSlice.test', () => {
    test('Should set profile readonly', () => {
        const state: DeepPartial<ProfileSchema> = { readonly: false };

        expect(profileReducer(
          state as ProfileSchema,
          profileActions.setReadonly(true),
        )).toEqual({ readonly: true });
    });

    // TODO: fix this test

    // test('Should cancel profile edit ', () => {
    //     const state: DeepPartial<ProfileSchema> = { data, form: { first: 'rrr' } };

    //     expect(profileReducer(
    //       state as ProfileSchema,
    //       profileActions.cancelEdit(),
    //     )).toEqual({
    //         validateErrors: undefined,
    //         data,
    //         form: data,
    //         error: undefined,
    //         isLoading: false,
    //         readonly: true,
    //     });
    // });

    test('Should update profile data ', () => {
        const state: DeepPartial<ProfileSchema> = { form: { first: 'sss' } };

        expect(profileReducer(
          state as ProfileSchema,
          profileActions.updateData({ first: 'sss' }),
        )).toEqual({
            form: {
                first: 'sss',
            },
        });
    });

    test('Should test update profile service pending', () => {
        const state: DeepPartial<ProfileSchema> = {
            isLoading: false,
            validateErrors: [ValidateProfileError.SERVER_ERROR],
        };

        expect(profileReducer(
        state as ProfileSchema,
        updateProfileData.pending,
        )).toEqual({
            isLoading: true,
            validateErrors: undefined,
        });
    });

    test('Should test update profile service fulfilled', () => {
        const state: DeepPartial<ProfileSchema> = {
            isLoading: true,
        };

        expect(profileReducer(
      state as ProfileSchema,
      updateProfileData.fulfilled(data, ''),
        )).toEqual({
            isLoading: false,
            data,
            form: data,
            readonly: true,
            alidateErrors: undefined,
        });
    });
});
