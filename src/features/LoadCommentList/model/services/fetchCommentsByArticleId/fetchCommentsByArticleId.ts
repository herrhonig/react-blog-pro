import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Comment } from 'entities/Comment';

export const fetchCommentsByArticleId = createAsyncThunk<Comment[], string | undefined, ThunkConfig<string>>(
    'comments/fetchCommentsByArticleId',
    async (articleId, thunkApi) => {
        const {
            extra,
            rejectWithValue,
        } = thunkApi;

        if (!articleId) {
            return rejectWithValue('Invalid articleId parameter');
        }

        try {
            const response = await extra.api.get<Comment[]>('/comments/', {
                params: {
                    articleId,
                    _expand: 'user', // Note: По id пользователя будет подхватываться relation userId из db.json
                },
            });

            if (!response) {
                throw new Error('Server error');
            }

            return response.data;
        } catch (e) {
            return rejectWithValue('Error');
        }
    },
);
