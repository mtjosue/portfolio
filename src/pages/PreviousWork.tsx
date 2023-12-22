import { useRouter } from "next/router";
import React from "react";

const PreviousWork = () => {
  const router = useRouter();
  return (
    <div className="relative flex h-screen w-screen flex-col items-center justify-center bg-gradient-to-b from-slate-700 to-slate-900 px-9 py-10 text-gray-300">
      <div className="scroll-hide flex max-w-md flex-col gap-y-6 overflow-y-auto">
        <div className=" flex w-full justify-around text-sm text-gray-500">
          <button
            onClick={() =>
              router
                .push("/LatestWork")
                .catch(() => console.log("Error in back form p1"))
            }
            className="rounded-md border border-gray-500 px-3 py-1"
          >
            Back
          </button>
          <button
            onClick={() =>
              router
                .push("/History")
                .catch(() => console.log("Error in back form p1"))
            }
            className="rounded-md border border-gray-500 px-3 py-1"
          >
            Next
          </button>
        </div>
        <div id="sectionOne" className="flex max-w-md flex-col gap-y-2">
          <h2 className="text-2xl font-semibold text-gray-100">
            Project Overview
          </h2>
          <div className="space-x-3">
            <div className="font-semibold">Name:</div>
            <div>Ntornos</div>
          </div>
          <div className="space-x-3">
            <div className="font-semibold">Collaborators:</div>
            <div>Josue R. Mata and Carlos de La Cruz</div>
          </div>
        </div>
        <div id="sectionTwo" className="flex max-w-md flex-col gap-y-2">
          <h2 className="text-2xl font-semibold text-gray-100">
            Problem Identified
          </h2>
          <div className="space-x-3">
            <div className="font-semibold">Issue:</div>
            <div>
              Outdated platforms used in developing countries for real estate.
              Lack of dedicated tech companies for real estate in developing
              countries, reluctance to update existing platforms.
            </div>
          </div>
          <div className="space-x-3">
            <div className="font-semibold">Potential:</div>
            <div>
              Recognized potential for upgrading both the agent and the client
              user experience towards more well thought out and available
              features in 2023
            </div>
          </div>
        </div>
        <div id="sectionThree" className="flex max-w-md flex-col gap-y-2">
          <h2 className="text-2xl font-semibold text-gray-100">
            Development Details
          </h2>
          <div className="space-x-3">
            <div className="font-semibold">Tech Stack:</div>
            <div>
              (T3) - Next.js, React, TRPC, Prisma, Vercel, Planet Scale.
            </div>
          </div>
          <div className="space-x-3">
            <div className="font-semibold">Additional Technologies:</div>
            <div>
              Github, Zustand, Zod, Google Maps API, React Hook Form, Map based
              fatures.
            </div>
          </div>
        </div>
        <div id="sectionFour" className="flex max-w-md flex-col gap-y-2">
          <h2 className="text-2xl font-semibold text-gray-100">
            Features Implemented
          </h2>
          <div className="space-x-3">
            <div className="font-semibold">Dynamic Map:</div>
            <div>
              Users can select areas on the map they wish to browse properties
              in. instead of clusters we outlined the polygon for sectors and
              cities, so that you can easily click an areas name and get results
              within that are. A feature on google maps has.
            </div>
          </div>
          <div className="space-x-3">
            <div className="font-semibold">Dynamic Property View:</div>
            <div>
              When choosing a property to view, a modal opens either from the
              left or right, with some clickable background remaining visible.
              This enables users to click on a new property even if another one
              is already open, promoting seamless navigation without the need
              for additional windows, tabs, or modals. The app remains
              continuously accessible, allowing users to explore properties at
              their own pace.
            </div>
          </div>
          <div className="space-x-3">
            <div className="font-semibold">Dynamic Map Markers:</div>
            <div>
              We've implemented a color-coded marker system on the map,
              reflecting the duration each listing has been uploaded. While the
              sidebar allows for organization by criteria such as newest,
              oldest, highest, or lowest, we recognized the need to visually
              represent this information on the map. The color-coded markers
              serve as an effective means to depict this valuable and
              business-stimulating factor, enabling users to quickly grasp the
              temporal aspect of the listings.
            </div>
          </div>
          <div className="space-x-3">
            <div className="font-semibold">Challenges:</div>
            <div>
              Working with Google Maps API, nextJS standards practices, React
              Hook Form and overall SDLC.
            </div>
          </div>
        </div>
        <div id="sectionFive" className="flex max-w-md flex-col gap-y-2">
          <h2 className="text-2xl font-semibold text-gray-100">Future Plans</h2>
          <div className="space-x-3">
            <div className="font-semibold">Feedback:</div>
            <div>Positive responses of yearning for such a platform.</div>
          </div>
          <div className="space-x-3">
            <div className="font-semibold">Growth Strategy:</div>
            <div>Free-time side project still under development.</div>
          </div>
        </div>
        <div id="sectionSix" className="flex max-w-md flex-col gap-y-2">
          <h2 className="mb-3 text-2xl font-semibold text-gray-100">Demo</h2>
          <video className="rounded-md" width="640" height="360" controls>
            <source src={"/ntornosVid.mp4"} type="video/mp4" />
          </video>
        </div>
        <div className="flex w-full justify-around text-sm text-gray-500">
          <button
            onClick={() =>
              router
                .push("/LatestWork")
                .catch(() => console.log("Error in back form p1"))
            }
            className="rounded-md border border-gray-500 px-3 py-1"
          >
            Back
          </button>
          <button
            onClick={() =>
              router
                .push("/History")
                .catch(() => console.log("Error in back form p1"))
            }
            className="rounded-md border border-gray-500 px-3 py-1"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default PreviousWork;
