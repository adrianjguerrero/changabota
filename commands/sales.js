const fetch = require('node-fetch');
const cheerio = require('cheerio');

module.exports = {
	name: 'sales',
	description: 'Para saber cuando son las proximas ofertas de steam',
	async execute(message, args) {

        const API_URL = 'https://prepareyourwallet.com/'
      message.channel.send(`Consultado sobre ofertas de steam`);

      const request = await fetch(API_URL).then(response => response.text())
      const parsed = cheerio.load(request,null,false)
      const countDown = parsed('#countdown')
      message.channel.send(countDown.text())

        
	},
};

