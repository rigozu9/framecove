/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  transform: {
    "^.+\\.(ts|tsx)$": ["@swc/jest"] // ✅ Use SWC instead of ts-jest for faster builds
  },
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/$1"
  },
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  testPathIgnorePatterns: ["/node_modules/", "/.next/"],
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  transformIgnorePatterns: [
    "/node_modules/(?!(react|@radix-ui|class-variance-authority|lucide-react)/)"
  ],
  globals: {
    "ts-jest": {
      useESM: true
    }
  }
};
