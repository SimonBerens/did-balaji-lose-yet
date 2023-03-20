import { type NextPage } from "next";
import { useEffect, useState } from "react";
import { getTimeStr } from "@/time";
import { Desktop } from "@/components/Desktop";
import { Mobile } from "@/components/Mobile";

const Home: NextPage = () => {
  const [timeStr, setTimeStr] = useState<string>("");
  useEffect(() => {
    const interval = setInterval(() => {
      setTimeStr(getTimeStr());
    })
    return () => {
      clearInterval(interval);
    }
  }, [])

  if (typeof window !== 'undefined' && window.screen.width < 768) {
    return (
      <Mobile time={timeStr} />
    )
  }

  return (
    <Desktop time={timeStr} />
  );
};

export default Home;
