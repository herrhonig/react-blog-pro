import { User } from 'entities/User';

/* eslint-disable no-unused-vars */
export type ArticleType = 'IT' | 'SCIENCE' | 'ECONOMICS';

export type ArticleBlockType = 'CODE' | 'TEXT' | 'IMAGE' | 'WARNING';

export interface ArticleBlockBase {
    id: string;
    type: ArticleBlockType;
}
/**
 * Несколько типов блоков, их которых строится статья.
 * Например, текстовый блок или блок с кодом;
 * ||
 * \/
 */

export interface ArticleCodeBlock extends ArticleBlockBase {
    type: 'CODE';
    code: string;
}

export interface ArticleImageBlock extends ArticleBlockBase {
    type: 'IMAGE';
    src: string;
    title: string;
}

export interface ArticleTextBlock extends ArticleBlockBase {
    type: 'TEXT';
    paragraphs: string[];
    title?: string;
}

export type ArticleBlock = ArticleTextBlock | ArticleImageBlock | ArticleCodeBlock;

export interface Article {
    id: string;
    user: User;
    title: string;
    subtitle: string;
    img: string;
    views: number;
    createdAt: string;
    type: ArticleType[];
    blocks: ArticleBlock[];
}

export enum ArticleView {
    BIG = 'BIG',
    SMALL = 'SMALL',
}
