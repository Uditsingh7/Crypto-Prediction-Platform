const predData = [
  {
    "coin": "Bitcoin",
    "symbol": "BTC",
    "imageUrl": "https://coin-images.coingecko.com/coins/images/1/large/bitcoin.png?1696501400",
    "currentPrice": 97768.0,
    "sentiment": "Bullish",
    "marketCondition": "Overbought - Potential Reversal",
    "sevenDayPrediction": 99430.06,
    "fourteenDayPrediction": 105941.4,
    "tradingVolume": "High Liquidity",
    "keyEvents": "Harvest 2.0",
    "technicalIndicators": {
      "SMA_50": 75117.78,
      "SMA_100": 67816.86,
      "SMA_200": 65845.11,
      "EMA_50": 78828.98,
      "EMA_100": 72112.3,
      "EMA_20": 88747.88,
      "RSI": 77.92,
      "MACD": 7055.34,
      "MACD_Signal": 6490.51,
      "Bollinger_Upper": 105571.53,
      "Bollinger_Lower": 69815.87,
      "OBV": 826703254651.18,
      "OBV_MA": 806999069289.56,
      "ATR": 2211.57,
      "ADX": 63.38,
      "MFI": 81.32,
      "VWAP": 64308.04,
      "Predicted_24h_Price_Change_Percentage": -5.01
    }
  },
  {
    "coin": "Ethereum",
    "symbol": "ETH",
    "imageUrl": "https://coin-images.coingecko.com/coins/images/279/large/ethereum.png?1696501628",
    "currentPrice": 3377.36,
    "sentiment": "Strong Bullish",
    "marketCondition": "Neutral",
    "sevenDayPrediction": 3973.13,
    "fourteenDayPrediction": 4233.18,
    "tradingVolume": "High Liquidity",
    "keyEvents": "Harvest 2.0",
    "technicalIndicators": {
      "SMA_50": 2765.56,
      "SMA_100": 2635.5,
      "SMA_200": 2955.81,
      "EMA_50": 2878.37,
      "EMA_100": 2799.51,
      "EMA_20": 3109.4,
      "RSI": 57.93,
      "MACD": 171.84,
      "MACD_Signal": 158.71,
      "Bollinger_Upper": 3587.79,
      "Bollinger_Lower": 2649.42,
      "OBV": 574318214094.9,
      "OBV_MA": 496634553375.36,
      "ATR": 83.44,
      "ADX": 37.66,
      "MFI": 58.24,
      "VWAP": 2961.75,
      "Predicted_24h_Price_Change_Percentage": 10.85
    }
  },
  {
    "coin": "XRP",
    "symbol": "XRP",
    "imageUrl": "https://coin-images.coingecko.com/coins/images/44/large/xrp-symbol-white-128.png?1696501442",
    "currentPrice": 1.44,
    "sentiment": "Bullish",
    "marketCondition": "Overbought - Potential Reversal",
    "sevenDayPrediction": 1.3,
    "fourteenDayPrediction": 1.39,
    "tradingVolume": "High Liquidity",
    "keyEvents": "Harvest 2.0",
    "technicalIndicators": {
      "SMA_50": 0.68,
      "SMA_100": 0.63,
      "SMA_200": 0.58,
      "EMA_50": 0.79,
      "EMA_100": 0.68,
      "EMA_20": 1.02,
      "RSI": 88.36,
      "MACD": 0.23,
      "MACD_Signal": 0.16,
      "Bollinger_Upper": 1.61,
      "Bollinger_Lower": 0.22,
      "OBV": 124686684981.77,
      "OBV_MA": 76807823554.41,
      "ATR": 0.08,
      "ADX": 78.31,
      "MFI": 92.31,
      "VWAP": 0.73,
      "Predicted_24h_Price_Change_Percentage": -17.67
    }
  },
  {
    "coin": "Solana",
    "symbol": "SOL",
    "imageUrl": "https://coin-images.coingecko.com/coins/images/4128/large/solana.png?1718769756",
    "currentPrice": 252.56,
    "sentiment": "Strong Bullish",
    "marketCondition": "Neutral",
    "sevenDayPrediction": 301.35,
    "fourteenDayPrediction": 321.08,
    "tradingVolume": "High Liquidity",
    "keyEvents": "Harvest 2.0",
    "technicalIndicators": {
      "SMA_50": 184.56,
      "SMA_100": 163.22,
      "SMA_200": 159.16,
      "EMA_50": 195.6,
      "EMA_100": 176.42,
      "EMA_20": 224.66,
      "RSI": 72.64,
      "MACD": 21.01,
      "MACD_Signal": 18.7,
      "Bollinger_Upper": 271.69,
      "Bollinger_Lower": 171.43,
      "OBV": 118926499851.89,
      "OBV_MA": 106290270837.62,
      "ATR": 6.67,
      "ADX": 51.98,
      "MFI": 73.49,
      "VWAP": 155.61,
      "Predicted_24h_Price_Change_Percentage": 11.04
    }
  },
  {
    "coin": "BNB",
    "symbol": "BNB",
    "imageUrl": "https://coin-images.coingecko.com/coins/images/825/large/bnb-icon2_2x.png?1696501970",
    "currentPrice": 658.86,
    "sentiment": "Strong Bullish",
    "marketCondition": "Neutral",
    "sevenDayPrediction": 727.32,
    "fourteenDayPrediction": 774.89,
    "tradingVolume": "High Liquidity",
    "keyEvents": "Harvest 2.0",
    "technicalIndicators": {
      "SMA_50": 597.77,
      "SMA_100": 575.16,
      "SMA_200": 574.74,
      "EMA_50": 601.32,
      "EMA_100": 584.92,
      "EMA_20": 620.52,
      "RSI": 61.71,
      "MACD": 13.41,
      "MACD_Signal": 10.61,
      "Bollinger_Upper": 663.69,
      "Bollinger_Lower": 576.07,
      "OBV": 32396619587.94,
      "OBV_MA": 26115987525.45,
      "ATR": 9.26,
      "ADX": 27.37,
      "MFI": 53.87,
      "VWAP": 514.75,
      "Predicted_24h_Price_Change_Percentage": 4.2
    }
  },
  {
    "coin": "Toncoin",
    "symbol": "TON",
    "imageUrl": "https://coin-images.coingecko.com/coins/images/17980/large/ton_symbol.png?1696517498",
    "currentPrice": 6.1,
    "sentiment": "Strong Bullish",
    "marketCondition": "Neutral",
    "sevenDayPrediction": 6.8,
    "fourteenDayPrediction": 7.24,
    "tradingVolume": "Medium Liquidity",
    "keyEvents": "Harvest 2.0",
    "technicalIndicators": {
      "SMA_50": 5.21,
      "SMA_100": 5.41,
      "SMA_200": 6.17,
      "EMA_50": 5.36,
      "EMA_100": 5.5,
      "EMA_20": 5.47,
      "RSI": 65.41,
      "MACD": 0.2,
      "MACD_Signal": 0.12,
      "Bollinger_Upper": 6.16,
      "Bollinger_Lower": 4.59,
      "OBV": 2593894894.42,
      "OBV_MA": 2562600508.71,
      "ATR": 0.19,
      "ADX": 33.55,
      "MFI": 65.92,
      "VWAP": 5.94,
      "Predicted_24h_Price_Change_Percentage": 5.19
    }
  },
  {
    "coin": "Aptos",
    "symbol": "APT",
    "imageUrl": "https://coin-images.coingecko.com/coins/images/26455/large/aptos_round.png?1696525528",
    "currentPrice": 12.37,
    "sentiment": "Strong Bullish",
    "marketCondition": "Neutral",
    "sevenDayPrediction": 15.83,
    "fourteenDayPrediction": 16.94,
    "tradingVolume": "Medium Liquidity",
    "keyEvents": "Harvest 2.0",
    "technicalIndicators": {
      "SMA_50": 10.22,
      "SMA_100": 8.55,
      "SMA_200": 7.93,
      "EMA_50": 10.31,
      "EMA_100": 9.28,
      "EMA_20": 11.48,
      "RSI": 57.77,
      "MACD": 0.72,
      "MACD_Signal": 0.69,
      "Bollinger_Upper": 13.96,
      "Bollinger_Lower": 8.91,
      "OBV": 2116516472.79,
      "OBV_MA": 1867703705.29,
      "ATR": 0.67,
      "ADX": 28.9,
      "MFI": 63.56,
      "VWAP": 9.94,
      "Predicted_24h_Price_Change_Percentage": 14.01
    }
  },
  {
    "coin": "Arbitrum",
    "symbol": "ARB",
    "imageUrl": "https://coin-images.coingecko.com/coins/images/16547/large/arb.jpg?1721358242",
    "currentPrice": 0.858984,
    "sentiment": "Bullish",
    "marketCondition": "Neutral",
    "sevenDayPrediction": 0.96,
    "fourteenDayPrediction": 1.02,
    "tradingVolume": "High Liquidity",
    "keyEvents": "Harvest 2.0",
    "technicalIndicators": {
      "SMA_50": 0.59,
      "SMA_100": 0.57,
      "SMA_200": 0.7,
      "EMA_50": 0.63,
      "EMA_100": 0.63,
      "EMA_20": 0.7,
      "RSI": 68.95,
      "MACD": 0.07,
      "MACD_Signal": 0.05,
      "Bollinger_Upper": 0.87,
      "Bollinger_Lower": 0.47,
      "OBV": 3127541656.35,
      "OBV_MA": -631587261.47,
      "ATR": 0.04,
      "ADX": 33.87,
      "MFI": 74.44,
      "VWAP": 1.29,
      "Predicted_24h_Price_Change_Percentage": 5.02
    }
  },
  {
    "coin": "Bittensor",
    "symbol": "TAO",
    "imageUrl": "https://coin-images.coingecko.com/coins/images/28452/large/ARUsPeNQ_400x400.jpeg?1696527447",
    "currentPrice": 528.81,
    "sentiment": "Bullish",
    "marketCondition": "Neutral",
    "sevenDayPrediction": 620.77,
    "fourteenDayPrediction": 661.38,
    "tradingVolume": "Medium Liquidity",
    "keyEvents": "Harvest 2.0",
    "technicalIndicators": {
      "SMA_50": 535.28,
      "SMA_100": 452.18,
      "SMA_200": 387.02,
      "EMA_50": 504.55,
      "EMA_100": 469.39,
      "EMA_20": 511.09,
      "RSI": 45.36,
      "MACD": -1.93,
      "MACD_Signal": -3.35,
      "Bollinger_Upper": 586.16,
      "Bollinger_Lower": 446.08,
      "OBV": 249425205.68,
      "OBV_MA": 39502052.25,
      "ATR": 24.59,
      "ADX": 11.61,
      "MFI": 43.98,
      "VWAP": 468.35,
      "Predicted_24h_Price_Change_Percentage": 6.02
    }
  },
  {
    "coin": "MANTRA",
    "symbol": "OM",
    "imageUrl": "https://coin-images.coingecko.com/coins/images/12151/large/OM_Token.png?1696511991",
    "currentPrice": 3.65,
    "sentiment": "Bullish",
    "marketCondition": "Overbought - Potential Reversal",
    "sevenDayPrediction": 3.48,
    "fourteenDayPrediction": 3.88,
    "tradingVolume": "Medium Liquidity",
    "keyEvents": "Harvest 2.0",
    "technicalIndicators": {
      "SMA_50": 1.85,
      "SMA_100": 1.45,
      "SMA_200": 1.18,
      "EMA_50": 2.09,
      "EMA_100": 1.66,
      "EMA_20": 2.8,
      "RSI": 74.83,
      "MACD": 0.64,
      "MACD_Signal": 0.51,
      "Bollinger_Upper": 4.75,
      "Bollinger_Lower": 0.21,
      "OBV": 4617795351.44,
      "OBV_MA": 3916804874.16,
      "ATR": 0.32,
      "ADX": 49.3,
      "MFI": 82.41,
      "VWAP": 1.58,
      "Predicted_24h_Price_Change_Percentage": -13.41
    }
  },
  {
    "coin": "Render",
    "symbol": "RENDER",
    "imageUrl": "https://coin-images.coingecko.com/coins/images/11636/large/rndr.png?1696511529",
    "currentPrice": 8.09,
    "sentiment": "Strong Bullish",
    "marketCondition": "Neutral",
    "sevenDayPrediction": 10.03,
    "fourteenDayPrediction": 10.69,
    "tradingVolume": "Medium Liquidity",
    "keyEvents": "Harvest 2.0",
    "technicalIndicators": {
      "SMA_50": 5.71,
      "SMA_100": 5.54,
      "SMA_200": 6.56,
      "EMA_50": 6.1,
      "EMA_100": 5.94,
      "EMA_20": 6.82,
      "RSI": 72.81,
      "MACD": 0.66,
      "MACD_Signal": 0.57,
      "Bollinger_Upper": 8.86,
      "Bollinger_Lower": 4.39,
      "OBV": 5950392999.62,
      "OBV_MA": 4561664526.42,
      "ATR": 0.38,
      "ADX": 50.71,
      "MFI": 76.31,
      "VWAP": 7.6,
      "Predicted_24h_Price_Change_Percentage": 13.31
    }
  },
  {
    "coin": "SuperVerse",
    "symbol": "SUPER",
    "imageUrl": "https://coin-images.coingecko.com/coins/images/14040/large/SV-Logo-200x200.png?1706880312",
    "currentPrice": 1.35,
    "sentiment": "Hold",
    "marketCondition": "Neutral",
    "sevenDayPrediction": 1.53,
    "fourteenDayPrediction": 1.63,
    "tradingVolume": "Low Liquidity",
    "keyEvents": "Harvest 2.0",
    "technicalIndicators": {
      "SMA_50": 1.28,
      "SMA_100": 1.05,
      "SMA_200": 0.9,
      "EMA_50": 1.24,
      "EMA_100": 1.11,
      "EMA_20": 1.3,
      "RSI": 42.68,
      "MACD": 0.0,
      "MACD_Signal": 0.01,
      "Bollinger_Upper": 1.52,
      "Bollinger_Lower": 1.15,
      "OBV": 1304590445.69,
      "OBV_MA": 1239878871.42,
      "ATR": 0.06,
      "ADX": 11.38,
      "MFI": 43.71,
      "VWAP": 0.95,
      "Predicted_24h_Price_Change_Percentage": 0.72
    }
  },
  {
    "coin": "Ondo",
    "symbol": "ONDO",
    "imageUrl": "https://coin-images.coingecko.com/coins/images/26580/large/ONDO.png?1696525656",
    "currentPrice": 1.079,
    "sentiment": "Strong Bullish",
    "marketCondition": "Neutral",
    "sevenDayPrediction": 1.31,
    "fourteenDayPrediction": 1.39,
    "tradingVolume": "Medium Liquidity",
    "keyEvents": "Harvest 2.0",
    "technicalIndicators": {
      "SMA_50": 0.79,
      "SMA_100": 0.73,
      "SMA_200": 0.88,
      "EMA_50": 0.83,
      "EMA_100": 0.8,
      "EMA_20": 0.92,
      "RSI": 65.48,
      "MACD": 0.08,
      "MACD_Signal": 0.07,
      "Bollinger_Upper": 1.15,
      "Bollinger_Lower": 0.64,
      "OBV": 2046618687.54,
      "OBV_MA": 1510866142.39,
      "ATR": 0.05,
      "ADX": 35.7,
      "MFI": 66.42,
      "VWAP": 0.82,
      "Predicted_24h_Price_Change_Percentage": 13.66
    }
  },
  {
    "coin": "Sui",
    "symbol": "SUI",
    "imageUrl": "https://coin-images.coingecko.com/coins/images/26375/large/sui_asset.jpeg?1696525453",
    "currentPrice": 3.36,
    "sentiment": "Hold",
    "marketCondition": "Neutral",
    "sevenDayPrediction": 4.23,
    "fourteenDayPrediction": 4.8,
    "tradingVolume": "High Liquidity",
    "keyEvents": "Harvest 2.0",
    "technicalIndicators": {
      "SMA_50": 2.47,
      "SMA_100": 1.82,
      "SMA_200": 1.35,
      "EMA_50": 2.6,
      "EMA_100": 2.08,
      "EMA_20": 3.19,
      "RSI": 59.3,
      "MACD": 0.35,
      "MACD_Signal": 0.39,
      "Bollinger_Upper": 4.29,
      "Bollinger_Lower": 2.08,
      "OBV": 32958976541.47,
      "OBV_MA": 32273282282.53,
      "ATR": 0.12,
      "ADX": 63.53,
      "MFI": 64.83,
      "VWAP": 1.92,
      "Predicted_24h_Price_Change_Percentage": 12.14
    }
  },
  {
    "coin": "Arweave",
    "symbol": "AR",
    "imageUrl": "https://coin-images.coingecko.com/coins/images/4343/large/oRt6SiEN_400x400.jpg?1696504946",
    "currentPrice": 22.12,
    "sentiment": "Bullish",
    "marketCondition": "Overbought - Potential Reversal",
    "sevenDayPrediction": 20.85,
    "fourteenDayPrediction": 22.22,
    "tradingVolume": "Medium Liquidity",
    "keyEvents": "Harvest 2.0",
    "technicalIndicators": {
      "SMA_50": 17.87,
      "SMA_100": 19.64,
      "SMA_200": 25.44,
      "EMA_50": 18.44,
      "EMA_100": 19.99,
      "EMA_20": 18.51,
      "RSI": 59.12,
      "MACD": 0.78,
      "MACD_Signal": 0.31,
      "Bollinger_Upper": 22.06,
      "Bollinger_Lower": 14.42,
      "OBV": 1630699900.7,
      "OBV_MA": 1123822223.93,
      "ATR": 1.32,
      "ADX": 17.58,
      "MFI": 56.84,
      "VWAP": 27.13,
      "Predicted_24h_Price_Change_Percentage": -11.01
    }
  },
  {
    "coin": "Optimism",
    "symbol": "OP",
    "imageUrl": "https://coin-images.coingecko.com/coins/images/25244/large/Optimism.png?1696524385",
    "currentPrice": 2.19,
    "sentiment": "Bullish",
    "marketCondition": "Neutral",
    "sevenDayPrediction": 2.33,
    "fourteenDayPrediction": 2.48,
    "tradingVolume": "Medium Liquidity",
    "keyEvents": "Harvest 2.0",
    "technicalIndicators": {
      "SMA_50": 1.69,
      "SMA_100": 1.61,
      "SMA_200": 1.77,
      "EMA_50": 1.72,
      "EMA_100": 1.7,
      "EMA_20": 1.83,
      "RSI": 66.47,
      "MACD": 0.14,
      "MACD_Signal": 0.07,
      "Bollinger_Upper": 2.24,
      "Bollinger_Lower": 1.27,
      "OBV": 866733682.22,
      "OBV_MA": -809795592.78,
      "ATR": 0.12,
      "ADX": 21.14,
      "MFI": 74.28,
      "VWAP": 2.56,
      "Predicted_24h_Price_Change_Percentage": 0.37
    }
  },
  {
    "coin": "Celestia",
    "symbol": "TIA",
    "imageUrl": "https://coin-images.coingecko.com/coins/images/31967/large/tia.jpg?1696530772",
    "currentPrice": 7.64,
    "sentiment": "Bullish",
    "marketCondition": "Overbought - Potential Reversal",
    "sevenDayPrediction": 6.81,
    "fourteenDayPrediction": 7.25,
    "tradingVolume": "High Liquidity",
    "keyEvents": "Harvest 2.0",
    "technicalIndicators": {
      "SMA_50": 5.42,
      "SMA_100": 5.25,
      "SMA_200": 6.25,
      "EMA_50": 5.44,
      "EMA_100": 5.61,
      "EMA_20": 5.63,
      "RSI": 67.64,
      "MACD": 0.33,
      "MACD_Signal": 0.08,
      "Bollinger_Upper": 6.97,
      "Bollinger_Lower": 3.91,
      "OBV": 5087135623.99,
      "OBV_MA": 1793014786.99,
      "ATR": 0.42,
      "ADX": 15.85,
      "MFI": 83.04,
      "VWAP": 10.02,
      "Predicted_24h_Price_Change_Percentage": -15.9
    }
  },
  {
    "coin": "Maker",
    "symbol": "MKR",
    "imageUrl": "https://coin-images.coingecko.com/coins/images/1364/large/Mark_Maker.png?1696502423",
    "currentPrice": 1748.95,
    "sentiment": "Hold",
    "marketCondition": "Overbought - Potential Reversal",
    "sevenDayPrediction": 1713.1,
    "fourteenDayPrediction": 1825.2,
    "tradingVolume": "Medium Liquidity",
    "keyEvents": "Harvest 2.0",
    "technicalIndicators": {
      "SMA_50": 1349.26,
      "SMA_100": 1522.81,
      "SMA_200": 2019.06,
      "EMA_50": 1455.27,
      "EMA_100": 1590.83,
      "EMA_20": 1508.57,
      "RSI": 70.4,
      "MACD": 91.23,
      "MACD_Signal": 68.37,
      "Bollinger_Upper": 1751.82,
      "Bollinger_Lower": 1254.8,
      "OBV": 1214995958.0,
      "OBV_MA": 0,
      "ATR": 48.54,
      "ADX": 33.93,
      "MFI": 100.0,
      "VWAP": 1642.91,
      "Predicted_24h_Price_Change_Percentage": -7.54
    }
  },
  {
    "coin": "Dogecoin",
    "symbol": "DOGE",
    "imageUrl": "https://coin-images.coingecko.com/coins/images/5/large/dogecoin.png?1696501409",
    "currentPrice": 0.4235,
    "sentiment": "Bullish",
    "marketCondition": "Overbought - Potential Reversal",
    "sevenDayPrediction": 0.38,
    "fourteenDayPrediction": 0.41,
    "tradingVolume": "High Liquidity",
    "keyEvents": "Harvest 2.0",
    "technicalIndicators": {
      "SMA_50": 0.19,
      "SMA_100": 0.15,
      "SMA_200": 0.14,
      "EMA_50": 0.23,
      "EMA_100": 0.18,
      "EMA_20": 0.31,
      "RSI": 83.82,
      "MACD": 0.07,
      "MACD_Signal": 0.06,
      "Bollinger_Upper": 0.49,
      "Bollinger_Lower": 0.08,
      "OBV": 214771627376.58,
      "OBV_MA": 142934427617.2,
      "ATR": 0.02,
      "ADX": 67.0,
      "MFI": 88.15,
      "VWAP": 0.21,
      "Predicted_24h_Price_Change_Percentage": -18.76
    }
  },
  {
    "coin": "Cardano",
    "symbol": "ADA",
    "imageUrl": "https://coin-images.coingecko.com/coins/images/975/large/cardano.png?1696502090",
    "currentPrice": 1.051,
    "sentiment": "Bullish",
    "marketCondition": "Overbought - Potential Reversal",
    "sevenDayPrediction": 0.8,
    "fourteenDayPrediction": 0.85,
    "tradingVolume": "High Liquidity",
    "keyEvents": "Harvest 2.0",
    "technicalIndicators": {
      "SMA_50": 0.43,
      "SMA_100": 0.39,
      "SMA_200": 0.4,
      "EMA_50": 0.49,
      "EMA_100": 0.44,
      "EMA_20": 0.63,
      "RSI": 92.18,
      "MACD": 0.14,
      "MACD_Signal": 0.09,
      "Bollinger_Upper": 0.97,
      "Bollinger_Lower": 0.15,
      "OBV": 33599686168.9,
      "OBV_MA": 15112494918.63,
      "ATR": 0.06,
      "ADX": 67.02,
      "MFI": 94.48,
      "VWAP": 0.55,
      "Predicted_24h_Price_Change_Percentage": -28.27
    }
  },
  {
    "coin": "Shiba Inu",
    "symbol": "SHIB",
    "imageUrl": "https://coin-images.coingecko.com/coins/images/11939/large/shiba.png?1696511800",
    "currentPrice": 2.546e-05,
    "sentiment": "Strong Bullish",
    "marketCondition": "Neutral",
    "sevenDayPrediction": 0.0,
    "fourteenDayPrediction": 0.0,
    "tradingVolume": "High Liquidity",
    "keyEvents": "Harvest 2.0",
    "technicalIndicators": {
      "SMA_50": 0.0,
      "SMA_100": 0.0,
      "SMA_200": 0.0,
      "EMA_50": 0.0,
      "EMA_100": 0.0,
      "EMA_20": 0.0,
      "RSI": 66.97,
      "MACD": 0.0,
      "MACD_Signal": 0.0,
      "Bollinger_Upper": 0.0,
      "Bollinger_Lower": 0.0,
      "OBV": 28851167659.5,
      "OBV_MA": 28605399989.92,
      "ATR": 0.0,
      "ADX": 41.55,
      "MFI": 73.64,
      "VWAP": 0.0,
      "Predicted_24h_Price_Change_Percentage": 13.9
    }
  },
  {
    "coin": "TRON",
    "symbol": "TRX",
    "imageUrl": "https://coin-images.coingecko.com/coins/images/1094/large/tron-logo.png?1696502193",
    "currentPrice": 0.209,
    "sentiment": "Bullish",
    "marketCondition": "Overbought - Potential Reversal",
    "sevenDayPrediction": 0.21,
    "fourteenDayPrediction": 0.22,
    "tradingVolume": "High Liquidity",
    "keyEvents": "Harvest 2.0",
    "technicalIndicators": {
      "SMA_50": 0.17,
      "SMA_100": 0.16,
      "SMA_200": 0.14,
      "EMA_50": 0.17,
      "EMA_100": 0.16,
      "EMA_20": 0.18,
      "RSI": 79.11,
      "MACD": 0.01,
      "MACD_Signal": 0.01,
      "Bollinger_Upper": 0.21,
      "Bollinger_Lower": 0.14,
      "OBV": 18034242184.67,
      "OBV_MA": 14870034584.33,
      "ATR": 0.01,
      "ADX": 32.16,
      "MFI": 81.43,
      "VWAP": 0.14,
      "Predicted_24h_Price_Change_Percentage": -4.65
    }
  },
  {
    "coin": "Avalanche",
    "symbol": "AVAX",
    "imageUrl": "https://coin-images.coingecko.com/coins/images/12559/large/Avalanche_Circle_RedWhite_Trans.png?1696512369",
    "currentPrice": 41.7,
    "sentiment": "Strong Bullish",
    "marketCondition": "Overbought - Potential Reversal",
    "sevenDayPrediction": 39.58,
    "fourteenDayPrediction": 42.17,
    "tradingVolume": "High Liquidity",
    "keyEvents": "Harvest 2.0",
    "technicalIndicators": {
      "SMA_50": 28.6,
      "SMA_100": 26.54,
      "SMA_200": 28.17,
      "EMA_50": 29.66,
      "EMA_100": 28.35,
      "EMA_20": 32.78,
      "RSI": 76.54,
      "MACD": 2.92,
      "MACD_Signal": 2.07,
      "Bollinger_Upper": 41.69,
      "Bollinger_Lower": 20.84,
      "OBV": 11743932520.58,
      "OBV_MA": 10221453151.32,
      "ATR": 1.93,
      "ADX": 43.71,
      "MFI": 75.21,
      "VWAP": 37.37,
      "Predicted_24h_Price_Change_Percentage": -10.41
    }
  },
  {
    "coin": "Chainlink",
    "symbol": "LINK",
    "imageUrl": "https://coin-images.coingecko.com/coins/images/877/large/chainlink-new-logo.png?1696502009",
    "currentPrice": 18.18,
    "sentiment": "Strong Bullish",
    "marketCondition": "Overbought - Potential Reversal",
    "sevenDayPrediction": 16.56,
    "fourteenDayPrediction": 17.65,
    "tradingVolume": "High Liquidity",
    "keyEvents": "Harvest 2.0",
    "technicalIndicators": {
      "SMA_50": 12.14,
      "SMA_100": 11.6,
      "SMA_200": 12.93,
      "EMA_50": 12.72,
      "EMA_100": 12.37,
      "EMA_20": 13.92,
      "RSI": 72.47,
      "MACD": 1.1,
      "MACD_Signal": 0.78,
      "Bollinger_Upper": 17.2,
      "Bollinger_Lower": 9.78,
      "OBV": 3684714545.66,
      "OBV_MA": 1172573769.03,
      "ATR": 0.89,
      "ADX": 34.57,
      "MFI": 75.75,
      "VWAP": 15.31,
      "Predicted_24h_Price_Change_Percentage": -14.01
    }
  },
  {
    "coin": "Pepe",
    "symbol": "PEPE",
    "imageUrl": "https://coin-images.coingecko.com/coins/images/29850/large/pepe-token.jpeg?1696528776",
    "currentPrice": 1.997e-05,
    "sentiment": "Hold",
    "marketCondition": "Overbought - Potential Reversal",
    "sevenDayPrediction": 0.0,
    "fourteenDayPrediction": 0.0,
    "tradingVolume": "High Liquidity",
    "keyEvents": "Harvest 2.0",
    "technicalIndicators": {
      "SMA_50": 0.0,
      "SMA_100": 0.0,
      "SMA_200": 0.0,
      "EMA_50": 0.0,
      "EMA_100": 0.0,
      "EMA_20": 0.0,
      "RSI": 73.85,
      "MACD": 0.0,
      "MACD_Signal": 0.0,
      "Bollinger_Upper": 0.0,
      "Bollinger_Lower": 0.0,
      "OBV": 39752736093.4,
      "OBV_MA": 43941617356.67,
      "ATR": 0.0,
      "ADX": 58.26,
      "MFI": 86.26,
      "VWAP": 0.0,
      "Predicted_24h_Price_Change_Percentage": -10.15
    }
  },
  {
    "coin": "Polkadot",
    "symbol": "DOT",
    "imageUrl": "https://coin-images.coingecko.com/coins/images/12171/large/polkadot.png?1696512008",
    "currentPrice": 8.84,
    "sentiment": "Bullish",
    "marketCondition": "Overbought - Potential Reversal",
    "sevenDayPrediction": 6.85,
    "fourteenDayPrediction": 7.3,
    "tradingVolume": "High Liquidity",
    "keyEvents": "Harvest 2.0",
    "technicalIndicators": {
      "SMA_50": 4.54,
      "SMA_100": 4.46,
      "SMA_200": 5.34,
      "EMA_50": 4.85,
      "EMA_100": 4.82,
      "EMA_20": 5.43,
      "RSI": 79.62,
      "MACD": 0.67,
      "MACD_Signal": 0.38,
      "Bollinger_Upper": 7.42,
      "Bollinger_Lower": 2.72,
      "OBV": 6158409388.99,
      "OBV_MA": 3414630838.6,
      "ATR": 0.56,
      "ADX": 41.61,
      "MFI": 87.96,
      "VWAP": 7.0,
      "Predicted_24h_Price_Change_Percentage": -26.83
    }
  },
  {
    "coin": "Spectral",
    "symbol": "SPEC",
    "imageUrl": "https://coin-images.coingecko.com/coins/images/36138/large/ls7wS7vf_400x400.jpg?1724975224",
    "currentPrice": 9.83,
    "sentiment": "Bearish",
    "marketCondition": "Neutral",
    "sevenDayPrediction": 11.11,
    "fourteenDayPrediction": 12.61,
    "tradingVolume": "Low Liquidity",
    "keyEvents": "Harvest 2.0",
    "technicalIndicators": {
      "SMA_50": 9.72,
      "SMA_100": 8.17,
      "SMA_200": 8.29,
      "EMA_50": 9.83,
      "EMA_100": 8.92,
      "EMA_20": 10.55,
      "RSI": 47.97,
      "MACD": 0.1,
      "MACD_Signal": 0.37,
      "Bollinger_Upper": 12.83,
      "Bollinger_Lower": 8.44,
      "OBV": 104938744.63,
      "OBV_MA": 116434087.2,
      "ATR": 0.83,
      "ADX": 11.29,
      "MFI": 58.8,
      "VWAP": 9.13,
      "Predicted_24h_Price_Change_Percentage": 0.72
    }
  },
  {
    "coin": "NEAR Protocol",
    "symbol": "NEAR",
    "imageUrl": "https://coin-images.coingecko.com/coins/images/10365/large/near.jpg?1696510367",
    "currentPrice": 7.09,
    "sentiment": "Bullish",
    "marketCondition": "Overbought - Potential Reversal",
    "sevenDayPrediction": 6.61,
    "fourteenDayPrediction": 7.04,
    "tradingVolume": "High Liquidity",
    "keyEvents": "Harvest 2.0",
    "technicalIndicators": {
      "SMA_50": 4.79,
      "SMA_100": 4.58,
      "SMA_200": 5.27,
      "EMA_50": 4.92,
      "EMA_100": 4.85,
      "EMA_20": 5.31,
      "RSI": 76.79,
      "MACD": 0.45,
      "MACD_Signal": 0.29,
      "Bollinger_Upper": 6.86,
      "Bollinger_Lower": 3.13,
      "OBV": 3993807201.19,
      "OBV_MA": 753499584.37,
      "ATR": 0.38,
      "ADX": 40.82,
      "MFI": 82.64,
      "VWAP": 5.41,
      "Predicted_24h_Price_Change_Percentage": -12.06
    }
  },
  {
    "coin": "Aerodrome Finance",
    "symbol": "AERO",
    "imageUrl": "https://coin-images.coingecko.com/coins/images/31745/large/token.png?1696530564",
    "currentPrice": 1.35,
    "sentiment": "Bearish",
    "marketCondition": "Neutral",
    "sevenDayPrediction": 1.53,
    "fourteenDayPrediction": 1.7,
    "tradingVolume": "Low Liquidity",
    "keyEvents": "Harvest 2.0",
    "technicalIndicators": {
      "SMA_50": 1.26,
      "SMA_100": 1.0,
      "SMA_200": 0.93,
      "EMA_50": 1.22,
      "EMA_100": 1.1,
      "EMA_20": 1.31,
      "RSI": 45.46,
      "MACD": 0.03,
      "MACD_Signal": 0.04,
      "Bollinger_Upper": 1.58,
      "Bollinger_Lower": 1.04,
      "OBV": 227768435.57,
      "OBV_MA": 321473703.34,
      "ATR": 0.07,
      "ADX": 20.36,
      "MFI": 49.91,
      "VWAP": 1.03,
      "Predicted_24h_Price_Change_Percentage": 0.72
    }
  },
  {
    "coin": "Uniswap",
    "symbol": "UNI",
    "imageUrl": "https://coin-images.coingecko.com/coins/images/12504/large/uniswap-logo.png?1720676669",
    "currentPrice": 11.03,
    "sentiment": "Bullish",
    "marketCondition": "Overbought - Potential Reversal",
    "sevenDayPrediction": 9.85,
    "fourteenDayPrediction": 10.49,
    "tradingVolume": "Medium Liquidity",
    "keyEvents": "Harvest 2.0",
    "technicalIndicators": {
      "SMA_50": 8.02,
      "SMA_100": 7.3,
      "SMA_200": 7.92,
      "EMA_50": 8.19,
      "EMA_100": 7.84,
      "EMA_20": 8.84,
      "RSI": 66.7,
      "MACD": 0.5,
      "MACD_Signal": 0.36,
      "Bollinger_Upper": 10.66,
      "Bollinger_Lower": 6.72,
      "OBV": 2798819451.67,
      "OBV_MA": 1874167977.01,
      "ATR": 0.45,
      "ADX": 23.3,
      "MFI": 66.09,
      "VWAP": 8.77,
      "Predicted_24h_Price_Change_Percentage": -15.73
    }
  },
  {
    "coin": "NEURALAI",
    "symbol": "NEURAL",
    "imageUrl": "https://coin-images.coingecko.com/coins/images/36341/large/IMG_1685.jpeg?1723002210",
    "currentPrice": 9.04,
    "sentiment": "Strong Bullish",
    "marketCondition": "Neutral",
    "sevenDayPrediction": 10.86,
    "fourteenDayPrediction": 11.57,
    "tradingVolume": "Low Liquidity",
    "keyEvents": "Harvest 2.0",
    "technicalIndicators": {
      "SMA_50": 5.25,
      "SMA_100": 4.46,
      "SMA_200": 3.6,
      "EMA_50": 5.68,
      "EMA_100": 4.8,
      "EMA_20": 6.89,
      "RSI": 68.28,
      "MACD": 0.96,
      "MACD_Signal": 0.84,
      "Bollinger_Upper": 9.91,
      "Bollinger_Lower": 3.26,
      "OBV": 14586988.96,
      "OBV_MA": 12189514.95,
      "ATR": 0.61,
      "ADX": 52.08,
      "MFI": 74.31,
      "VWAP": 3.55,
      "Predicted_24h_Price_Change_Percentage": 9.68
    }
  },
  {
    "coin": "CHEX Token",
    "symbol": "CHEX",
    "imageUrl": "https://coin-images.coingecko.com/coins/images/10349/large/logo-dark-200.png?1701121978",
    "currentPrice": 0.272796,
    "sentiment": "Bearish",
    "marketCondition": "Neutral",
    "sevenDayPrediction": 0.31,
    "fourteenDayPrediction": 0.35,
    "tradingVolume": "Low Liquidity",
    "keyEvents": "Harvest 2.0",
    "technicalIndicators": {
      "SMA_50": 0.24,
      "SMA_100": 0.18,
      "SMA_200": 0.16,
      "EMA_50": 0.25,
      "EMA_100": 0.21,
      "EMA_20": 0.28,
      "RSI": 37.68,
      "MACD": 0.01,
      "MACD_Signal": 0.01,
      "Bollinger_Upper": 0.33,
      "Bollinger_Lower": 0.24,
      "OBV": 16198621.08,
      "OBV_MA": 19052271.4,
      "ATR": 0.01,
      "ADX": 17.16,
      "MFI": 30.12,
      "VWAP": 0.21,
      "Predicted_24h_Price_Change_Percentage": 0.72
    }
  },
  {
    "coin": "Clearpool",
    "symbol": "CPOOL",
    "imageUrl": "https://coin-images.coingecko.com/coins/images/19252/large/photo_2022-08-31_12.45.02.jpeg?1696518697",
    "currentPrice": 0.23363,
    "sentiment": "Bearish",
    "marketCondition": "Neutral",
    "sevenDayPrediction": 0.26,
    "fourteenDayPrediction": 0.3,
    "tradingVolume": "Low Liquidity",
    "keyEvents": "Harvest 2.0",
    "technicalIndicators": {
      "SMA_50": 0.2,
      "SMA_100": 0.16,
      "SMA_200": 0.16,
      "EMA_50": 0.21,
      "EMA_100": 0.18,
      "EMA_20": 0.24,
      "RSI": 45.54,
      "MACD": 0.01,
      "MACD_Signal": 0.02,
      "Bollinger_Upper": 0.28,
      "Bollinger_Lower": 0.19,
      "OBV": 24656418.33,
      "OBV_MA": 26263932.56,
      "ATR": 0.01,
      "ADX": 19.04,
      "MFI": 53.66,
      "VWAP": 0.18,
      "Predicted_24h_Price_Change_Percentage": 0.72
    }
  },
  {
    "coin": "Beam",
    "symbol": "BEAM",
    "imageUrl": "https://coin-images.coingecko.com/coins/images/32417/large/chain-logo.png?1698114384",
    "currentPrice": 0.02380417,
    "sentiment": "Strong Bullish",
    "marketCondition": "Neutral",
    "sevenDayPrediction": 0.03,
    "fourteenDayPrediction": 0.03,
    "tradingVolume": "Medium Liquidity",
    "keyEvents": "Harvest 2.0",
    "technicalIndicators": {
      "SMA_50": 0.02,
      "SMA_100": 0.02,
      "SMA_200": 0.02,
      "EMA_50": 0.02,
      "EMA_100": 0.02,
      "EMA_20": 0.02,
      "RSI": 62.99,
      "MACD": 0.0,
      "MACD_Signal": 0.0,
      "Bollinger_Upper": 0.03,
      "Bollinger_Lower": 0.01,
      "OBV": 1596631229.65,
      "OBV_MA": 1356558915.6,
      "ATR": 0.0,
      "ADX": 32.81,
      "MFI": 71.44,
      "VWAP": 0.02,
      "Predicted_24h_Price_Change_Percentage": 13.53
    }
  },
  {
    "coin": "Raydium",
    "symbol": "RAY",
    "imageUrl": "https://coin-images.coingecko.com/coins/images/13928/large/PSigc4ie_400x400.jpg?1696513668",
    "currentPrice": 6.17,
    "sentiment": "Strong Bullish",
    "marketCondition": "Neutral",
    "sevenDayPrediction": 7.68,
    "fourteenDayPrediction": 8.18,
    "tradingVolume": "Medium Liquidity",
    "keyEvents": "Harvest 2.0",
    "technicalIndicators": {
      "SMA_50": 3.42,
      "SMA_100": 2.51,
      "SMA_200": 2.16,
      "EMA_50": 3.86,
      "EMA_100": 3.04,
      "EMA_20": 4.98,
      "RSI": 61.98,
      "MACD": 0.72,
      "MACD_Signal": 0.68,
      "Bollinger_Upper": 6.72,
      "Bollinger_Lower": 3.17,
      "OBV": 2702236592.32,
      "OBV_MA": 2208665107.76,
      "ATR": 0.36,
      "ADX": 37.12,
      "MFI": 72.4,
      "VWAP": 2.8,
      "Predicted_24h_Price_Change_Percentage": 14.46
    }
  },
  {
    "coin": "Jupiter",
    "symbol": "JUP",
    "imageUrl": "https://coin-images.coingecko.com/coins/images/34188/large/jup.png?1704266489",
    "currentPrice": 1.13,
    "sentiment": "Hold",
    "marketCondition": "Neutral",
    "sevenDayPrediction": 1.34,
    "fourteenDayPrediction": 1.49,
    "tradingVolume": "Medium Liquidity",
    "keyEvents": "Harvest 2.0",
    "technicalIndicators": {
      "SMA_50": 0.98,
      "SMA_100": 0.88,
      "SMA_200": 0.92,
      "EMA_50": 1.01,
      "EMA_100": 0.95,
      "EMA_20": 1.1,
      "RSI": 51.13,
      "MACD": 0.04,
      "MACD_Signal": 0.05,
      "Bollinger_Upper": 1.32,
      "Bollinger_Lower": 0.88,
      "OBV": 3346694053.41,
      "OBV_MA": 3278351154.35,
      "ATR": 0.05,
      "ADX": 23.86,
      "MFI": 60.14,
      "VWAP": 0.98,
      "Predicted_24h_Price_Change_Percentage": 6.02
    }
  }
]
export default predData;
