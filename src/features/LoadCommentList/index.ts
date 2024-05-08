export { CommentListSchema } from './model/types/CommentList.schema';

export { CommentListLoader } from './ui/CommentListLoader/CommentListLoader';

export {
    getArticleDetailsCommentsError,
    getArticleDetailsCommentsIsLoading,
} from './model/selectors/comments';

export { fetchCommentsByArticleId } from './model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
