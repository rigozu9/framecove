/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',                           
  testEnvironment: 'jsdom',                    
  transform: {
    "^.+\\.tsx?$": ["ts-jest", { isolatedModules: true }]
  },
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/$1"                 
  },
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"], 
  testPathIgnorePatterns: ["/node_modules/", "/.next/"],
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"]
};
