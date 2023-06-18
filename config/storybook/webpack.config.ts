import path from 'path';

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

    config.module?.rules?.push(buildCssLoader(true));

    return config;
};
