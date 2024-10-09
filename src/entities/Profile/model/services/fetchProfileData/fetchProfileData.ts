import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Profile } from '../../types/profile';

export const fetchProfileData = createAsyncThunk<Profile, string, ThunkConfig<string>>(
    'profile/fetchProfileData',
    async (profileId, thunkApi) => {
        const {
            extra,
            rejectWithValue,
        } = thunkApi;

        try {
            const response = await extra.api.get<Profile>(`/profile/${profileId}`);

            if (!response) {
                throw new Error('Server error');
            }

            return response.data;
        } catch (e) {
            console.error(e);

            return rejectWithValue('Error');
        }
    },
);
