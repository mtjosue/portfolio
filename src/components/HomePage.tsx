// import Link from "next/link";
import { FolderIcon, HomeIcon, UserIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useMemo, useRef, useState } from "react";
import classNames from "~/lib/classNames";
import { useIsVisible } from "~/lib/useIsVisible";
import pic from "../../public/profilePic.jpeg";
import sunset from "../../public/sunset-404072_640.jpg";
import linkedin from "../../public/icons8-linkedin-48.png";
import github from "../../public/icons8-github-48.png";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { useSpring, animated } from "react-spring";

const HomePage = () => {
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

  //   console.log("curVis", curVis);

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

  //   // Animate the circle based on the scroll position
  //   const { opacity, transform, left, top } = useSpring({
  //     top: 0,
  //     left: 0,

  //     opacity: scrollPosition > 100 ? 1 : 0, // Adjust the threshold based on when you want the circle to start appearing
  //     // transform: `translateX(${Math.min(
  //     //   scrollPosition,
  //     //   180,
  //     // )}px) rotate(${Math.min(scrollPosition, 179.5)}deg)`,
  //     transform: `translate(${Math.min(scrollPosition, 180)}px, ${Math.min(
  //       scrollPosition,
  //       180,
  //     )}px) rotate(${Math.min(scrollPosition, 179.5)}deg)`,

  //     config: { tension: 80, friction: 15 },
  //   });
  // Animate the circle based on the scroll position
  const { opacity, transform, left, top } = useSpring({
    top: 500,
    left: 0,
    opacity: conPosition > 20 ? 1 : 0, // Adjust the threshold based on when you want the circle to start appearing
    // transform: `translate(${Math.min(conPosition * 4, 180)}px, -${Math.min(
    //   conPosition * 2,
    //   45,
    // )}px) rotate(${Math.min(conPosition * 6 + 180, 360)}deg)`,
    // transform: `translateX(${Math.min(
    //   conPosition * 4,
    //   180,
    // )}px) rotate(${Math.min(conPosition * 6 + 180, 360)}deg)`,
    transform: `translateX(${Math.min(conPosition * 6, width - 45)}px)`,

    config: { tension: 50, friction: 10 },
  });
  //   rotate(${Math.min(
  //       conPosition * 6 + 180,
  //       360,
  //     )}deg)

  return (
    <div className="relative h-full w-full text-lg">
      <div className="absolute bottom-3 right-3 z-10 font-bold md:bottom-[50vh]">
        <div className="relative flex flex-col gap-y-9 text-slate-500">
          <div className="absolute right-[3px] h-full border-r-2 border-slate-500" />
          <a
            href="#1"
            className={classNames(
              isVisible1 ? "text-slate-200" : "",
              "flex items-center justify-end gap-x-2",
            )}
          >
            <span
              className={classNames(
                "text-sm transition-all duration-500 ease-in-out ",
                isVisible1 ? "opacity-100" : "opacity-0",
              )}
            >
              <HomeIcon className="h-5 w-5" strokeWidth={2} />
            </span>
            <div
              id="bullet"
              className={classNames(
                "transition-all duration-500 ease-in-out",
                "relative h-2 w-2 rounded-full",
                isVisible1 ? "bg-slate-200" : "bg-slate-500",
              )}
            />
          </a>
          <a
            href="#2"
            className={classNames(
              isVisible2 ? "text-slate-200" : "",
              "flex items-center justify-end gap-x-2",
            )}
          >
            <span
              className={classNames(
                "text-sm transition-all duration-500 ease-in-out ",
                isVisible2 ? "opacity-100" : "opacity-0",
              )}
            >
              <UserIcon className="h-5 w-5" strokeWidth={2} />
            </span>
            <div
              id="bullet"
              className={classNames(
                "transition-all duration-500 ease-in-out",
                "relative h-2 w-2 rounded-full",
                isVisible2 ? "bg-slate-200" : "bg-slate-500",
              )}
            />
          </a>
          <a
            href="#3"
            className={classNames(
              isVisible3 ? "text-slate-200" : "",
              "flex items-center justify-end gap-x-2",
            )}
          >
            <span
              className={classNames(
                "text-sm transition-all duration-500 ease-in-out ",
                isVisible3 ? "opacity-100" : "opacity-0",
              )}
            >
              <FolderIcon className="h-5 w-5" strokeWidth={2} />
            </span>
            <div
              id="bullet"
              className={classNames(
                "transition-all duration-500 ease-in-out",
                "relative h-2 w-2 rounded-full",
                isVisible3 ? "bg-slate-200" : "bg-slate-500",
              )}
            />
          </a>
        </div>
      </div>

      <div
        ref={conRef as React.RefObject<HTMLDivElement>}
        className="scroll-hide h-full w-full overflow-y-auto"
      >
        <div
          id="1"
          ref={ref1 as React.RefObject<HTMLDivElement>}
          className={classNames(
            `flex h-full w-full flex-col items-center justify-center rounded-sm px-3`,
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
        <animated.div
          className={classNames("relative", "h-16 w-24 bg-blue-500", ``)}
          style={{
            // top,
            // left,
            opacity,
            transform,
          }}
        >
          <span>Hello! I'm a results-driven individual</span>
        </animated.div>
        <div
          id="2"
          ref={ref2 as React.RefObject<HTMLDivElement>}
          className={classNames(
            !isVisible1 && "overflow-auto",
            "scroll-hide relative mt-1 h-full w-full",
          )}
        >
          <div className="h-[100vh]"></div>
          <div className="h-[100vh] bg-slate-700"></div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;

// Hello! I'm a results-driven individual with a profound passion for
// the intersection of art and science. Technology has always
// captivated me, and about three years ago, I took the leap into
// unraveling the mysteries of the internet of things. Life has been a
// journey of growth, aiming to be of value to others.
