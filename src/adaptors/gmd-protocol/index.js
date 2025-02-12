const axios = require('axios');

const getData = async () => {
    const fee = 1 - 0.5/100;
    let res = null;
    let request = await axios
        .get("https://gmd-stats-backend.vercel.app/getTvlAndApy")
        .then(({data}) => {
            res = data;
        });
    apy = [
        {
            pool: "0x4A723DE8aF2be96292dA3F824a96bfA053d4aF66",
            chain: "Arbitrum",
            project: "gmd-protocol",
            symbol: "gmdUSDC",
            tvlUsd: res.tvl.usdc,
            apyBase: res.apy.usdc*fee
        },
        {
            pool: "0xc5182E92bf001baE7049c4496caD96662Db1A186",
            chain: "Arbitrum",
            project: "gmd-protocol",
            symbol: "gmdETH",
            tvlUsd: res.tvl.eth,
            apyBase: res.apy.eth*fee
        },
        {
            pool: "0xEffaE8eB4cA7db99e954adc060B736Db78928467",
            chain: "Arbitrum",
            project: "gmd-protocol",
            symbol: "gmdBTC",
            tvlUsd: res.tvl.btc,
            apyBase: res.apy.btc*fee
        }
    ];
    return apy;
}





module.exports = {
  timetravel: false,
  apy: getData,
  url: 'https://gmdprotocol.com/',
};
