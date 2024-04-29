export { Article } from './model/types/article';
export { ArticleDetailsSchema } from './model/types/articleDetails.schema';

export { ArticleDetails } from './ui/ArticleDetails/ArticleDetails';

export {
    getArticleDetailsData,
    getArticleDetailsError,
    getArticleDetailsIsLoading,
} from './model/selectors/getArticleDetails/getArticleDetails';
