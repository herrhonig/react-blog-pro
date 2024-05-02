import { EntityState } from '@reduxjs/toolkit';

import { Comment } from 'entities/Comment';

type CommentEntities = {
    [key in Comment['id']]: Comment;
}

export interface CommentListSchema extends EntityState<Comment> {
    isLoading: boolean;
    error?: string;
    // entities?: CommentEntities;
    // ids?: Comment['id'][];
}
