import typescript from 'rollup-plugin-typescript2';
import uglify from 'rollup-plugin-uglify';

export default {
    input: './src/index.ts',

    output: {
        file: './dist/bundle.js',
        format: 'cjs',
        sourcemap: true,
    },

    plugins: [
        typescript(),
        uglify()
    ]
}