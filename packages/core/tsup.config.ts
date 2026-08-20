import { defineConfig } from 'tsup'

export default defineConfig({
  entry: {
    index: 'src/index.ts',
    array: 'src/array/index.ts',
    number: 'src/number/index.ts',
    string: 'src/string/index.ts',
    function: 'src/function/index.ts',
  },
  format: ['esm', 'cjs'],
  dts: true,
  clean: true,
  sourcemap: true,
  treeshake: true,
})
