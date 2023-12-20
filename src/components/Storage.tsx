// import Link from "next/link";
import { FolderIcon, HomeIcon, UserIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import React, { use, useEffect, useMemo, useRef, useState } from "react";
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
    if (width === 0) {
      console.log("innerWidth SETTING WIDTH", window.innerWidth);
      setWidth(window.innerWidth);
    }
  }, [width]);

  useEffect(() => {
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

  const [isShort, setShort] = useState(false);
  const [isTall, setTall] = useState(false);

  // First animated.div
  const { opacity, transform } = useSpring({
    top: 10,
    left: 0,
    config: { tension: 50, friction: 10 },
    opacity: conPosition > 170 ? 1 : 0,
    // transform: `translate(${Math.min(
    //   conPosition > 170 ? conPosition * 6 : 0,
    //   width,
    // )}px, ${Math.min(conPosition > 170 ? conPosition * 6 : 0, 80)}px) rotate(${
    //   180 + Math.min(conPosition > 170 ? conPosition * 3 : 0, 180)
    // }deg)`,

    transform: `translate(${Math.min(
      conPosition > 170 ? (conPosition - 170) * 6 : 0,
      width - 160,
    )}px, ${Math.min(
      conPosition > 170 ? (conPosition - 170) * 6 : 0,
      80,
    )}px) rotate(${
      180 + Math.min(conPosition > 170 ? (conPosition - 170) * 3 : 0, 180)
    }deg)`,

    // transform: `translate(${Math.min(
    //   conPosition > 310 ? conPosition + width / 2 : 0,
    //   width * 0.01,
    // )}%, ${Math.min(
    //   conPosition > 310 ? conPosition * 6 : 0,
    //   80 * 0.1,
    // )}%) rotate(${
    //   180 + Math.min(conPosition > 310 ? conPosition * 3 : 0, 180)
    // }deg)`,
  });

  // Second animated.div
  const { opacity: opa2, transform: trans2 } = useSpring({
    top: 10,
    left: 0,
    config: { tension: 50, friction: 10 },
    opacity: conPosition > 475 ? 1 : 0,
    transform: `translate(-${Math.min(
      conPosition > 475 ? (conPosition - 475) * 6 : 0,
      width - 160,
    )}px, ${Math.min(
      conPosition > 475 ? (conPosition - 475) * 6 : 0,
      80,
    )}px) rotate(${
      180 - Math.min(conPosition > 475 ? (conPosition - 475) * 3 : 0, 180)
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

  useEffect(() => {
    const height = window.innerHeight;
    console.log("window.innerHeigh", height);
    if (height > 700) {
      setTall(true);
    }
  }, []);

  // const widthy = useMemo(() => {
  //   setWidth(window.innerWidth);
  // }, []);

  return (
    <div className="relative h-full w-full text-lg text-gray-300">
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
        className="scroll-hide relative h-full w-full overflow-y-auto text-[16px] font-semibold"
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

        <animated.div
          className={classNames(
            isTall ? "mt-[540px]" : "mt-[530px]",
            "relative z-30",
            "",
            "w-full",
          )}
          style={{
            opacity,
            transform,
          }}
        >
          <div className="-ml-[11rem] w-[16rem] rounded-lg bg-red-500">
            Hello! I'm a results-driven individual with a passion for the
            intersection of art and science. Tech has always captivated me, and
            about three years ago, I took the leap into unraveling the mysteries
            of the web. Life has been a journey of growth, aiming to be of value
            to others.
          </div>
        </animated.div>

        {/* <animated.div
          className={classNames(
            "-mt-7",
            // "ml-[73.4vw]",
            "relative z-20",
            "w-full",
            // "h-fit rounded-sm bg-slate-800 p-3 shadow-lg",
            "rounded-sm bg-red-800 shadow-lg",
          )}
          style={{
            opacity: opa2,
            transform: trans2,
          }}
        >
          <span className="absolute left-[25rem] w-[15rem] rounded-sm bg-red-800 p-2 shadow-lg">
            At 31, I carry the spirit of an old and wise breakdancer, keeping
            the rhythm alive. Dance has been my first love, and I stay active by
            embracing its joy throughout the week. Staying active is essential
            for long-term well-being, especially when the work involves long
            hours of sitting.
          </span>
        </animated.div> */}

        {/* <animated.div
          className={classNames(
            "mt-[180px]",
            "-ml-[41.4vw]",
            "w-[16rem]",
            "relative z-10",
            "h-fit rounded-sm bg-slate-800 p-3 shadow-lg",
          )}
          style={{
            opacity: opa3,
            transform: trans3,
          }}
        >
          <span className="">
            In my personal haven, two loving cats, Onyx and Nova, add joy to
            each day. Beyond that, I'm blessed with a beautiful fiancée who
            fills my life with love and happiness.
          </span>
        </animated.div>

        <div className="mt-5 flex h-fit w-full justify-end">
          <animated.div
            className={classNames(
              "-mr-[43.2vw]",
              "w-[16rem]",
              "relative z-0",
              "h-fit rounded-sm bg-slate-800 p-3 shadow-lg",
            )}
            style={{
              opacity: opa4,
              transform: trans4,
            }}
          >
            <span>Let's connect, collaborate, and create!</span>
          </animated.div>
        </div> */}

        <div className="h-[120vh] w-full" />
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
