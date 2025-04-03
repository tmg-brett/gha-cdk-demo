module.exports = {
  testEnvironment: 'node',
  preset: 'ts-jest',
  roots: ['<rootDir>/test'],
  testMatch: ['**/*.test.ts'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest'
  }
};
