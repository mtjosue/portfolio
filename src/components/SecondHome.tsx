// import Link from "next/link";
import { FolderIcon, HomeIcon, UserIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import React, { useEffect, useMemo, useRef, useState } from "react";
import classNames from "~/lib/classNames";
import { useIsVisible } from "~/lib/useIsVisible";
import pic from "../../public/profilePic.jpeg";
import linkedin from "../../public/icons8-linkedin-48.png";
import github from "../../public/icons8-github-48.png";
import pixelmate from "../../public/PixelmateThumbnail.png";
import ntornos from "../../public/ntornosThumbnail.png";
import gm3052 from "../../public/secondtry.png";
import { useSpring, animated } from "react-spring";

const SecondHome = () => {
  const ref1 = useRef<HTMLElement>(null);
  const isVisible1 = useIsVisible(ref1);
  const ref2 = useRef<null | HTMLElement>(null);
  const myElementRef = useRef<HTMLDivElement>(null);
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
  const [halfWidth, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const [elWidth, setElWidth] = useState(0);

  useEffect(() => {
    if (myElementRef.current) {
      setElWidth(myElementRef.current.offsetWidth / 2);
    }
    setHeight(window.innerHeight / 2);
    const updateWindowHeight = () => {
      setHeight(window.innerHeight / 2);
      setWidth(window.innerWidth);
    };
    window.addEventListener("resize", updateWindowHeight);
    return () => {
      window.removeEventListener("resize", updateWindowHeight);
    };
  }, []);

  useEffect(() => {
    setWidth(window.innerWidth);
    const handleScrollCon = () => {
      if (conRef.current) {
        console.log("Con Top: ", conRef.current.scrollTop);
        setConPosition(conRef.current.scrollTop);
      }
    };

    conRef.current?.addEventListener("scroll", handleScrollCon);

    return () => {
      conRef.current?.removeEventListener("scroll", handleScrollCon);
    };
  }, []);

  // First animated.div
  const { opacity, transform } = useSpring({
    top: 10,
    left: 0,
    config: { tension: 90, friction: 15 },
    opacity: conPosition > 155 && conPosition < 776 ? 1 : 0,
    transform: `translate(${Math.min(
      conPosition > 130 ? (conPosition - 130) * 6 : 0,
      halfWidth / 2 - elWidth,
    )}px, ${Math.min(
      conPosition > 130 ? (conPosition - 130) * 6 : 0,
      80,
    )}px) rotate(${
      180 + Math.min(conPosition > 130 ? (conPosition - 130) * 3 : 0, 180)
    }deg)`,
  });

  // Second animated.div
  const { opacity: opa2, transform: trans2 } = useSpring({
    top: 10,
    left: 0,
    config: { tension: 50, friction: 10 },
    opacity: conPosition > 610 && conPosition < 1135 ? 1 : 0,
    transform: `translate(-${Math.min(
      conPosition > 610 ? (conPosition - 610) * 6 : 0,
      halfWidth / 2 - elWidth,
    )}px, ${Math.min(
      conPosition > 610 ? (conPosition - 610) * 6 : 0,
      80,
    )}px) rotate(${
      180 - Math.min(conPosition > 610 ? (conPosition - 610) * 3 : 0, 180)
    }deg)`,
  });

  // third animated.div
  const { opacity: opa3, transform: trans3 } = useSpring({
    top: 10,
    left: 0,
    config: { tension: 50, friction: 10 },
    opacity: conPosition > 950 && conPosition < 1360 ? 1 : 0,
    transform: `translate(${Math.min(
      conPosition > 950 ? (conPosition - 950) * 6 : 0,
      halfWidth / 2 - elWidth,
    )}px, -${Math.min(
      conPosition > 950 ? (conPosition - 950) * 6 : 0,
      80,
    )}px) rotate(${
      180 + Math.min(conPosition > 950 ? (conPosition - 950) * 3 : 0, 180)
    }deg)`,
  });

  // fourth animated.div
  const { opacity: opa4, transform: trans4 } = useSpring({
    top: 10,
    left: 0,
    config: { tension: 50, friction: 10 },
    opacity: conPosition > 1160 && conPosition < 1500 ? 1 : 0,
    transform: `translate(-${Math.min(
      conPosition > 1160 ? (conPosition - 1160) * 6 : 0,
      halfWidth / 2 - elWidth,
    )}px, -${Math.min(
      conPosition > 1160 ? (conPosition - 1160) * 6 : 0,
      80,
    )}px) rotate(${
      180 - Math.min(conPosition > 1160 ? (conPosition - 1160) * 3 : 0, 180)
    }deg)`,
  });

  // fifth animated.div
  const { opacity: opa5 } = useSpring({
    config: { tension: 50, friction: 10 },
    opacity: conPosition > 1501 ? 1 : 0,
  });

  // console.log("curVisible : ", curVis);
  // console.log("isVisible2 : ", isVisible2);

  const { width: animatedWidth } = useSpring({
    from: { width: "0%" }, // Start with full width
    to: { width: `calc(${isVisible1 ? "100%" : "0%"})` },
    config: { duration: 800 },
    delay: 1750,
  });

  const { width: animatedWidth2 } = useSpring({
    from: { width: "0%" },
    to: { width: `calc(${isVisible1 ? "100%" : "0%"})` },
    config: { duration: 800 },
    delay: 1750,
  });

  return (
    <div className="relative h-full w-full text-lg text-gray-300">
      <div
        className={classNames(
          "absolute bottom-3 right-2.5 font-bold md:bottom-[50vh] md:right-[3vw]",
          "z-50",
        )}
      >
        <div className="relative flex flex-col gap-y-7 text-slate-500">
          <div className="absolute right-[3px] h-full border-r-2 border-slate-500" />
          <button
            onClick={() => {
              conRef.current?.scrollTo({
                top: 0, // Specify the vertical scroll position in pixels
                left: 0, // Specify the horizontal scroll position in pixels
                behavior: "smooth", // Optional: Use smooth scrolling
              });
            }}
            className={classNames(
              conPosition < height + 236 ? "text-slate-200" : "",
              "flex items-center justify-end gap-x-2",
            )}
          >
            <span
              className={classNames(
                "text-sm transition-all duration-500 ease-in-out ",
                conPosition < height + 236 ? "opacity-100" : "opacity-0",
              )}
            >
              <HomeIcon className="h-5 w-5" strokeWidth={2} />
            </span>
            <div
              id="bullet"
              className={classNames(
                "transition-all duration-500 ease-in-out",
                "relative h-2 w-2 rounded-full",
                conPosition < height + 236 ? "bg-slate-200" : "bg-slate-500",
              )}
            />
          </button>
          <button
            onClick={() => {
              conRef.current?.scrollTo({
                top: height + 241, // Specify the vertical scroll position in pixels
                left: 0, // Specify the horizontal scroll position in pixels
                behavior: "smooth", // Optional: Use smooth scrolling
              });
            }}
            className={classNames(
              conPosition >= height + 236 && conPosition < height + 1017
                ? "text-slate-200"
                : "",
              "flex items-center justify-end gap-x-2",
            )}
          >
            <span
              className={classNames(
                "text-sm transition-all duration-500 ease-in-out ",
                conPosition >= height + 236 && conPosition < height + 1017
                  ? "opacity-100"
                  : "opacity-0",
              )}
            >
              <UserIcon className="h-5 w-5" strokeWidth={2} />
            </span>
            <div
              id="bullet"
              className={classNames(
                "transition-all duration-500 ease-in-out",
                "relative h-2 w-2 rounded-full",
                conPosition >= height + 236 && conPosition < height + 1017
                  ? "bg-slate-200"
                  : "bg-slate-500",
              )}
            />
          </button>
          <button
            onClick={() => {
              conRef.current?.scrollTo({
                top: height + 1400, // Specify the vertical scroll position in pixels
                left: 0, // Specify the horizontal scroll position in pixels
                behavior: "smooth", // Optional: Use smooth scrolling
              });
            }}
            className={classNames(
              conPosition >= height + 1017 ? "text-slate-200" : "",
              "flex items-center justify-end gap-x-2",
            )}
          >
            <span
              className={classNames(
                "text-sm transition-all duration-500 ease-in-out ",
                conPosition >= height + 1017 ? "opacity-100" : "opacity-0",
              )}
            >
              <FolderIcon className="h-5 w-5" strokeWidth={2} />
            </span>
            <div
              id="bullet"
              className={classNames(
                "transition-all duration-500 ease-in-out",
                "relative h-2 w-2 rounded-full",
                conPosition >= height + 1017 ? "bg-slate-200" : "bg-slate-500",
              )}
            />
          </button>
        </div>
      </div>

      <div
        ref={conRef as React.RefObject<HTMLDivElement>}
        className="scroll-hide relative h-full w-full overflow-y-auto"
      >
        <div
          className={classNames(
            `absolute z-40 flex h-full w-full flex-col items-center justify-center rounded-sm`,
            "transition-opacity duration-1000 ease-in-out",
            isVisible1 ? "opacity-100" : "opacity-0",
          )}
        >
          <div
            className="absolute flex justify-end"
            style={{ width: "100%", height: "2px", top: `${height - 139}px` }}
          >
            <div className="" style={{ width: "44%", height: "2px" }}>
              <animated.div
                className={classNames("bg-gray-400")}
                style={{
                  height: "100%",
                  width: animatedWidth.to((w) => `${w}`),
                }}
              />
            </div>
          </div>

          <div
            className="absolute"
            style={{ width: "100%", height: "2px", top: `${height + 184}px` }}
          >
            <div
              className=""
              style={{ width: "44%", height: "2px", direction: "rtl" }}
            >
              <animated.div
                className={classNames("bg-gray-400")}
                style={{
                  height: "100%",
                  width: animatedWidth2.to((w) => `${w}`),
                }}
              />
            </div>
          </div>

          <div
            ref={ref1 as React.RefObject<HTMLDivElement>}
            className="w-[16rem] space-y-1"
          >
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
                  <Image
                    src={pic}
                    alt=""
                    className={classNames("flex-grow rounded-lg")}
                  />
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
                  src={github}
                  alt=""
                />
                <Image
                  className="h-12 w-12 hover:animate-pulse "
                  src={linkedin}
                  alt=""
                />
              </div>
            )}
          </div>
        </div>

        {height && (
          <div
            className={classNames("w-full")}
            style={{
              height: `${height + 206}px`,
            }}
          />
        )}

        <div ref={myElementRef} className="relative z-30 flex max-w-[16rem]">
          <animated.div
            className={classNames(
              "w-full",
              "rounded-sm bg-slate-800 p-3 shadow-lg",
            )}
            style={{
              opacity,
              transform,
            }}
          >
            <span className="font-bold">
              Hello! I'm a results-driven individual with a passion for both art
              and science. Technology has always captivated me, and about three
              years ago, I took the leap into unraveling the "hows" of
              developing for the internet.
            </span>
          </animated.div>
        </div>

        <div className="relative z-20 flex w-full justify-end">
          <animated.div
            className={classNames(
              "mt-5",
              "max-w-[16rem]",
              "rounded-sm bg-slate-800 p-3 shadow-lg",
            )}
            style={{
              opacity: opa2,
              transform: trans2,
            }}
          >
            <span className="font-bold">
              At 31, I carry the spirit of an old and wise breakdancer, keeping
              the rhythm alive. Dance has been my first love, and I stay active
              by embracing its joy throughout the week. Staying active is
              essential for long-term well-being, especially when the work
              involves long hours of sitting.
            </span>
          </animated.div>
        </div>

        <div className="relative z-10 mt-[180px] flex max-w-[16rem]">
          <animated.div
            // ref={myElementRef}
            className={classNames(
              "w-full",
              "rounded-sm bg-slate-800 p-3 shadow-lg",
            )}
            style={{
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
        </div>

        <div className="relative z-0 flex w-full justify-end">
          <animated.div
            className={classNames(
              "mt-5",
              "max-w-[16rem]",
              "rounded-sm bg-slate-800 p-3 shadow-lg",
            )}
            style={{
              opacity: opa4,
              transform: trans4,
            }}
          >
            <span className="font-bold">
              Let's connect, collaborate, and create!
            </span>
          </animated.div>
        </div>

        <div className="relative flex h-[100vh] w-full flex-col items-center justify-center">
          <h2
            className={classNames(
              "absolute top-5 font-extralight",
              `left-[${halfWidth}]`,
            )}
          >
            <animated.div
              className={classNames("")}
              style={{
                opacity: opa5,
              }}
            >
              Work History
            </animated.div>
          </h2>
          <div
            className={classNames(
              "scroll-hide flex w-screen snap-x snap-mandatory overflow-x-auto",
            )}
          >
            <animated.div
              style={{
                opacity: opa5,
              }}
              className={classNames(
                "flex w-screen flex-shrink-0 snap-center flex-col items-center justify-center space-y-3 rounded-md px-12",
              )}
            >
              <div className="flex flex-col">
                <div className="mb-3 space-y-3">
                  <div className="text-xl font-semibold">Pixelmate</div>
                  <div className="max-w-sm text-base">
                    A Gamified Social Platform for meeting and chatting with
                    people.
                  </div>
                </div>
                <div
                  style={{
                    maxHeight: `${
                      halfWidth * 2 > 1023 ? height + 71 : height - 10
                    }px`,
                  }}
                  className={`scroll-hide w-fit overflow-y-auto rounded-md`}
                >
                  <Image src={pixelmate} alt="" />
                </div>
              </div>
            </animated.div>
            <animated.div
              style={{
                opacity: opa5,
              }}
              className={classNames(
                "flex w-screen flex-shrink-0 snap-center flex-col items-center justify-center space-y-3 px-12",
              )}
            >
              <div className="flex flex-col">
                <div className="mb-3 space-y-3">
                  <div className="text-xl font-semibold">Ntornos</div>
                  <div className="max-w-sm text-base">
                    A Modern Real-Estate Platform for developing countries.
                  </div>
                </div>
                <div
                  style={{
                    maxHeight: `${
                      halfWidth * 2 > 1023 ? height + 71 : height - 10
                    }px`,
                  }}
                  className={`scroll-hide w-fit overflow-y-auto rounded-md`}
                >
                  <Image src={ntornos} alt="" />
                </div>
              </div>
            </animated.div>
            <animated.div
              style={{
                opacity: opa5,
              }}
              className={classNames(
                "flex w-screen flex-shrink-0 snap-center flex-col items-center justify-center space-y-3 rounded-md px-12",
              )}
            >
              <div className="flex flex-col">
                <div className="mb-3 space-y-3">
                  <div className="text-xl font-semibold">305gm</div>
                  <div className="max-w-sm text-base">
                    Advanced Styled Product Landing Pages using Tailwind CSS.
                  </div>
                </div>
                <div
                  style={{
                    maxHeight: `${
                      halfWidth * 2 > 1023 ? height + 71 : height - 10
                    }px`,
                  }}
                  className={`scroll-hide w-fit overflow-y-auto rounded-md`}
                >
                  <Image src={gm3052} alt="" />
                </div>
              </div>
            </animated.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondHome;
