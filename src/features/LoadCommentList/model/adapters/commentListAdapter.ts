import { createEntityAdapter } from '@reduxjs/toolkit';
import { Comment } from 'entities/Comment';

export const commentListAdapter = createEntityAdapter({
    selectId: (comment: Comment) => comment.id,
});
