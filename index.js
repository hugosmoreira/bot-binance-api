require('dotenv').config()

// API telegram token ID 


async function getData() {
      const { Telegraf } = require('telegraf')
      const bot = new Telegraf(process.env.BOT_TOKEN)
      const axios = require('axios');
      

      
    
      const response = await axios.get('https://api.binance.us/api/v3/klines?symbol=BTCUSDT&interval=1m')
      const candle = response.data[499];
      const price = parseFloat(candle[4]);
      if(price>= 36291.5) {
            console.log('Price is high Vender!!');
            bot.telegram.sendMessage(process.env.CHAT_ID, 'Price is high Vender!!');

      } else if(price <= 35764) {
            console.log('Price is low Compre!!');
            bot.telegram.sendMessage(process.env.CHAT_ID, 'Price is low Compre!!');
      } else {
            console.log('Price is normal HOLD!');
            bot.telegram.sendMessage(process.env.CHAT_ID, 'Price is normal HOLD!');
      }
      

};

setInterval(getData, 1000);

    
getData();

