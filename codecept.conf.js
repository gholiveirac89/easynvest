exports.config = {
  tests: './*_test.js',
  output: './output',
  helpers: {
	  REST: {
		endpoint: "https://swapi.co/api",
		defaultHeaders: {
		  'Content-Type': 'application/json',
		  'Accept': 'application/json',
		},	  
	},
	  //Acessando a API
    Puppeteer: {
      url: 'http://localhost',
      show: true
    }
  },
  include: {
    I: './steps_file.js'
  },
  bootstrap: null,
  mocha: {},
  name: 'Easynvest'
}
