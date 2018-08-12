module.exports = {
	collectCoverage: true,
    collectCoverageFrom: [
    	"src/**/*.{js,jsx}",
        "!**/node_modules/**",
        "!**/vendor/**",
    ],
    coverageDirectory: "<rootDir>/coverage",
    transform: {
	    "^.+\\.jsx?$": "babel-jest"
	},
	moduleNameMapper: {
    	"\\.(css|less)$": "identity-obj-proxy"
    },
    setupTestFrameworkScriptFile: "./enzyme.setup.js"
};