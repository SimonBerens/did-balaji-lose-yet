import type { TimeProps } from "@/time";
import TradingViewWidget from "@/components/TradingViewWidget";

export function Desktop({ time }: TimeProps) {
  return (
    <>
      <div className="w-fit mx-auto text-6xl font-sans font-medium my-10">
        Did Balaji Lose Yet? <span className="text-red-500"> Not Yet.</span>
      </div>
      <div className="flex flex-row space-x-10 w-fit mx-auto my-10 text-3xl">
        <h3>Target Price: <span className="font-mono text-green-600">$1,000,000</span></h3>
        <h3>Time left: {time}</h3>
      </div>
      <TradingViewWidget className="w-fit mx-auto"/>
    </>
  );
}