import React, { useState, useEffect } from "react";
import { useSpring, animated } from "react-spring";

const MovingCircle = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  // Animate the circle based on the scroll position
  const { left } = useSpring({
    left: scrollPosition,
    from: { left: 0 },
    config: { tension: 80, friction: 15 },
  });

  useEffect(() => {
    const handleScroll = () => {
      console.log("Mouse Y Position : ", window.scrollY);

      setScrollPosition(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="relative h-full overflow-auto">
      <animated.div
        className="absolute top-1/2 h-16 w-16 -translate-y-1/2 rounded-full bg-blue-500"
        style={{
          left: left.to((val) => `${val}px`),
        }}
      />
    </div>
  );
};

export default MovingCircle;
