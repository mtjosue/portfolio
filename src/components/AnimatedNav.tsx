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

const AnimatedNav = () => {
  const ref1 = useRef<HTMLElement>(null);
  const isVisible1 = useIsVisible(ref1);
  const ref2 = useRef<null | HTMLElement>(null);
  const isVisible2 = useIsVisible(ref2);
  const ref3 = useRef<null | HTMLElement>(null);
  const isVisible3 = useIsVisible(ref3);

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

  console.log("curVis", curVis);

  const [scrollPosition, setScrollPosition] = useState(0);
  // Animate the circle based on the scroll position
  const { opacity, transform, left } = useSpring({
    opacity: scrollPosition > 50 ? 1 : 0, // Adjust the threshold based on when you want the circle to start appearing
    left: scrollPosition * 2,
    transform: `translateX(${scrollPosition}px) rotate(${scrollPosition}deg)`,
    config: { tension: 80, friction: 15 },
  });

  useEffect(() => {
    const handleScroll = () => {
      if (ref2.current) {
        console.log("Scroll Top: ", ref2.current.scrollTop);
        setScrollPosition(ref2.current.scrollTop);
      }
    };
    // window.addEventListener("scroll", handleScroll);
    ref2.current?.addEventListener("scroll", handleScroll);
    return () => {
      ref2.current?.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="relative h-full w-full text-lg">
      <div className="absolute bottom-3 right-3 font-bold md:bottom-[50vh]">
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

      <div className="flex h-full">
        <div className="scroll-hide h-full snap-y snap-mandatory overflow-y-auto">
          <div
            id="1"
            className={classNames(
              "flex h-full snap-start items-center justify-center",
            )}
          >
            <div
              ref={ref1 as React.RefObject<HTMLDivElement>}
              className={classNames(
                `flex flex-col rounded-sm p-3`,
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
              <div className="mb-2 flex flex-col items-center gap-y-3">
                <p
                  style={{
                    animation: `left-to-right 2s ease-in-out`,
                  }}
                  className="max-w-xs gap-y-1 text-base font-medium"
                >
                  A dedicated junior fullstack developer, enthusiastic about
                  crafting user-friendly web applications and eager to
                  collaborate on challenging projects in a professional
                  environment.
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
              <div
                className="flex h-full items-end justify-center gap-x-3"
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
            </div>
          </div>
          <div
            id="2"
            ref={ref2 as React.RefObject<HTMLDivElement>}
            className="scroll-hide relative mt-1 h-full w-full snap-start overflow-auto"
          >
            <animated.div
              className="absolute top-1/2 h-16 w-16 -translate-y-1/2 rounded-full bg-blue-500"
              style={{
                left,
                opacity,
                transform,
              }}
            />

            <div className="h-[100vh] bg-black"></div>
            <div className="h-[100vh] bg-slate-700"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimatedNav;

// <span>
// Hello! I'm a results-driven individual with a profound passion
// for the intersection of art and science. Technology has always
// captivated me, and about three years ago, I took the leap into
// unraveling the mysteries of the internet of things. Life has
// been a journey of growth, aiming to be of value to others.
//   </span>
//   <span>
//     Dedicated not only to my professional pursuits but also to
//     personal fulfillment, effective communication is at the core of
//     building lasting connections. I believe in fostering meaningful
//     relationships both in and outside the realm of development.
//   </span>
// <span>
//   At 31, I carry the spirit of an old and wise breakdancer,
//   keeping the rhythm alive. Dance has been my first love, and I
//   stay active by embracing its joy throughout the week. Staying
//   active is essential for long-term well-being, especially when
//   the work involves long hours of sitting.
// </span>
// <span>
// In my personal haven, two loving cats, Onyx and Nova, add joy to
// each day. Beyond that, I'm blessed with a beautiful fiancée who
// fills my life with love and happiness.
// </span>
// <span>
// Let's connect, create, and share the experience together!
// </span>
// </span>

{
  /* <animated.div
              className="absolute top-1/2 h-16 w-16 -translate-y-1/2 rounded-full bg-blue-500"
              style={{
                left: left.to((val) => `${val}px`),
              }}
            /> */
}

{
  /* <Parallax className="scroll-hide" pages={4}>
              <ParallaxLayer
                offset={0}
                speed={0.09}
                factor={1}
                className="flex h-full w-full justify-center"
              >
                <animated.div
                  className="absolute top-1/2 h-16 w-16 -translate-y-1/2 rounded-full bg-blue-500"
                  style={{
                    left: left.to((val) => `${val}px`),
                  }}
                />
                <div className="flex h-full w-full items-center justify-center">
                  Hello! I'm a results-driven individual with a profound passion
                  for the intersection of art and science. Technology has always
                  captivated me, and about three years ago, I took the leap into
                  unraveling the mysteries of the internet of things. Life has
                  been a journey of growth, aiming to be of value to others.
                </div>
              </ParallaxLayer>

              <ParallaxLayer
                speed={1}
                offset={0.9995}
                factor={0.5}
                className="flex justify-center"
              >
                <div className="flex h-full w-full items-center justify-center">
                  Dedicated not only to my professional pursuits but also to
                  personal fulfillment, effective communication is at the core
                  of building lasting connections. I believe in fostering
                  meaningful relationships both in and outside the realm of
                  development.
                </div>
              </ParallaxLayer>
            </Parallax> */
}

{
  /* <div id="2" className={classNames("")}>
            <div ref={ref2 as React.RefObject<HTMLDivElement>} className="mx-3">
           
            </div>
          </div> */
}
{
  /* <div
            id="2"
            className={classNames(
              "flex h-full snap-start items-center justify-center",
            )}
          >
            <div
              ref={ref2 as React.RefObject<HTMLDivElement>}
              className="relative mx-3 max-h-[25rem] overflow-y-auto"
            >
              "Hello! I'm a results-driven individual with a profound passion
              for the intersection of art and science. Technology has always
              captivated me, and about three years ago, I took the leap into
              unraveling the mysteries of the internet of things. Life has been
              a journey of growth, aiming to be of value to others. Dedicated
              not only to my professional pursuits but also to personal
              fulfillment, effective communication is at the core of building
              lasting connections. I believe in fostering meaningful
              relationships both in and outside the realm of development. At 31,
              I carry the spirit of an old and wise breakdancer, keeping the
              rhythm alive. Dance has been my first love, and I stay active by
              embracing its joy throughout the week. Staying active is essential
              for long-term well-being, especially when the work involves long
              hours of sitting. In my personal haven, two loving cats, Onyx and
              Nova, add joy to each day. Beyond that, I'm blessed with a
              beautiful fiancée who fills my life with love and happiness. Let's
              connect, create, and share the experience together!"
            </div>
          </div> */
}
{
  /* <div
            id="2"
            className={classNames(
              "flex h-full snap-start items-center justify-center",
            )}
          >
            <div
              ref={ref2 as React.RefObject<HTMLDivElement>}
              className="relative mx-3 max-h-[25rem] overflow-y-auto"
            >
              "Hello! I'm a results-driven individual with a profound passion
              for the intersection of art and science. Technology has always
              captivated me, and about three years ago, I took the leap into
              unraveling the mysteries of the internet of things. Life has been
              a journey of growth, aiming to be of value to others. Dedicated
              not only to my professional pursuits but also to personal
              fulfillment, effective communication is at the core of building
              lasting connections. I believe in fostering meaningful
              relationships both in and outside the realm of development. At 31,
              I carry the spirit of an old and wise breakdancer, keeping the
              rhythm alive. Dance has been my first love, and I stay active by
              embracing its joy throughout the week. Staying active is essential
              for long-term well-being, especially when the work involves long
              hours of sitting. In my personal haven, two loving cats, Onyx and
              Nova, add joy to each day. Beyond that, I'm blessed with a
              beautiful fiancée who fills my life with love and happiness. Let's
              connect, create, and share the experience together!"
            </div>
          </div> */
}
