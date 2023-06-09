import { useState, useEffect, useRef } from "react";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";

dayjs.extend(utc);
dayjs.extend(timezone);

import { ArrowRightIcon } from "@radix-ui/react-icons";

export default function LocalTime() {
  const [currentTime, setCurrentTime] = useState<string>(
    dayjs().tz("America/Los_Angeles").format("hh:mm A")
  );
  const flagRef = useRef<HTMLParagraphElement | null>(null);

  const handleTimeMouseMove = (e: MouseEvent) => {
    if (flagRef.current) {
      const rect = flagRef.current.getBoundingClientRect();
      const scrollTop = document.documentElement.scrollTop;
      const scrollLeft = document.documentElement.scrollLeft;
      flagRef.current.style.left = `${e.clientX - rect.width - scrollLeft}px`;
      flagRef.current.style.top = `${e.clientY - rect.height + scrollTop}px`;
    }
  };

  const handleTimeHoverEnter = () => {
    const flag = document.createElement("p");
    flag.textContent = "🇺🇸";
    flag.style.position = "absolute";
    flag.style.zIndex = "10";
    flag.style.width = "30px";
    flag.style.height = "20px";
    flagRef.current = flag;

    document.body.appendChild(flag);

    document.addEventListener("mousemove", handleTimeMouseMove);
  };

  const handleTimeHoverLeave = () => {
    if (flagRef.current) {
      document.body.removeChild(flagRef.current);
      flagRef.current = null;
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(dayjs().tz("America/Los_Angeles").format("hh:mm A"));
    }, 1000);

    return () => {
      clearInterval(interval);
      document.removeEventListener("mousemove", handleTimeMouseMove);
    };
  }, []);

  return (
    <p
      className="leading-none flex border border-white rounded-lg p-1 px-2 text-sm max-md:text-xs"
      onMouseEnter={handleTimeHoverEnter}
      onMouseLeave={handleTimeHoverLeave}
    >
      LOCAL TIME&nbsp;
      <ArrowRightIcon />
      &nbsp;{currentTime}
    </p>
  );
}
