const expect = require('chai').expect;
Feature('Cenario1');

Scenario('Validando API People', async (I) => {
	//Criando o cenário de teste

	let res = await I.sendGetRequest('/people/1/');
	expect(res.status).to.eql(200);
	//Validando acesso na API
	
	expect(res.data.name).to.eql("Luke Skywalker");
	expect(res.data.height).to.eql("172");
	expect(res.data.mass).to.eql("77");
	expect(res.data.hair_color).to.eql("blond");
	expect(res.data.skin_color).to.eql("fair");
	expect(res.data.eye_color).to.eql("blue");
	expect(res.data.birth_year).to.eql("19BBY");
	expect(res.data.gender).to.eql("male");
	//Verificando as informações da API
	

});

Scenario('Validando API Planets', async (I) => {
		//Criando o cenário de teste

	let res = await I.sendGetRequest('/planets/1/');
	expect(res.status).to.eql(200);
	//Validando acesso na API
	
	expect(res.data.name).to.eql("Tatooine");
	expect(res.data.rotation_period).to.eql("23");
	expect(res.data.orbital_period).to.eql("304");
	expect(res.data.diameter).to.eql("10465");
	expect(res.data.climate).to.eql("arid");
	expect(res.data.gravity).to.eql("1 standard");
	expect(res.data.terrain).to.eql("desert");
	expect(res.data.surface_water).to.eql("1");
	expect(res.data.population).to.eql("200000");
	//Verificando as informações da API
	
	});