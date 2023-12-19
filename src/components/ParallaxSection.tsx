import Image from "next/image";
import sunset from "../../public/sunset-404072_640.jpg";

const ParallaxSection: React.FC = () => {
  return (
    <div className="relative h-full overflow-y-scroll">
      <div className="absolute inset-0 z-0">
        <Image
          src={sunset}
          alt="Parallax Image"
          layout="fill"
          objectFit="cover"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="relative z-10 flex h-[90vh] flex-col items-center justify-center overflow-y-scroll text-white">
        <span>
          "Hello! I'm a results-driven individual with a profound passion for
          the intersection of art and science. Technology has always captivated
          me, and about three years ago, I took the leap into unraveling the
          mysteries of the internet of things. Life has been a journey of
          growth, aiming to be of value to others.
        </span>

        <span>
          Dedicated not only to my professional pursuits but also to personal
          fulfillment, effective communication is at the core of building
          lasting connections. I believe in fostering meaningful relationships
          both in and outside the realm of development.
        </span>

        <span>
          At 31, I carry the spirit of an old and wise breakdancer, keeping the
          rhythm alive. Dance has been my first love, and I stay active by
          embracing its joy throughout the week. Staying active is essential for
          long-term well-being, especially when the work involves long hours of
          sitting.
        </span>

        <span>
          In my personal haven, two loving cats, Onyx and Nova, add joy to each
          day. Beyond that, I'm blessed with a beautiful fiancée who fills my
          life with love and happiness.
        </span>

        <span>Let's connect, create, and share the experience together!"</span>
      </div>
    </div>
  );
};

export default ParallaxSection;
