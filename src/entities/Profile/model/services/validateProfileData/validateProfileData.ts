/* eslint-disable no-unused-vars */

/**
 * SIMPLE PROFILE VALIDATION
 */

import { Profile, ValidateProfileError } from '../../types/profile';

type ValidateProfileParams = Profile;
type ValidateProfileResult = ValidateProfileError[];

interface ValidateProfile {
    (params: ValidateProfileParams): ValidateProfileResult
}

export const validateProfileData: ValidateProfile = (profile?: Profile) => {
    if (!profile) {
        return [ValidateProfileError.NO_DATA];
    }

    const {
        username,
        lastname,
        age,
        avatar,
        first,
        city,
        country,
        currency,
    } = profile;

    const errors: ValidateProfileError[] = [];

    if (!first || !lastname) {
        errors.push(ValidateProfileError.INCORRECT_USER_DATA);
    }

    if (!age || !Number.isInteger(age)) {
        errors.push(ValidateProfileError.INCORRECT_AGE);
    }

    if (!country) {
        errors.push(ValidateProfileError.INCORRECT_COUNTRY);
    }

    return errors;
};
