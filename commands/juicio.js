const fetch = require('node-fetch');

module.exports = {
	name: 'juicio',
	description: 'Hace una petición a la api del bot este que se hizo racista',
	async execute(message, args) {

        const API_URL = 'http://mosaic-api-frontdoor.apps.allenai.org/predict?action1='

		if (!args.length) {
			return message.channel.send(`${message.author}, pregunta algo bobotronico!`);
		} else {
      // http://wigflip.com/signbot/
      // https://v12.discordjs.guide/additional-info/rest-api.html#urban-dictionary
      message.channel.send(`Emitiendo juicio sobre: ${args.join(' ')}`);

      const { answer } = await fetch(API_URL+args).then(response => response.json())
      const { text } = answer

      message.channel.send(`Juicio: ${text}`);

    }
        
	},
};

