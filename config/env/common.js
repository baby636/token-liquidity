// Establish the network, default to 'mainnet'
const NETWORK = process.env.NETWORK ? process.env.NETWORK : `mainnet`

let configOut = {}

if (NETWORK === `mainnet`) {
  configOut = {
    NETWORK: `mainnet`,
    port: process.env.PORT || 5000,
    BCH_ADDR: `bitcoincash:qzl6k0wvdd5ky99hewghqdgfj2jhcpqnfq8xtct0al`,
    SLP_ADDR: `simpleledger:qz9l5w0fvp670a8r48apsv0xqek840320c90neac9g`,
    TOKENS_QTY_ORIGINAL: 5000,
    BCH_QTY_ORIGINAL: 25,
    SLP_TOKEN_ID: '38e97c5d7d3585a2cbf3f9580c82ca33985f9cb0845d4dcce220cb709f9538b0'
  }
} else {
  configOut = {
    NETWORK: `testnet`,
    port: process.env.PORT || 5100,
    BCH_ADDR: `bchtest:qz4qnxcxwvmacgye8wlakhz0835x0w3vtvaga95c09`,
    SLP_ADDR: `slptest:qr8tqc5ucmwrrls5upyc32hhpmjp5a7sxyt4vpush5`,
    TOKENS_QTY_ORIGINAL: 5000,
    BCH_QTY_ORIGINAL: 25,
    SLP_TOKEN_ID: '435fdbf1beeacbbf4ac0f7acccbee0b98d2a6a8b9a9c52af562d4029f9192e92'
  }
}

module.exports = configOut
