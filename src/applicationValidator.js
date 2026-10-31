{
  "name": "industryconnect-quality",
  "version": "1.0.0",
  "description": "IndustryConnect placement application validator with automated quality checks",
  "main": "src/applicationValidator.js",
  "scripts": {
    "lint": "eslint .",
    "test": "jest --coverage",
    "build": "node scripts/build.js"
  },
  "jest": {
    "coverageThreshold": {
      "global": {
        "branches": 80,
        "functions": 80,
        "lines": 80,
        "statements": 80
      }
    }
  },
  "devDependencies": {
    "@eslint/js": "^9.0.0",
    "eslint": "^9.0.0",
    "globals": "^15.0.0",
    "jest": "^29.7.0"
  }
}
