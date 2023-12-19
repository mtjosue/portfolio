import { type AppType } from "next/app";
import { api } from "~/utils/api";
import "~/styles/globals.css";
import { ParallaxProvider } from "react-scroll-parallax";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <ParallaxProvider>
      <Component className="relative" {...pageProps} />
    </ParallaxProvider>
  );
};

export default api.withTRPC(MyApp);
