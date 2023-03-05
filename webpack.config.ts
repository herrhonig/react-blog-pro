// Здесь будет вся конфигурация сборки
// Свойство entry -> стартовая точка нашего приложения
// Свойство output -> куда и как делаем бсорку приложения
// Свойство HtmlWebpackPlugin -> Генерит HTML5 файл, где находятся все бандлы веб пака, включая скрипты.
import path from 'path';
import webpack from 'webpack';

import { buildWebpackConfig } from './config/build/buildWebpackConfig';
import { BuildPaths, BuildEnv } from './config/build/types/config';



export default (env: BuildEnv) => {
  const mode = env.mode  || 'development';
  const isDev = mode === 'development';
  const PORT = env.port || 3000;

  const paths: BuildPaths = {
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    build: path.resolve(__dirname, 'build'),
    html: path.resolve(__dirname, 'public', 'index.html'),
  };
  const config: webpack.Configuration = buildWebpackConfig({
      mode,
      paths,
      isDev,
      port: PORT,
  });

  return config;
};
