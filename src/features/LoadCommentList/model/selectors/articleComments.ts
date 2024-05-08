import { StateSchema } from 'app/providers/StoreProvider';
import { commentListAdapter } from '../adapters/commentListAdapter';

// selectors:
export const getArticleDetailsCommentsSelector = commentListAdapter.getSelectors<StateSchema>(
    (state) => state.articleDetailsComments || commentListAdapter.getInitialState(),
);

export const getArticleDetailsCommentsError = (state: StateSchema) => state.articleDetailsComments?.error;

export const getArticleDetailsCommentsIsLoading = (state: StateSchema) => state.articleDetailsComments?.isLoading || false;
