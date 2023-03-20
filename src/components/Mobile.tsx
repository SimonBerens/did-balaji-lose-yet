import type { TimeProps } from "@/time";
import Script from "next/script";

export function Mobile({ time }: TimeProps) {
  return (
    <div className="flex flex-col items-center [&>*]:mt-10">
      <div className="w-fit mx-auto text-4xl font-sans font-medium text-center space-y-4">
        <div>Did Balaji Lose Yet?</div>
        <div className="text-red-500"> Not Yet.</div>
      </div>
      <div className="flex flex-col items-center w-fit mx-auto text-2xl">
        <h3 className="text-center">Target Price: <span className="font-mono text-green-600">$1,000,000</span></h3>
        <h3 className="text-center">Time left: {time}</h3>
      </div>
      <Script type="text/javascript" src="https://files.coinmarketcap.com/static/widget/currency.js" />
      <div className="coinmarketcap-currency-widget" data-currencyid="1" data-base="USD" data-secondary=""
           data-ticker="true" data-rank="false" data-marketcap="false" data-volume="false" data-statsticker="false"
           data-stats="USD"></div>
    </div>
  );
}