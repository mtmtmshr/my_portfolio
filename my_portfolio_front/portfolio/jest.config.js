module.exports = {
    transform: {
        '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest',
    },
    testPathIgnorePatterns: [
        "<rootDir>/.next/",
        "<rootDir>/node_modules/"
    ],
    moduleNameMapper: {
        "\\.(css)$": "<rootDir>/node_modules/jest-css-modules"
    },
    transformIgnorePatterns: ['/node_modules/(?!react-markdown)/']
    
}