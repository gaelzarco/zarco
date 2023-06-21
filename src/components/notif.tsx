import { SlideUpDiv } from "./motion";

export default function Notif() {
  return (
    <SlideUpDiv
      delay={0.25}
      className="fixed bottom-0 self-center flex items-center justify-center content-center mb-3 z-20"
    >
      <div className="inline-flex border border-orange-500 bg-orange-500/10 backdrop-blur-xl px-3 py-1 rounded-full">
        <h4 className="animate-pulse">Website under construction</h4>
      </div>
    </SlideUpDiv>
  );
}
