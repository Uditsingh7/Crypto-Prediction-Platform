'use client'

import { useState } from 'react'
import { Table, TableBody, TableCell, TableHead, TableRow, TableHeader } from "@/components/ui/table"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogDescription } from "@/components/ui/dialog"
import { TrendingUp, TrendingDown, AlertTriangle, Info } from 'lucide-react'
import predData from './predData'

export default function CryptoAdvisoryDashboard() {
  const [expandedRow, setExpandedRow] = useState<string | null>(null)
 const cryptoPredictions = predData


  const getSentimentBadge = (sentiment: string) => {
    switch (sentiment.toLowerCase()) {
      case "bullish":
        return <Badge className="bg-green-500">Bullish</Badge>
      case "strong bullish":
        return <Badge className="bg-green-700">Strong Bullish</Badge>
      case "bearish":
        return <Badge className="bg-red-500">Bearish</Badge>
      case "hold":
        return <Badge className="bg-yellow-500">Hold</Badge>
      default:
        return <Badge className="bg-gray-500">Unknown</Badge>
    }
  }

  const getMarketConditionBadge = (condition: string) => {
    switch (condition.toLowerCase()) {
      case "overbought - potential reversal":
        return <Badge className="bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200">Overbought - Potential Reversal</Badge>
      case "oversold - potential reversal":
        return <Badge className="bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200">Oversold - Potential Reversal</Badge>
      case "neutral":
        return <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">Neutral</Badge>
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

  const ConfidenceTooltip = ({ children, content }: { children: React.ReactNode; content: string }) => (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <div className="flex items-center gap-1 cursor-help">
            {children}
          </div>
        </TooltipTrigger>
        <TooltipContent>
          <p>{content}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )

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
                <TableHead>
                  <ConfidenceTooltip content="Moderate confidence: Based on short-term market analysis">
                    7-Day Forecast <Info className="w-4 h-4 text-muted-foreground" />
                  </ConfidenceTooltip>
                </TableHead>
                <TableHead>
                  <ConfidenceTooltip content="Lower confidence: Long-term predictions are subject to higher uncertainty">
                    14-Day Forecast <Info className="w-4 h-4 text-muted-foreground" />
                  </ConfidenceTooltip>
                </TableHead>
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
                    <TableCell className="">
                      {getPredictionTrend(crypto.currentPrice, crypto.fourteenDayPrediction)}
                      ${crypto.fourteenDayPrediction.toLocaleString()}
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
                              <span>{crypto.technicalIndicators.RSI} ({crypto.technicalIndicators.RSI > 70 ? 'Overbought' : crypto.technicalIndicators.RSI < 30 ? 'Oversold' : 'Neutral'})</span>
                            </div>
                            <div className="grid grid-cols-2 items-center gap-4">
                              <span className="font-medium">MFI:</span>
                              <span>{crypto.technicalIndicators.MFI} ({crypto.technicalIndicators.MFI > 80 ? 'Overbought' : crypto.technicalIndicators.MFI < 20 ? 'Oversold' : 'Neutral'})</span>
                            </div>
                            <div className="grid grid-cols-2 items-center gap-4">
                              <span className="font-medium">MACD:</span>
                              <span>{crypto.technicalIndicators.MACD}</span>
                            </div>
                            <div className="grid grid-cols-2 items-center gap-4">
                              <span className="font-medium">ADX:</span>
                              <span>{crypto.technicalIndicators.ADX} ({crypto.technicalIndicators.ADX > 25 ? 'Strong Trend' : 'Weak Trend'})</span>
                            </div>
                            <div className="grid grid-cols-2 items-center gap-4">
                              <span className="font-medium">OBV:</span>
                              <span>{crypto.technicalIndicators.OBV.toLocaleString()}</span>
                            </div>
                            <div className="grid grid-cols-2 items-center gap-4">
                              <span className="font-medium">ATR:</span>
                              <span>{crypto.technicalIndicators.ATR}</span>
                            </div>
                          </div>
                        </DialogContent>
                      </Dialog>
                    </TableCell>
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