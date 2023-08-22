/* eslint-disable no-param-reassign */
import path from 'path';
import { DefinePlugin, RuleSetRule } from 'webpack';

import { WebpackConfiguration } from 'webpack-dev-server';

import { buildCssLoader } from '../build/loaders/buildCssLoader';

import type { BuildPaths } from '../build/types/config';

export default ({ config }: { config: WebpackConfiguration }) => {
    const paths: BuildPaths = {
        build: '',
        html: '',
        entry: '',
        src: path.resolve(__dirname, '..', '..', 'src'),

    };

    config.resolve?.modules?.push(paths.src);
    config.resolve?.extensions?.push('.ts', '.tsx');

    /**
     * Находим правило, что обрабатывает svg:
     * Если (if) правило найдено - исключаем (exclude) обработку svg.
     * Иначе - возвращаем все правило, как есть.
     * ||
     * ||
     * \/
     */

    // @ts-ignore

    config.module.rules = config.module.rules.map((rule: RuleSetRule) => {
        if (/svg/.test(rule.test as string)) {
            return { ...rule, exclude: /\.svg$/i };
        }

        return rule;
    });
    // @ts-ignore

    config.module.rules.push({
        test: /\.svg$/,
        use: ['@svgr/webpack'],
    });
    // @ts-ignore

    config.module.rules.push(buildCssLoader(true));

    config.plugins?.push(new DefinePlugin({
        __IS_DEV__: JSON.stringify(true),
        __API__: JSON.stringify(''),
    }));

    return config;
};
