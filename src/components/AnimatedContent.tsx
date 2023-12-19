import React, { useEffect, useMemo, useRef, useState } from "react";
import { useIsVisible } from "~/lib/useIsVisible";

const AnimatedContent = () => {
  const containerRef = useRef<HTMLDivElement | null>(null); // Update type here
  const ref1 = useRef<null | HTMLElement>(null);
  const isVisible1 = useIsVisible(ref1);
  const ref2 = useRef<null | HTMLElement>(null);
  const isVisible2 = useIsVisible(ref2);

  useEffect(() => {
    const handleScroll = (event: WheelEvent) => {
      if (containerRef.current) {
        const scroll = containerRef.current?.scrollTop;
        const isDown = event.deltaY > 0;

        // console.log("isScrollingDown", isScrollingDown);
        // console.log("containerScrollTop", curScroll);

        if (scroll > 0 && isDown) {
          console.log("first");

          containerRef.current.scrollTo({
            top: 71,
            behavior: "smooth",
          });
          console.log("after scroll");
        }
        if (scroll < 72 && !isDown) {
          console.log("second");
          containerRef.current.scrollTo({
            top: 1,
            behavior: "smooth",
          });
        }
      }
    };

    // console.log("cur", cur);

    if (containerRef.current) {
      containerRef.current.addEventListener("wheel", handleScroll);
    }

    return () => {
      if (containerRef.current) {
        containerRef.current.removeEventListener("wheel", handleScroll);
      }
    };
  }, [isVisible1, isVisible2]);

  return (
    <div className="text-3xl font-bold">
      <h1>Animated Content</h1>
      {/* Update ref type here */}

      <div
        ref={containerRef as React.RefObject<HTMLDivElement>} // Cast to RefObject
        className="board flex max-h-[10rem] flex-col gap-y-40 overflow-hidden"
      >
        <section
          ref={ref1}
          className={`transition-opacity duration-1000 ease-in ${
            isVisible1 ? "opacity-100" : "opacity-0"
          }`}
        >
          Hello
        </section>
        <section
          ref={ref2}
          className={`transition-opacity duration-1000 ease-in ${
            isVisible2 ? "opacity-100" : "opacity-0"
          }`}
        >
          Welcome
        </section>
        {/* ... other sections ... */}
      </div>
    </div>
  );
};

export default AnimatedContent;
