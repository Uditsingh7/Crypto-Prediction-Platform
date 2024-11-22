import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowUp, ArrowDown, ArrowRight } from 'lucide-react'

interface ExpandedInsightsProps {
  crypto: {
    coin: string;
    symbol: string;
    imageUrl: string;
    currentPrice: number;
    sentiment: string;
    marketCondition: string;
    sevenDayPrediction: number;
    fourteenDayPrediction: number;
    tradingVolume: string;
    keyEvents: string;
    technicalIndicators: {
      [key: string]: number | string;
    };
  };
}

export function ExpandedInsights({ crypto }: ExpandedInsightsProps) {
  const formatPercentage = (value: number) => {
    return `${value > 0 ? '+' : ''}${value.toFixed(2)}%`;
  };

  const getArrow = (value: number) => {
    if (value > 0) return <ArrowUp className="text-green-500" />;
    if (value < 0) return <ArrowDown className="text-red-500" />;
    return <ArrowRight className="text-yellow-500" />;
  };

  return (
    <Card className="mt-4 mb-4 bg-gray-50 border-none shadow-lg overflow-hidden">
      <CardContent className="p-8">
        <h3 className="text-2xl font-bold mb-6 text-purple-700">{crypto.coin} ({crypto.symbol}) Detailed Insights</h3>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-8">
            <section className="bg-white rounded-lg shadow-sm p-6">
              <h4 className="text-xl font-semibold mb-4 text-purple-700 border-b pb-2">Short-Term Sentiment:
                <Badge className="ml-2 text-base" variant={crypto.sentiment.toLowerCase() === 'bullish' ? 'default' : 'secondary'}>
                  {crypto.sentiment}
                </Badge>
              </h4>
              <ul className="space-y-3 text-gray-700">
                {/* MACD */}
                <li className="flex items-center justify-between">
                  <span className="font-medium">MACD:</span>
                  <span className="flex items-center gap-2">
                    {getArrow(Number(crypto.technicalIndicators.MACD) - Number(crypto.technicalIndicators.MACD_Signal))}
                    <span className="font-semibold">{crypto.technicalIndicators.MACD} vs Signal {crypto.technicalIndicators.MACD_Signal}</span>
                  </span>
                </li>
                {/* ADX */}
                <li className="flex items-center justify-between">
                  <span className="font-medium">ADX:</span>
                  <span className="flex items-center gap-2">
                    <span className="font-semibold">{crypto.technicalIndicators.ADX}</span>
                    <span className="ml-2">
                      ({Number(crypto.technicalIndicators.ADX) > 25 ? 'Strong' : 'Weak'} trend, {Number(crypto.technicalIndicators.ADX) > 20 ? 'sustainable' : 'unsustainable'})
                    </span>
                  </span>
                </li>
                {/* OBV */}
                <li className="flex items-center justify-between">
                  <span className="font-medium">OBV:</span>
                  <span className="flex items-center gap-2">
                    {getArrow(Number(crypto.technicalIndicators.OBV) - Number(crypto.technicalIndicators.OBV_MA))}
                    <span className="font-semibold">{Number(crypto.technicalIndicators.OBV).toLocaleString()}</span>
                  </span>
                </li>
              </ul>
              <p className="mt-3 text-sm text-gray-600">
                <strong>Trader Insight:</strong> {crypto.sentiment === 'Bullish'
                  ? 'Positive momentum and a strong trend suggest a potential short-term rally. Watch for resistance near '
                  : 'Negative momentum and a weak trend suggest caution. Monitor for pullbacks to support near '}
                ${(crypto.currentPrice * 1.05).toFixed(2)}.
              </p>
            </section>


            <section className="bg-white rounded-lg shadow-sm p-6">
              <h4 className="text-xl font-semibold mb-4 text-purple-700 border-b pb-2">Market Condition:
                <Badge className="ml-2 text-base" variant={crypto.marketCondition.toLowerCase().includes('overbought') ? 'destructive' : 'secondary'}>
                  {crypto.marketCondition}
                </Badge>
              </h4>
              <ul className="space-y-3 text-gray-700">
                {/* RSI */}
                <li className="flex items-center justify-between">
                  <span className="font-medium">RSI:</span>
                  <span className="flex items-center gap-2">
                    <span className="font-semibold">{crypto.technicalIndicators.RSI}</span>
                    <span className="ml-2">
                      ({Number(crypto.technicalIndicators.RSI) > 70 ? 'Overbought' : Number(crypto.technicalIndicators.RSI) < 30 ? 'Oversold' : 'Neutral'})
                    </span>
                  </span>
                </li>
                {/* Bollinger Upper Band */}
                <li className="flex items-center justify-between">
                  <span className="font-medium">Price vs Bollinger Upper Band:</span>
                  <span className="flex items-center gap-2">
                    {getArrow(crypto.currentPrice - Number(crypto.technicalIndicators.Bollinger_Upper))}
                    <span className="font-semibold">${crypto.currentPrice.toLocaleString()} vs ${Number(crypto.technicalIndicators.Bollinger_Upper).toLocaleString()}</span>
                  </span>
                </li>
                {/* MFI */}
                <li className="flex items-center justify-between">
                  <span className="font-medium">MFI:</span>
                  <span className="flex items-center gap-2">
                    <span className="font-semibold">{crypto.technicalIndicators.MFI}</span>
                    <span className="ml-2">
                      ({Number(crypto.technicalIndicators.MFI) > 80 ? 'High' : Number(crypto.technicalIndicators.MFI) < 20 ? 'Low' : 'Moderate'} buying pressure)
                    </span>
                  </span>
                </li>
              </ul>
              <p className="mt-3 text-sm text-gray-600">
                <strong>Trader Insight:</strong> {crypto.marketCondition.includes('Overbought')
                  ? 'Overbought signals a potential price reversal or resistance. Consider scaling out or trailing stop-loss strategies.'
                  : crypto.marketCondition.includes('Oversold')
                    ? 'Oversold indicates potential support. This might be an opportunity to scale in or set limit buy orders.'
                    : 'Neutral market conditions indicate balanced buying and selling pressures. Monitor for breakouts above resistance near '}
                ${(crypto.currentPrice * 1.03).toFixed(2)}.
              </p>
            </section>


            <section className="bg-white rounded-lg shadow-sm p-6">
              <h4 className="text-xl font-semibold mb-4 text-purple-700 border-b pb-2">Market Overview</h4>
              <ul className="space-y-4 text-gray-700">
                {/* Current Price */}
                <li>
                  <div className="flex items-center justify-between">
                    <span className="font-medium">Current Price:</span>
                    <span className="font-semibold">${crypto.currentPrice.toLocaleString()}</span>
                  </div>
                  <p className="text-sm text-gray-600 mt-1">
                    The latest market price for {crypto.coin}. Monitor for price fluctuations relative to resistance at ${(crypto.currentPrice * 1.05).toFixed(2)} and support at ${(crypto.currentPrice * 0.95).toFixed(2)}.
                  </p>
                </li>

                {/* Trading Volume */}
                <li>
                  <div className="flex items-center justify-between">
                    <span className="font-medium">Trading Volume:</span>
                    <span className="font-semibold">{crypto.tradingVolume}</span>
                  </div>
                  <p className="text-sm text-gray-600 mt-1">
                    Indicates market liquidity. {crypto.tradingVolume === 'High Liquidity' ? 'High liquidity suggests easier trade execution and strong market activity.' : 'Low liquidity might lead to higher price volatility.'}
                  </p>
                </li>

                {/* Key Events */}
                <li>
                  <div className="flex items-center justify-between">
                    <span className="font-medium">Key Events:</span>
                    <span className="text-gray-600">{crypto.keyEvents}</span>
                  </div>
                  <p className="text-sm text-gray-600 mt-1">
                    Notable upcoming events, such as protocol upgrades or macroeconomic trends, could impact {crypto.coin}'s price movement.
                  </p>
                </li>
              </ul>
            </section>

          </div>

          <div className="space-y-8">
            <section className="bg-white rounded-lg shadow-sm p-6">
              <h4 className="text-xl font-semibold mb-4 text-purple-700 border-b pb-2">Price Projections</h4>

              {/* 7-Day Projection */}
              <div className="space-y-4">
                <div className="bg-white rounded-lg shadow-sm p-6">
                  <h5 className="font-semibold text-lg text-gray-800 mb-3">7-Day Projection:</h5>
                  <div className="flex items-center space-x-3 mb-2">
                    {getArrow(crypto.sevenDayPrediction - crypto.currentPrice)}
                    <span className="text-2xl font-bold">
                      {formatPercentage(((crypto.sevenDayPrediction - crypto.currentPrice) / crypto.currentPrice) * 100)}
                    </span>
                    <span className="text-gray-600">
                      (${crypto.currentPrice.toLocaleString()} → ${crypto.sevenDayPrediction.toLocaleString()})
                    </span>
                  </div>
                  <ul className="mt-2 space-y-1 text-sm text-gray-600">
                    <li>
                      <strong>Short-Term Trend:</strong> EMA_20 is {Number(crypto.technicalIndicators.EMA_20) > Number(crypto.technicalIndicators.EMA_50) ? 'above' : 'below'} EMA_50, signaling a potential {Number(crypto.technicalIndicators.EMA_20) > Number(crypto.technicalIndicators.EMA_50) ? 'uptrend' : 'downtrend'}.
                    </li>
                    <li>
                      <strong>Volatility:</strong> ATR is {Number(crypto.technicalIndicators.ATR) > 1000 ? 'high' : Number(crypto.technicalIndicators.ATR) > 500 ? 'moderate' : 'low'}, indicating {Number(crypto.technicalIndicators.ATR) > 1000 ? 'significant price fluctuations' : 'relative price stability'}.
                    </li>
                    <li>
                      <strong>Market Sentiment:</strong> VWAP suggests {Number(crypto.currentPrice) > Number(crypto.technicalIndicators.VWAP) ? 'buying pressure' : 'selling pressure'} is dominating.
                    </li>
                  </ul>
                </div>

                {/* 14-Day Projection */}
                <div className="bg-white rounded-lg shadow-sm p-6">
                  <h5 className="font-semibold text-lg text-gray-800 mb-3">14-Day Projection:</h5>
                  <div className="flex items-center space-x-3 mb-2">
                    {getArrow(crypto.fourteenDayPrediction - crypto.currentPrice)}
                    <span className="text-2xl font-bold">
                      {formatPercentage(((crypto.fourteenDayPrediction - crypto.currentPrice) / crypto.currentPrice) * 100)}
                    </span>
                    <span className="text-gray-600">
                      (${crypto.currentPrice.toLocaleString()} → ${crypto.fourteenDayPrediction.toLocaleString()})
                    </span>
                  </div>
                  <p className="mt-2 text-sm text-gray-600">
                    Supported by historical trends and sustained market volume. Projections indicate potential mid-term price movement driven by macroeconomic and technical factors.
                  </p>
                </div>
              </div>

              {/* Trader Insight */}
              <p className="mt-4 text-sm text-gray-600">
                <strong>Trader Insight:</strong> Projections indicate {crypto.sevenDayPrediction > crypto.currentPrice ? 'short-term upside' : 'short-term downside'} with critical levels at ${crypto.sevenDayPrediction.toFixed(2)} (7-day) and ${crypto.fourteenDayPrediction.toFixed(2)} (14-day). Plan trades accordingly to capitalize on anticipated trends.
              </p>
            </section>

            <section className="bg-white rounded-lg shadow-sm p-6">
              <h4 className="text-xl font-semibold mb-4 text-purple-700 border-b pb-2">Key Levels</h4>

              <div className="flex justify-between items-center bg-gray-50 rounded-lg shadow-inner p-6">
                {/* Resistance Level */}
                <div className="text-center">
                  <p className="font-medium text-gray-700 mb-1">Resistance Level</p>
                  <p className="text-2xl font-bold text-red-500">${(crypto.currentPrice * 1.05).toFixed(2)}</p>
                  <p className="text-sm text-gray-600 mt-1">
                    Resistance is where the price may face selling pressure. Watch for potential breakouts if the price moves above this level.
                  </p>
                </div>

                {/* Support Level */}
                <div className="text-center">
                  <p className="font-medium text-gray-700 mb-1">Support Level</p>
                  <p className="text-2xl font-bold text-green-500">${(crypto.currentPrice * 0.95).toFixed(2)}</p>
                  <p className="text-sm text-gray-600 mt-1">
                    Support acts as a safety net, where buying pressure might prevent further declines. Ideal for setting limit buy orders.
                  </p>
                </div>
              </div>

              {/* Trader Insights */}
              <p className="mt-4 text-sm text-gray-600">
                <strong>Trader Insight:</strong> Resistance at ${(crypto.currentPrice * 1.05).toFixed(2)} could trigger profit-taking, while support at ${(crypto.currentPrice * 0.95).toFixed(2)} may attract buyers. Monitor closely for breakouts or pullbacks.
              </p>
            </section>


          </div>
        </div>
      </CardContent>
    </Card>
  )
}

