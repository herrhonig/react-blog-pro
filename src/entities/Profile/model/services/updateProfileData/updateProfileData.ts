import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Profile, ValidateProfileError } from '../../types/profile';
import { getProfileForm } from '../../selectors/getProfileForm/getProfileForm';
import { validateProfileData } from '../validateProfileData/validateProfileData';

export const updateProfileData = createAsyncThunk<
  Profile,
  void,
  ThunkConfig<ValidateProfileError[]>
    >(
        'profile/updateProfileData',
        async (_, thunkApi) => {
            const {
                extra,
                rejectWithValue,
                getState,
            } = thunkApi;

            const formData = getProfileForm(getState());

            const errors = validateProfileData(formData);

            const profileId = formData.id;

            if (errors.length) {
                return rejectWithValue(errors);
            }

            try {
                const response = await extra.api.put<Profile>(
                    `/profile/${profileId}`,
                    formData,
                );

                if (!response) {
                    throw new Error('Failed to update form data');
                }

                return response.data;
            } catch (e) {
                console.error(e);

                return rejectWithValue([ValidateProfileError.SERVER_ERROR]);
            }
        },
    );
