import { SlideUpDiv } from "./motion";

export default function Notif() {
  return (
    <SlideUpDiv delay={0.25} className="fixed bottom-0 right-0 left-0 mx-auto w-screen flex items-center justify-center content-center mb-5 z-20">
      <div className="inline-flex border border-orange-500 bg-orange-500/10 backdrop-blur-xl px-5 py-3 rounded-2xl">
        <h4 className="animate-pulse">website under construction</h4>
      </div>
    </SlideUpDiv>
  );
}
