import React, { memo, useEffect, useRef } from "react";

interface TradingViewWidgetProps {
  className?: string;
}

function TradingViewWidget({ className }: TradingViewWidgetProps) {
  const container = useRef<HTMLDivElement>(null);

  useEffect(
    () => {
      const script = document.createElement("script");
      script.src = "https://s3.tradingview.com/external-embedding/embed-widget-symbol-overview.js";
      script.type = "text/javascript";
      script.async = true;
      script.innerHTML = `
        {
          "symbols": [
            [
              "BTC",
              "COINBASE:BTCUSD|12M"
            ]
          ],
          "chartOnly": false,
          "width": 1000,
          "height": 500,
          "locale": "en",
          "colorTheme": "light",
          "autosize": false,
          "showVolume": false,
          "showMA": false,
          "hideDateRanges": false,
          "hideMarketStatus": false,
          "hideSymbolLogo": false,
          "scalePosition": "right",
          "scaleMode": "Normal",
          "fontFamily": "-apple-system, BlinkMacSystemFont, Trebuchet MS, Roboto, Ubuntu, sans-serif",
          "fontSize": "10",
          "noTimeScale": false,
          "valuesTracking": "1",
          "changeMode": "price-and-percent",
          "chartType": "line"
        }`;
      if (container.current) {
        container.current.appendChild(script);
      }
    },
    []
  );

  return (
    <div className={`tradingview-widget-container ${className ?? ""}`} ref={container}>
      <div className="tradingview-widget-container__widget"></div>
      <div className="tradingview-widget-copyright"><a
        href="https://www.tradingview.com/symbols/BTCUSD/?exchange=COINBASE" rel="noopener" target="_blank"><span
        className="blue-text">Bitcoin price</span></a> by TradingView
      </div>
    </div>
  );
}

export default memo(TradingViewWidget);
