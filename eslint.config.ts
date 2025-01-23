import config from './index.js'
import eslintConfigPrettier from 'eslint-config-prettier'
import tseslint from 'typescript-eslint'

export default tseslint.config(config, tseslint.configs.recommended, eslintConfigPrettier)
