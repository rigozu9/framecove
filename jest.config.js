module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jest-environment-jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  transform: {
    '^.+\\.(ts|tsx)$': 'babel-jest', // ✅ Use Babel for transforming TS/JSX
  },
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/$1', // For resolving path aliases if any
  },
  testPathIgnorePatterns: ['/node_modules/', '/.next/'],
};
