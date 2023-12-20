// import Link from "next/link";
import { FolderIcon, HomeIcon, UserIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useMemo, useRef, useState } from "react";
import classNames from "~/lib/classNames";
import { useIsVisible } from "~/lib/useIsVisible";
import pic from "../../public/profilePic.jpeg";
// import sunset from "../../public/sunset-404072_640.jpg";
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

  //   console.log("curVis", curVis);

  const [scrollPosition, setScrollPosition] = useState(0);
  const [conPosition, setConPosition] = useState(0);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    console.log("innerWidth", window.innerWidth / 2);
    setWidth(window.innerWidth);
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

  // First animated.div
  const { opacity, transform } = useSpring({
    top: 10,
    left: 0,
    config: { tension: 50, friction: 10 },
    opacity: conPosition > 0 ? 1 : 0,
    transform: `translate(${Math.min(
      conPosition * 6,
      width - 160,
    )}px, ${Math.min(conPosition * 6, 80)}px) rotate(${
      180 + Math.min(conPosition * 3, 180)
    }deg)`,
    // transform: `translate(0px, ${Math.min(
    //   conPosition * 6,
    //   80,
    // )}px) rotate(${Math.min(conPosition * 6 + 180, 360)}deg)`,
  });

  // Second animated.div
  const { opacity: opa2, transform: trans2 } = useSpring({
    top: 10,
    left: 0,
    config: { tension: 50, friction: 10 },
    opacity: conPosition > 300 ? 1 : 0,
    transform: `translate(-${Math.min(
      conPosition > 300 ? (conPosition - 300) * 6 : 0,
      width - 160,
    )}px, ${Math.min(
      conPosition > 300 ? (conPosition - 300) * 6 : 0,
      80,
    )}px) rotate(${
      180 - Math.min(conPosition > 300 ? (conPosition - 300) * 3 : 0, 180)
    }deg)`,
  });

  // third animated.div
  const { opacity: opa3, transform: trans3 } = useSpring({
    top: 10,
    left: 0,
    config: { tension: 50, friction: 10 },
    opacity: conPosition > 800 ? 1 : 0,
    transform: `translate(${Math.min(
      conPosition > 800 ? (conPosition - 800) * 6 : 0,
      width - 160,
    )}px, -${Math.min(
      conPosition > 800 ? (conPosition - 800) * 6 : 0,
      80,
    )}px) rotate(${
      180 + Math.min(conPosition > 800 ? (conPosition - 800) * 3 : 0, 180)
    }deg)`,
  });

  // fourth animated.div
  const { opacity: opa4, transform: trans4 } = useSpring({
    top: 10,
    left: 0,
    config: { tension: 50, friction: 10 },
    opacity: conPosition > 950 ? 1 : 0,
    transform: `translate(-${Math.min(
      conPosition > 950 ? (conPosition - 950) * 6 : 0,
      width - 160,
    )}px, -${Math.min(
      conPosition > 950 ? (conPosition - 950) * 6 : 0,
      80,
    )}px) rotate(${
      180 - Math.min(conPosition > 950 ? (conPosition - 950) * 3 : 0, 180)
    }deg)`,
  });

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
        className="scroll-hide relative h-full w-full overflow-y-auto"
      >
        <div
          id="1"
          ref={ref1 as React.RefObject<HTMLDivElement>}
          className={classNames(
            `absolute left-0 top-0 z-40 flex h-full w-full flex-col items-center justify-center rounded-sm`,
            "transition-opacity duration-1000 ease-in-out",
            isVisible1 ? "opacity-100" : "opacity-0",
          )}
        >
          <div className="w-[16rem] space-y-1">
            {isVisible1 && (
              <h1
                className="text-3xl text-gray-100"
                style={{
                  animation: `descend 2s ease-in-out`,
                }}
              >
                Josue R. Mata
              </h1>
            )}

            {isVisible1 && (
              <div className="flex flex-col gap-y-3">
                <div
                  className="text-base font-semibold"
                  style={{
                    animation: `left-to-right 2s ease-in-out`,
                  }}
                >
                  Junior Fullstack Developer.
                  <br />
                  Eager for challenging tasks.
                </div>
                <div
                  className="rounded-lg"
                  style={{
                    animation: `right-to-left 2s ease-in-out forwards`,
                  }}
                >
                  <Image src={pic} alt="" className="flex-grow rounded-lg" />
                </div>
              </div>
            )}

            {isVisible1 && (
              <div
                className="flex justify-end gap-x-2"
                style={{
                  animation: `ascend 2s ease-in-out forwards`,
                }}
              >
                <Image
                  className="h-12 w-12 hover:animate-pulse "
                  src={linkedin}
                  alt=""
                />
                <Image
                  className="h-12 w-12 hover:animate-pulse "
                  src={github}
                  alt=""
                />
              </div>
            )}
          </div>
        </div>

        <div
          className={classNames(
            width > 400 ? "h-[73vh]" : "h-[81vh]",
            "w-full",
          )}
        />

        <animated.div
          className={classNames(
            "max-w-[16rem]",
            "rounded-sm bg-slate-800 p-3 shadow-lg",
            `-ml-[42.3vw]`,
          )}
          style={{
            opacity,
            transform,
          }}
        >
          <span className="font-bold">
            Hello! I'm a results-driven individual with a profound passion for
            the intersection of art and science. Technology has always
            captivated me, and about three years ago, I took the leap into
            unraveling the mysteries of the internet of things. Life has been a
            journey of growth, aiming to be of value to others.
          </span>
        </animated.div>

        <div className="flex w-full justify-end">
          <animated.div
            className={classNames(
              "mt-[20px]",
              "max-w-[16rem]",
              "rounded-sm bg-slate-800 p-3 shadow-lg",
              `-mr-[42.3vw]`,
            )}
            style={{
              opacity: opa2,
              transform: trans2,
            }}
          >
            <span>
              At 31, I carry the spirit of an old and wise breakdancer, keeping
              the rhythm alive. Dance has been my first love, and I stay active
              by embracing its joy throughout the week. Staying active is
              essential for long-term well-being, especially when the work
              involves long hours of sitting.
            </span>
          </animated.div>
        </div>
        <div className="h-[180px] w-full" />
        <animated.div
          className={classNames(
            "max-w-[16rem]",
            "rounded-sm bg-slate-800 p-3 shadow-lg",
            `-ml-[42.3vw]`,
          )}
          style={{
            // top,
            // left,
            opacity: opa3,
            transform: trans3,
          }}
        >
          <span className="font-bold">
            In my personal haven, two loving cats, Onyx and Nova, add joy to
            each day. Beyond that, I'm blessed with a beautiful fiancée who
            fills my life with love and happiness.
          </span>
        </animated.div>
        <div className="flex w-full justify-end">
          <animated.div
            className={classNames(
              "mt-[20px]",
              "max-w-[16rem]",
              "rounded-sm bg-slate-800 p-3 shadow-lg",
              `-mr-[42.3vw]`,
            )}
            style={{
              // top,
              // left,
              opacity: opa4,
              transform: trans4,
            }}
          >
            <span>Let's connect, collaborate, and create!</span>
          </animated.div>
        </div>
        <div className="h-[120vh] w-full" />
        {/* <div
          id="2"
          ref={ref2 as React.RefObject<HTMLDivElement>}
          className={classNames(
              !isVisible1 && "overflow-auto",
              "scroll-hide relative mt-1 h-full w-full",
              )}
              >
              <div className="h-[100vh]"></div>
              <div className="h-[100vh] bg-slate-700"></div>
            </div> */}
      </div>
    </div>
  );
};

export default SecondHome;

// Hello! I'm a results-driven individual with a profound passion for
// the intersection of art and science. Technology has always
// captivated me, and about three years ago, I took the leap into
// unraveling the mysteries of the internet of things. Life has been a
// journey of growth, aiming to be of value to others.
