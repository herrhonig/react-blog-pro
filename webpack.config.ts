// Здесь будет вся конфигурация сборки
// Свойство entry -> стартовая точка нашего приложения
// Свойство output -> куда и как делаем бсорку приложения
// Свойство HtmlWebpackPlugin -> Генерит HTML5 файл, где находятся все бандлы веб пака, включая скрипты.
import path from 'path';
import webpack from 'webpack';

import { buildWebpackConfig } from './config/build/buildWebpackConfig';
import { BuildPaths, BuildEnv } from './config/build/types/config';

export default (env: BuildEnv) => {
    const paths: BuildPaths = {
        entry: path.resolve(__dirname, 'src', 'index.tsx'),
        build: path.resolve(__dirname, 'build'),
        html: path.resolve(__dirname, 'public', 'index.html'),
        src: path.resolve(__dirname, 'src'),
    };

    const mode = env.mode || 'development';
    const PORT = env.port || 3000;
    const apiUrl = env.apiUrl || 'http://localhost:8080';

    const isDev = mode === 'development';

    const config: webpack.Configuration = buildWebpackConfig({
        mode,
        paths,
        isDev,
        apiUrl,
        port: PORT,
    });

    return config;
};
