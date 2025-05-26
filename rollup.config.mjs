import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import { babel } from '@rollup/plugin-babel';
import { terser } from 'rollup-plugin-terser';
import postcss from 'rollup-plugin-postcss';
import del from 'rollup-plugin-delete';
import autoprefixer from 'autoprefixer';
import sass from 'sass';

export default {
  input: 'src/index.ts',
  output: [
    {
      file: 'dist/index.js',
      format: 'cjs',
      sourcemap: true,
    },
    {
      file: 'dist/index.esm.js',
      format: 'esm',
      sourcemap: true,
    },
  ],
  external: ['react', 'react-dom'],
  plugins: [
    del({ targets: 'dist/*' }),

    postcss({
      plugins: [autoprefixer()],
      extract: 'styles.css',
      minimize: true,
      sourceMap: true,
      extensions: ['.css', '.scss'],
      use: ['sass'],
      sass: sass,
      modules: false,
      autoModules: false,
      inject: false,
    }),

    resolve({
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
    }),

    commonjs(),

    typescript({ tsconfig: './tsconfig.json' }),

    babel({
      babelHelpers: 'runtime',
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
      exclude: 'node_modules/**',
      presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript'],
      plugins: ['@babel/plugin-transform-runtime'],
    }),

    terser(),
  ],
}; 