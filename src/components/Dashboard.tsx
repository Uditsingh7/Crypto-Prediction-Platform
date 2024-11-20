'use client'

import { useState } from 'react'
import { Table, TableBody, TableCell, TableHead, TableRow, TableHeader } from "@/components/ui/table"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogDescription } from "@/components/ui/dialog"
import { ScrollArea } from "@/components/ui/scroll-area"
// import { AlertTriangle, Info } from 'lucide-react'
import { Info } from 'lucide-react'
import { Input } from "@/components/ui/input"
import predData from './predData'

export default function CryptoAdvisoryDashboard() {
  const [searchTerm, setSearchTerm] = useState('')

  const filteredData = predData.filter(crypto =>
    crypto.coin.toLowerCase().includes(searchTerm.toLowerCase()) ||
    crypto.symbol.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const getSentimentBadge = (sentiment: string) => {
    switch (sentiment.toLowerCase()) {
      case "bullish":
        return <Badge className="bg-green-100 text-green-800">Bullish</Badge>
      case "strong bullish":
        return <Badge className="bg-green-200 text-green-900">Strong Bullish</Badge>
      case "bearish":
        return <Badge className="bg-red-100 text-red-800">Bearish</Badge>
      case "hold":
        return <Badge className="bg-yellow-100 text-yellow-800">Hold</Badge>
      default:
        return <Badge className="bg-gray-100 text-gray-800">Unknown</Badge>
    }
  }

  const getMarketConditionBadge = (condition: string) => {
    switch (condition.toLowerCase()) {
      case "overbought - potential reversal":
        return <Badge className="bg-red-100 text-red-800">Overbought - Potential Reversal</Badge>
      case "oversold - potential reversal":
        return <Badge className="bg-yellow-100 text-yellow-800">Oversold - Potential Reversal</Badge>
      case "neutral":
        return <Badge className="bg-green-100 text-green-800">Neutral</Badge>
      default:
        return <Badge className="bg-gray-100 text-gray-800">Unknown</Badge>
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
        <TooltipContent className="bg-white text-gray-800 p-2 rounded-md max-w-xs shadow-lg">
          <p>{content}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
  const InfoTooltip = ({ content }: { content: string }) => (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Info className="w-4 h-4 text-gray-400 inline-block ml-1 cursor-help" />
        </TooltipTrigger>
        <TooltipContent className="bg-white text-gray-800 p-2 rounded-md max-w-xs shadow-lg">
          <p>{content}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )

  const IndicatorTooltip = ({
    label,
    value,
    description,
    interpretation,
  }: {
    label: string;
    value?: number;
    description: string;
    interpretation: string;
  }) => {
    value;
    return (
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <div className="flex items-center gap-2 cursor-help">
              <Info
                className="w-4 h-4 text-purple-600"
                aria-label={`More information about ${label}`}
              />
            </div>
          </TooltipTrigger>
          <TooltipContent className="bg-white text-gray-800 p-4 rounded-md max-w-md shadow-lg">
            <h4 className="font-bold mb-2">{label}</h4>
            <p className="mb-2">
              <strong>Definition:</strong> {description}
            </p>
            <p>
              <strong>Interpretation:</strong> {interpretation}
            </p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    );
  };

  const PredictionTrend = ({ currentPrice, prediction }: { currentPrice: number; prediction: number }) => {
    const isPositive = prediction > currentPrice;
    const trendClass = isPositive ? 'text-green-600 animate-pulse' : 'text-red-600 animate-pulse';

    return <span className={`${trendClass}`}>${prediction.toLocaleString()}</span>;
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 p-4">
      <Card className="w-full max-w-6xl mx-auto bg-white border-gray-200 shadow-xl">
        <CardHeader className="border-b border-gray-200">
          <CardTitle className="text-3xl font-bold text-purple-500">Crypto Investment Advisory Dashboard</CardTitle>
          <CardDescription className="text-gray-600">Expert analysis and personalized advice for informed cryptocurrency investment decisions</CardDescription>
          <Input
            type="text"
            placeholder="Search for a coin..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="mt-4 bg-white text-gray-800 border-gray-300"
          />
        </CardHeader>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow className="border-b border-gray-200">
                <TableHead className="text-gray-600">Coin</TableHead>
                <TableHead className="text-gray-600">Current Price</TableHead>
                <TableHead className="text-gray-600">
                  Sentiment
                  <InfoTooltip content="Sentiment is calculated based on lagging indicators, providing a historical perspective on market trends." />
                </TableHead>
                <TableHead className="text-gray-600">
                  Market Condition
                  <InfoTooltip content="Market condition is determined by current indicators like RSI, potentially differing from sentiment." />
                </TableHead>
                <TableHead className="text-gray-600">
                  <ConfidenceTooltip content="Moderate confidence: Based on short-term market analysis">
                    7-Day Forecast <Info className="w-4 h-4 text-gray-400 inline-block ml-1" />
                  </ConfidenceTooltip>
                </TableHead>
                <TableHead className="text-gray-600">
                  <ConfidenceTooltip content="Lower confidence: Long-term predictions are subject to higher uncertainty">
                    14-Day Forecast <Info className="w-4 h-4 text-gray-400 inline-block ml-1" />
                  </ConfidenceTooltip>
                </TableHead>
                <TableHead className="text-gray-600">Technical Indicators</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredData.map((crypto) => (
                <TableRow key={crypto.symbol} className="hover:bg-gray-50 transition-colors border-b border-gray-200">
                  <TableCell className="font-medium">
                    <div className="flex items-center gap-2">
                      <img src={crypto.imageUrl} alt={`${crypto.coin} logo`} width={24} height={24} />
                      <span className="text-gray-800">{crypto.coin} ({crypto.symbol})</span>
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger>
                            {/* <AlertTriangle className="text-yellow-500" /> */}
                          </TooltipTrigger>
                          <TooltipContent className="bg-white text-gray-800 p-2 rounded-md shadow-lg">
                            <p>Key Event: {crypto.keyEvents}</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </div>
                  </TableCell>
                  <TableCell className="text-gray-800">${crypto.currentPrice.toLocaleString()}</TableCell>
                  <TableCell>{getSentimentBadge(crypto.sentiment)}</TableCell>
                  <TableCell>{getMarketConditionBadge(crypto.marketCondition)}</TableCell>
                  <TableCell className="text-gray-800">
                    <PredictionTrend currentPrice={crypto.currentPrice} prediction={crypto.sevenDayPrediction} />
                  </TableCell>
                  <TableCell className="text-gray-800">
                    <PredictionTrend currentPrice={crypto.currentPrice} prediction={crypto.fourteenDayPrediction} />
                  </TableCell>
                  <TableCell>
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant="outline" size="sm" className="bg-purple-600 text-white hover:bg-purple-700">View Indicators</Button>
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-[600px] bg-white text-gray-800">
                        <DialogHeader>
                          <DialogTitle className="text-purple-600">Technical Indicators for {crypto.symbol}</DialogTitle>
                          <DialogDescription className="text-gray-600">
                            Detailed technical analysis indicators to inform your investment decisions.
                          </DialogDescription>
                        </DialogHeader>
                        <ScrollArea className="h-[400px] pr-4">
                          <div className="grid grid-cols-2 gap-4 py-4">
                            {Object.entries(crypto.technicalIndicators).map(([key, value]) => (
                              <div key={key} className="flex items-center justify-between">
                                <span className="font-medium text-purple-600">{key.replace(/_/g, ' ')}:</span>
                                <div className="flex items-center gap-2">
                                  <span className="text-gray-800">
                                    {typeof value === 'number'
                                      ? key.includes('Percentage')
                                        ? `${value.toFixed(2)}%`
                                        : value.toLocaleString(undefined, { maximumFractionDigits: 2 })
                                      : value}
                                  </span>
                                  <IndicatorTooltip
                                    label={key.replace(/_/g, ' ')}
                                    value={typeof value === 'number' ? value : 0}
                                    description={getIndicatorDescription(key)}
                                    interpretation={getIndicatorInterpretation(key, value)}
                                  />
                                </div>
                              </div>
                            ))}
                          </div>
                        </ScrollArea>
                      </DialogContent>
                    </Dialog>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}


function getIndicatorDescription(indicator: string): string {
  switch (indicator) {
    case 'SMA_50':
    case 'SMA_100':
    case 'SMA_200':
      return `Simple Moving Average (SMA) calculates the average of a selected range of prices, usually closing prices, by the number of periods in that range.`
    case 'EMA_50':
    case 'EMA_100':
    case 'EMA_20':
      return `Exponential Moving Average (EMA) is a type of moving average that places a greater weight and significance on the most recent data points.`
    case 'RSI':
      return "Relative Strength Index (RSI) is a momentum oscillator that measures the speed and change of price movements."
    case 'MACD':
      return "Moving Average Convergence Divergence (MACD) is a trend-following momentum indicator that shows the relationship between two moving averages of a security's price."
    case 'MACD_Signal':
      return "The MACD Signal line is typically a 9-period EMA of the MACD line itself, used to identify changes in the MACD."
    case 'Bollinger_Upper':
    case 'Bollinger_Lower':
      return "Bollinger Bands consist of a middle band being an N-period simple moving average (SMA), an upper band at K times an N-period standard deviation above the middle band, and a lower band at K times an N-period standard deviation below the middle band."
    case 'OBV':
      return "On-Balance Volume (OBV) is a momentum indicator that uses volume flow to predict changes in stock price."
    case 'OBV_MA':
      return "On-Balance Volume Moving Average (OBV MA) is a moving average of the OBV indicator, used to smooth out the OBV line and provide clearer signals."
    case 'ATR':
      return "Average True Range (ATR) is a technical analysis indicator that measures market volatility by decomposing the entire range of an asset price for that period."
    case 'ADX':
      return "Average Directional Index (ADX) is used to determine the strength of a trend, whether up or down."
    case 'MFI':
      return "Money Flow Index (MFI) is a technical oscillator that uses price and volume data to identify overbought or oversold conditions in an asset."
    case 'VWAP':
      return "Volume Weighted Average Price (VWAP) is a trading benchmark used especially in pension plans, calculated by adding up the dollars traded for every transaction (price multiplied by number of shares traded) and then dividing by the total shares traded for the day."
    case 'Predicted_24h_Price_Change_Percentage':
      return "This is the predicted percentage change in price over the next 24 hours based on current market conditions and historical data."
    default:
      return "A technical indicator used in cryptocurrency analysis."
  }
}

function getIndicatorInterpretation(indicator: string, value: number): string {
  switch (indicator) {
    case 'SMA_50':
    case 'SMA_100':
    case 'SMA_200':
    case 'EMA_50':
    case 'EMA_100':
    case 'EMA_20':
      return `Current value: ${value.toFixed(2)}. If the price is above the ${indicator}, it's generally considered bullish. If below, it's considered bearish.`
    case 'RSI':
      return `RSI ranges from 0 to 100. Traditionally, RSI is considered overbought when above 70 and oversold when below 30. Current value: ${value.toFixed(2)}, indicating ${value > 70 ? 'overbought' : value < 30 ? 'oversold' : 'neutral'} conditions.`
    case 'MACD':
      return `The MACD line crossing above the signal line is typically considered a bullish signal, while crossing below is bearish. Current MACD value: ${value.toFixed(2)}.`
    case 'MACD_Signal':
      return `This is used in conjunction with the MACD line. Current MACD Signal value: ${value.toFixed(2)}.`
    case 'Bollinger_Upper':
    case 'Bollinger_Lower':
      return `Current ${indicator} Band: ${value.toFixed(2)}. Price near the upper band suggests overbought conditions, while price near the lower band suggests oversold conditions.`
    case 'OBV':
      return `When OBV is rising, it shows that buyers are willing to step in and push the price higher. When OBV is falling, the selling volume is outpacing buying volume, which indicates lower prices. Current OBV: ${value.toLocaleString()}.`
    case 'OBV_MA':
      return `This smooths out the OBV line. If OBV crosses above its MA, it's considered bullish; if it crosses below, it's bearish. Current OBV MA: ${value.toLocaleString()}.`
    case 'ATR':
      return `A higher ATR value indicates higher volatility, while a lower ATR indicates lower volatility. Current ATR: ${value.toFixed(2)}, suggesting ${value > 1000 ? 'high' : value > 500 ? 'moderate' : 'low'} volatility.`
    case 'ADX':
      return `ADX values range from 0 to 100. A reading above 25 indicates a strong trend, while a reading below 20 indicates a weak trend. Current ADX: ${value.toFixed(2)}, indicating a ${value > 25 ? 'strong' : value < 20 ? 'weak' : 'moderate'} trend.`
    case 'MFI':
      return `MFI ranges from 0 to 100. Readings above 80 are considered overbought, while readings below 20 are considered oversold. Current MFI: ${value.toFixed(2)}, indicating ${value > 80 ? 'overbought' : value < 20 ? 'oversold' : 'neutral'} conditions.`
    case 'VWAP':
      return `Current VWAP: ${value.toFixed(2)}. If the asset price is above VWAP, it's considered bullish; if below, it's bearish.`
    case 'Predicted_24h_Price_Change_Percentage':
      return `The price is predicted to change by ${value.toFixed(2)}% in the next 24 hours. ${value > 0 ? 'A positive value indicates an expected price increase.' : 'A negative value indicates an expected price decrease.'}`
    default:
      return `Current value: ${value.toFixed(2)}`
  }
}