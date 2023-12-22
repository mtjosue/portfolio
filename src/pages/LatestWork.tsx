import { useRouter } from "next/router";
import React from "react";

const LatestWork = () => {
  const router = useRouter();
  return (
    <div className="relative flex h-screen w-screen flex-col items-center justify-center bg-gradient-to-b from-slate-700 to-slate-900 px-9 py-10 text-gray-300">
      <div className="scroll-hide flex max-w-md flex-col gap-y-6 overflow-y-auto">
        <div className=" flex w-full justify-around text-sm text-gray-500">
          <button
            onClick={() =>
              router.push("/").catch(() => console.log("Error in back form p1"))
            }
            className="rounded-md border border-gray-500 px-3 py-1"
          >
            Back
          </button>
          <button
            onClick={() =>
              router
                .push("/PreviousWork")
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
            <div>Pixelmate</div>
          </div>
          <div className="space-x-3">
            <div className="font-semibold">Creator:</div>
            <div>Josue R. Mata</div>
          </div>
          <div className="space-x-3">
            <div className="font-semibold">Motivation:</div>
            <div>
              Addressed negative traits in existing platforms, specifically the
              lack of saved interaction data after conversations.
            </div>
          </div>
        </div>
        <div id="sectionTwo" className="flex max-w-md flex-col gap-y-2">
          <h2 className="text-2xl font-semibold text-gray-100">
            Problem Identified
          </h2>
          <div className="space-x-3">
            <div className="font-semibold">Issue:</div>
            <div>
              Interaction data disappears, making the experience transient.
            </div>
          </div>
          <div className="space-x-3">
            <div className="font-semibold">Potential:</div>
            <div>
              Recognized potential in saving interaction data to gamify the
              platform and make each interaction memorable.
            </div>
          </div>
        </div>
        <div id="sectionThree" className="flex max-w-md flex-col gap-y-2">
          <h2 className="text-2xl font-semibold text-gray-100">Solution</h2>
          <div className="space-x-3">
            <div className="font-semibold">Approach:</div>
            <div>
              Saved user reactions to each other, displayed on a billboard.
            </div>
          </div>
          <div className="space-x-3">
            <div className="font-semibold">Enhancements:</div>
            <div>
              Once users get on the leaderboards they could share other social
              media handles to increase visibility.
            </div>
          </div>
          <div className="space-x-3">
            <div className="font-semibold">Outcome:</div>
            <div>
              Leaderboards and the potential for users to gain a following from
              simply meeting people online.
            </div>
          </div>
        </div>
        <div id="sectionFour" className="flex max-w-md flex-col gap-y-2">
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
              Github, Zustand, Zod, peerJS for video and audio connections and
              Tailwind CSS for styles
            </div>
          </div>
        </div>
        <div id="sectionFive" className="flex max-w-md flex-col gap-y-2">
          <h2 className="text-2xl font-semibold text-gray-100">
            Features Implemented
          </h2>
          <div className="space-x-3">
            <div className="font-semibold">Daily Skips:</div>
            <div>Users have a limited number of skips per day.</div>
          </div>
          <div className="space-x-3">
            <div className="font-semibold">Reporting System:</div>
            <div>
              Point-based system for reporting behaviors, encouraging fair
              reporting.
            </div>
          </div>
          <div className="space-x-3">
            <div className="font-semibold">Challenges:</div>
            <div>
              ES6 libraries with server-side rendering, managing state with
              useEffect.
            </div>
          </div>
        </div>
        <div id="sectionSix" className="flex max-w-md flex-col gap-y-2">
          <h2 className="text-2xl font-semibold text-gray-100">
            Testing and Iteration
          </h2>
          <div className="space-x-3">
            <div className="font-semibold">Testing Approach:</div>
            <div>Manual testing with friends and family.</div>
          </div>
          <div className="space-x-3">
            <div className="font-semibold">Adaptation:</div>
            <div>Addressed edge cases and pivoted for progress.</div>
          </div>
          <div className="space-x-3">
            <div className="font-semibold">Duration:</div>
            <div>Completed in a month and a half.</div>
          </div>
        </div>
        <div id="sectionSeven" className="flex max-w-md flex-col gap-y-2">
          <h2 className="text-2xl font-semibold text-gray-100">Future Plans</h2>
          <div className="space-x-3">
            <div className="font-semibold">Feedback:</div>
            <div>Positive responses, potential for future enhancements.</div>
          </div>
          <div className="space-x-3">
            <div className="font-semibold">Growth Strategy:</div>
            <div>Potential growth through other merits.</div>
          </div>
        </div>
        <div id="sectionEight" className="flex max-w-md flex-col gap-y-2">
          <h2 className="mb-3 text-2xl font-semibold text-gray-100">Visit</h2>
          <div className="space-x-3">
            <div className="ml-3 font-semibold">
              <a
                href="https://p-nine.vercel.app/"
                className="rounded-md border-2 p-3"
              >
                Pixelmate
              </a>
            </div>
          </div>
        </div>
        <div className="mt-3 flex w-full justify-around text-sm text-gray-500">
          <button
            onClick={() =>
              router.push("/").catch(() => console.log("Error in back form p1"))
            }
            className="rounded-md border border-gray-500 px-3 py-1"
          >
            Back
          </button>
          <button
            onClick={() =>
              router
                .push("/PreviousWork")
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

export default LatestWork;
