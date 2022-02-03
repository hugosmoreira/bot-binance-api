

async function getData() {
      const axios = require('axios');
      
    
      const response = await axios.get('https://api.binance.us/api/v3/klines?symbol=BTCUSDT&interval=15m&limit=2')
      console.log(response.data);

};

    
getData();

