import { useState } from 'react'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { ArrowUpIcon, ArrowDownIcon, TrendingUp, TrendingDown, AlertTriangle, Info } from 'lucide-react'

// Mock data for demonstration purposes
const cryptoPredictions = [
  {
    coin: "Bitcoin",
    symbol: "BTC",
    currentPrice: 50000,
    sentiment: "Bullish",
    marketCondition: "Potential Reversal",
    sevenDayPrediction: 52000,
    fourteenDayPrediction: 53000,
    tradingVolume: 1232222,
    keyEvents: "Harvest 2.0",
    technicalIndicators: {
      rsi: 65,
      mfi: 70,
      macd: 500,
      adx: 30,
      obv: 1000000,
      atr: 2000
    }
  },
  {
    coin: "Ethereum",
    symbol: "ETH",
    currentPrice: 3000,
    sentiment: "Neutral",
    marketCondition: "Potential Reversal",
    sevenDayPrediction: 3100,
    fourteenDayPrediction: 3200,
    tradingVolume: 1232222,
    keyEvents: "Harvest 2.0",
    technicalIndicators: {
      rsi: 55,
      mfi: 52,
      macd: 25,
      adx: 20,
      obv: 500000,
      atr: 100
    }
  },
  {
    coin: "Cardano",
    symbol: "ADA",
    currentPrice: 1.2,
    sentiment: "Bearish",
    marketCondition: "Overbought Zone",
    sevenDayPrediction: 1.1,
    fourteenDayPrediction: 1.0,
    tradingVolume: 1232222,
    keyEvents: "Harvest 2.0",
    technicalIndicators: {
      rsi: 75,
      mfi: 80,
      macd: -0.02,
      adx: 35,
      obv: -100000,
      atr: 0.05
    }
  },
  {
    coin: "Solana",
    symbol: "SOL",
    currentPrice: 150,
    sentiment: "Bullish",
    marketCondition: "Moderate Risk",
    sevenDayPrediction: 160,
    fourteenDayPrediction: 165,
    tradingVolume: 1232222,
    keyEvents: "Harvest 2.0",
    technicalIndicators: {
      rsi: 62,
      mfi: 65,
      macd: 3,
      adx: 25,
      obv: 200000,
      atr: 10
    }
  },
]

export default function CryptoAdvisoryDashboard() {
  const [expandedRow, setExpandedRow] = useState<string | null>(null)

  const getSentimentBadge = (sentiment: string) => {
    switch (sentiment.toLowerCase()) {
      case "bullish":
        return <Badge className="bg-green-500">Bullish</Badge>
      case "bearish":
        return <Badge className="bg-red-500">Bearish</Badge>
      case "neutral":
        return <Badge className="bg-yellow-500">Neutral</Badge>
      default:
        return <Badge className="bg-gray-500">Unknown</Badge>
    }
  }

  const getMarketConditionBadge = (condition: string) => {
    switch (condition.toLowerCase()) {
      case "overbought zone":
        return <Badge className="bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200">Overbought Zone</Badge>
      case "potential reversal":
        return <Badge className="bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200">Potential Reversal</Badge>
      case "moderate risk":
        return <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">Moderate Risk</Badge>
      default:
        return <Badge className="bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200">Unknown</Badge>
    }
  }

  const getPredictionTrend = (current: number, prediction: number) => {
    const percentage = ((prediction - current) / current) * 100
    if (percentage > 0) {
      return <TrendingUp className="text-green-500" />
    } else if (percentage < 0) {
      return <TrendingDown className="text-red-500" />
    } else {
      return null
    }
  }

  const getCautionIcon = (rsi: number, mfi: number) => {
    if (rsi > 70 || rsi < 30 || mfi > 80 || mfi < 20) {
      return (
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <AlertTriangle className="text-yellow-500" />
            </TooltipTrigger>
            <TooltipContent>
              <p>Caution: Potential overbought/oversold condition</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      )
    }
    return null
  }

  const getAdvice = (crypto: typeof cryptoPredictions[0]) => {
    const shortTermTrend = crypto.sevenDayPrediction > crypto.currentPrice
    const longTermTrend = crypto.fourteenDayPrediction > crypto.currentPrice

    if (crypto.sentiment === "Bullish" && shortTermTrend && longTermTrend) {
      return "Consider increasing your position. The market sentiment is positive, and both short-term and long-term predictions are favorable. However, always be mindful of the risk level."
    } else if (crypto.sentiment === "Bearish" && !shortTermTrend && !longTermTrend) {
      return "Consider reducing your exposure or implementing hedging strategies. The market sentiment is negative, and predictions indicate potential downward movement."
    } else if (crypto.sentiment === "Neutral" && shortTermTrend !== longTermTrend) {
      return "The market is showing mixed signals. It might be wise to hold your current position and wait for clearer trends before making significant moves."
    } else {
      return "Market conditions are uncertain. Diversify your portfolio and avoid making large position changes until the trend becomes clearer."
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen">
      <Card className="w-full max-w-6xl mx-auto">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-primary">Crypto Investment Advisory Dashboard</CardTitle>
          <CardDescription>Expert analysis and personalized advice for informed cryptocurrency investment decisions</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Coin</TableHead>
                <TableHead>Current Price</TableHead>
                <TableHead>Sentiment</TableHead>
                <TableHead>Market Condition</TableHead>
                <TableHead>7-Day Forecast</TableHead>
                <TableHead>14-Dat Forecast</TableHead>
                <TableHead>Technical Indicator</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {cryptoPredictions.map((crypto) => (
                <>
                  <TableRow key={crypto.symbol} className="hover:bg-muted/50 transition-colors">
                    <TableCell className="font-medium">
                      <div className="flex items-center gap-2">
                        {crypto.coin} ({crypto.symbol})
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger>
                              <AlertTriangle className="text-yellow-500" />
                            </TooltipTrigger>
                            <TooltipContent>
                              <p>Key Event: {crypto.keyEvents}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </div>
                    </TableCell>
                    <TableCell>${crypto.currentPrice.toLocaleString()}</TableCell>
                    <TableCell>{getSentimentBadge(crypto.sentiment)}</TableCell>
                    <TableCell>{getMarketConditionBadge(crypto.marketCondition)}</TableCell>
                    <TableCell className="flex items-center gap-2">
                      {getPredictionTrend(crypto.currentPrice, crypto.sevenDayPrediction)}
                      ${crypto.sevenDayPrediction.toLocaleString()}
                    </TableCell>

                    <TableCell>
                      {getPredictionTrend(crypto.currentPrice, crypto.sevenDayPrediction)}
                      ${crypto.sevenDayPrediction.toLocaleString()}
                    </TableCell>

                    <TableCell>
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button variant="outline" size="sm">View Indicators</Button>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-[425px]">
                          <DialogHeader>
                            <DialogTitle>Technical Indicators for {crypto.symbol}</DialogTitle>
                            <DialogDescription>
                              Detailed technical analysis indicators to inform your investment decisions.
                            </DialogDescription>
                          </DialogHeader>
                          <div className="grid gap-4 py-4">
                            <div className="grid grid-cols-2 items-center gap-4">
                              <span className="font-medium">RSI:</span>
                              <span>{crypto.technicalIndicators.rsi} ({crypto.technicalIndicators.rsi > 70 ? 'Overbought' : crypto.technicalIndicators.rsi < 30 ? 'Oversold' : 'Neutral'})</span>
                            </div>
                            <div className="grid grid-cols-2 items-center gap-4">
                              <span className="font-medium">MFI:</span>
                              <span>{crypto.technicalIndicators.mfi} ({crypto.technicalIndicators.mfi > 80 ? 'Overbought' : crypto.technicalIndicators.mfi < 20 ? 'Oversold' : 'Neutral'})</span>
                            </div>
                            <div className="grid grid-cols-2 items-center gap-4">
                              <span className="font-medium">MACD:</span>
                              <span>{crypto.technicalIndicators.macd}</span>
                            </div>
                            <div className="grid grid-cols-2 items-center gap-4">
                              <span className="font-medium">ADX:</span>
                              <span>{crypto.technicalIndicators.adx} ({crypto.technicalIndicators.adx > 25 ? 'Strong Trend' : 'Weak Trend'})</span>
                            </div>
                            <div className="grid grid-cols-2 items-center gap-4">
                              <span className="font-medium">OBV:</span>
                              <span>{crypto.technicalIndicators.obv.toLocaleString()}</span>
                            </div>
                            <div className="grid grid-cols-2 items-center gap-4">
                              <span className="font-medium">ATR:</span>
                              <span>{crypto.technicalIndicators.atr}</span>
                            </div>
                          </div>
                        </DialogContent>
                      </Dialog>
                    </TableCell>

                    {/* <TableCell className="flex items-center gap-2">
                    {getPredictionTrend(crypto.currentPrice, crypto.fourteenDayPrediction)}
                    ${crypto.fourteenDayPrediction.toLocaleString()}
                  </TableCell> */}
                    {/* <TableCell>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setExpandedRow(expandedRow === crypto.symbol ? null : crypto.symbol)}
                    >
                      {expandedRow === crypto.symbol ? 'Hide Advice' : 'Get Advice'}
                    </Button>
                  </TableCell> */}
                  </TableRow>
                  {expandedRow === crypto.symbol && (
                    <TableRow>
                      <TableCell colSpan={7}>
                        <div className="p-4 bg-muted/20 rounded-md">
                          <h4 className="font-semibold mb-2">Investment Advice for {crypto.coin}</h4>
                          <p className="mb-4">{getAdvice(crypto)}</p>
                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <span className="font-medium">Trading Volume:</span> {crypto.tradingVolume}
                            </div>
                            <div>
                              <span className="font-medium">Key Event:</span> {crypto.keyEvents}
                            </div>
                          </div>
                          <div className="mt-4">
                            <h5 className="font-semibold mb-2">Risk Management Tips:</h5>
                            <ul className="list-disc list-inside">
                              <li>Always use stop-loss orders to limit potential losses.</li>
                              <li>Don't invest more than you can afford to lose, especially in high-risk assets.</li>
                              <li>Consider dollar-cost averaging for long-term investments.</li>
                              <li>Stay informed about market news and regulatory changes that may affect {crypto.coin}.</li>
                            </ul>
                          </div>
                        </div>
                      </TableCell>
                    </TableRow>
                  )}
                </>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}