module.exports = {
	"collectCoverage": true,
    "collectCoverageFrom": [
    	'/src/**/*.test.{js,jsx}'
    ],
    "coverageDirectory": "./coverage",
    "transform": {
	    "^.+\\.jsx?$": "babel-jest"
	},
	"moduleNameMapper": {
    	"\\.(css|less)$": "identity-obj-proxy"
    },
    "setupTestFrameworkScriptFile": "./enzyme.setup.js"
};