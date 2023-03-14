# NPM scripts

Convenient.

```json
  "scripts": {
    "audit.production": "yarn audit --groups dependencies",
    "ci.validate": "circleci config validate",
    "ci.process": "circleci config process .circleci/config.yml > process.yml",
    "ci.execute": "circleci local execute --job test",
    "cloc": "find src -name '*.js' | xargs wc -l",
    "cpd": "pmd cpd --minimum-tokens 16 --files src/,tests/ --language ecmascript --failOnViolation false > cpd.report",
    "depcheck": "depcheck",
    "docs:dev": "vitepress dev docs",
    "docs:build": "vitepress build docs",
    "docs:serve": "vitepress serve docs",
    "lint": "eslint . --max-warnings 0",
    "lint.print": "eslint --print-config src/config.js >> eslint-config.js",
    "start.http": "node src/http",
    "test": "jest",
    "test.watch": "jest --watch",
    "test.ci": "jest --ci",
    "test.e2e": "k6 run tests/e2e/smoke.k6.js"
  },
```
