require('dotenv').config()

let lastmessage = ''
// API telegram token ID 


async function getData() {
      const { Telegraf } = require('telegraf')
      const bot = new Telegraf(process.env.BOT_TOKEN)
      const axios = require('axios');
      

      
    
      const response = await axios.get('https://api.binance.us/api/v3/klines?symbol=BTCUSDT&interval=1m')
      const candle = response.data[499];
      const price = parseFloat(candle[4]);
      if(price >= 36291 && lastmessage !== "Price is high Vender") {
            lastmessage = "Price is high Vender";
            console.log(lastmessage);
            bot.telegram.sendMessage(process.env.CHAT_ID, 'Price is high Vender!!');

      } else if(price <= 35764) {
            lastmessage = "Price is low Compre"
            console.log(lastmessage);
            bot.telegram.sendMessage(process.env.CHAT_ID, 'Price is low Compre!!');
      } else {
            console.log('Price is normal HOLD!');
            bot.telegram.sendMessage(process.env.CHAT_ID, lastmessage);
      }
      

};

setInterval(getData, 1000);

    
getData();

