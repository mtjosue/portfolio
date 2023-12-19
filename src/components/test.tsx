import Image from "next/image";
import React, { useEffect, useMemo, useRef, useState } from "react";
import classNames from "~/lib/classNames";
import { useIsVisible } from "~/lib/useIsVisible";
import pic from "../../public/profilePic.jpeg";
import linkedin from "../../public/icons8-linkedin-48.png";
import github from "../../public/icons8-github-48.png";
import { useSpring, animated } from "react-spring";

const SecondHome = () => {
  const ref1 = useRef<HTMLElement>(null);
  const isVisible1 = useIsVisible(ref1);
  const ref2 = useRef<null | HTMLElement>(null);
  const isVisible2 = useIsVisible(ref2);
  const ref3 = useRef<null | HTMLElement>(null);
  const isVisible3 = useIsVisible(ref3);
  const conRef = useRef<null | HTMLElement>(null);

  const curVis = useMemo(() => {
    if (isVisible1) {
      return 1;
    }
    if (isVisible2) {
      return 2;
    }
    if (isVisible3) {
      return 3;
    }
  }, [isVisible1, isVisible2, isVisible3]);

  const [scrollPosition, setScrollPosition] = useState(0);
  const [conPosition, setConPosition] = useState(0);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    setWidth(window.innerWidth / 2);
    const handleScroll = () => {
      if (ref2.current) {
        console.log("Scroll Top: ", ref2.current.scrollTop);
        setScrollPosition(ref2.current.scrollTop);
      }
    };
    const handleScrollCon = () => {
      if (conRef.current) {
        console.log("Con Top: ", conRef.current.scrollTop);
        setConPosition(conRef.current.scrollTop);
      }
    };
    // window.addEventListener("scroll", handleScroll);
    ref2.current?.addEventListener("scroll", handleScroll);
    conRef.current?.addEventListener("scroll", handleScrollCon);
    return () => {
      ref2.current?.removeEventListener("scroll", handleScroll);
      conRef.current?.removeEventListener("scroll", handleScrollCon);
    };
  }, []);

  const { opacity, transform, left, top } = useSpring({
    top: 10,
    left: 0,
    opacity: conPosition > 0 ? 1 : 0, // Adjust the threshold based on when you want the circle to start appearing
    transform: `translate(${Math.min(
      conPosition * 6,
      width - 45,
    )}px, ${Math.min(conPosition * 6, 80)}px) rotate(${Math.min(
      conPosition * 6 + 180,
      360,
    )}deg)`,

    config: { tension: 50, friction: 10 },
  });

  return (
    <div className="relative h-full w-full text-lg">
      <div
        ref={conRef as React.RefObject<HTMLDivElement>}
        className="scroll-hide relative h-full w-full overflow-y-auto"
      >
        <div
          id="1"
          ref={ref1 as React.RefObject<HTMLDivElement>}
          className={classNames(
            `absolute left-0 top-0 z-10 flex h-full w-full flex-col items-center justify-center rounded-sm px-3`,
            "transition-opacity duration-1000 ease-in-out",
            isVisible1 ? "opacity-100" : "opacity-0",
          )}
        >
          {isVisible1 && (
            <h1
              className="mb-2 text-xl text-gray-200"
              style={{
                animation: `descend 2s ease-in-out`,
              }}
            >
              Josue R. Mata
            </h1>
          )}
          {isVisible1 && (
            <div className="mb-2 flex flex-col items-center gap-y-3">
              <p
                style={{
                  animation: `left-to-right 2s ease-in-out`,
                }}
                className="max-w-xs gap-y-1 text-base font-medium"
              >
                A dedicated junior fullstack developer, enthusiastic about
                crafting user-friendly web applications and eager to collaborate
                on challenging projects in a professional environment.
              </p>
              <div
                className="h-full flex-grow rounded-lg"
                style={{
                  animation: `right-to-left 2s ease-in-out forwards`,
                }}
              >
                <Image
                  src={pic}
                  alt=""
                  width={250}
                  // height={400}
                  className="flex-grow rounded-lg"
                />
              </div>
            </div>
          )}
          {isVisible1 && (
            <div
              className="flex gap-x-3"
              style={{
                animation: `ascend 2s ease-in-out forwards`,
              }}
            >
              <Image
                src={github}
                alt=""
                className="h-12 w-12 hover:animate-pulse"
              />
              <Image
                src={linkedin}
                alt=""
                className="h-12 w-12 hover:animate-pulse"
              />
            </div>
          )}
        </div>
        <div className="h-[74vh] w-full" />
        <div className="flex w-full justify-end">
          <animated.div
            className={classNames("", "h-16 w-24 bg-blue-500", ``)}
            style={{
              opacity,
              transform,
            }}
          >
            <span>Hello! I'm a results-driven individual</span>
          </animated.div>
        </div>

        <div className="h-[120vh] w-full" />
      </div>
    </div>
  );
};

export default SecondHome;
