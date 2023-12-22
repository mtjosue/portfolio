import Image from "next/image";
import React from "react";
import gm305 from "../../public/secondtry.png";
import { useRouter } from "next/router";

const History = () => {
  const router = useRouter();
  return (
    <div className="relative flex h-screen w-screen flex-col items-center justify-center bg-gradient-to-b from-slate-700 to-slate-900 px-9 py-10 text-gray-300">
      <div className="scroll-hide flex max-w-md flex-col gap-y-6 overflow-y-auto">
        <div className=" flex w-full justify-around text-sm text-gray-500">
          <button
            onClick={() =>
              router
                .push("/PreviousWork")
                .catch(() => console.log("Error in back form p1"))
            }
            className="rounded-md border border-gray-500 px-3 py-1"
          >
            Back
          </button>
          <button
            onClick={() =>
              router.push("/").catch(() => console.log("Error in back form p1"))
            }
            className="rounded-md border border-gray-500 px-3 py-1"
          >
            Home
          </button>
          <button
            onClick={() =>
              router
                .push("/LatestWork")
                .catch(() => console.log("Error in back form p1"))
            }
            className="rounded-md border border-gray-500 px-3 py-1"
          >
            Next
          </button>
        </div>
        <div id="sectionOne" className="flex max-w-md flex-col gap-y-2">
          <h2 className="text-2xl font-semibold text-gray-100">Overview</h2>
          <div className="space-x-3">
            <div className="font-semibold">Company:</div>
            <div>305gm</div>
          </div>
          <div className="space-x-3">
            <div className="font-semibold">Role:</div>
            <div>Frontend Developer</div>
          </div>
        </div>
        <div id="sectionTwo" className="flex max-w-md flex-col gap-y-2">
          <h2 className="text-2xl font-semibold text-gray-100">
            Project Scope
          </h2>
          <div className="space-x-3">
            <div className="font-semibold">Nature of Work:</div>
            <div>
              Implementing Figma wireframes into responsive and modern-styled
              landing pages.
            </div>
          </div>
          <div className="space-x-3">
            <div className="font-semibold">Technology Stack:</div>
            <div>
              Tailwind CSS, JavaScript (later refactored to TypeScript).
            </div>
          </div>
          <div className="space-x-3">
            <div className="font-semibold">Learning Focus:</div>
            <div>
              Honed skills in Tailwind CSS and gained experience in refactoring
              code from JS to TypeScript while collaborating through Github.
            </div>
          </div>
        </div>
        <div id="sectionThree" className="flex max-w-md flex-col gap-y-2">
          <h2 className="text-2xl font-semibold text-gray-100">
            Challenges Faced
          </h2>
          <div className="space-x-3">
            <div className="font-semibold">Tailwind CSS:</div>
            <div>
              Navigated challenges associated with working extensively with
              Tailwind CSS.
            </div>
          </div>
          <div className="space-x-3">
            <div className="font-semibold">GitHub Usage:</div>
            <div>
              Adapted to using GitHub for source control in a collaborative
              environment.
            </div>
          </div>
          <div className="space-x-3">
            <div className="font-semibold">Team Collaboration:</div>
            <div>
              Worked closely with a team of designers to bring Figma designs to
              life.
            </div>
          </div>
        </div>
        <div id="sectionFour" className="flex max-w-md flex-col gap-y-2">
          <h2 className="text-2xl font-semibold text-gray-100">Achievements</h2>
          <div className="space-x-3">
            <div className="font-semibold">Skills Development:</div>
            <div>
              Improved understanding and execution of JS and Typescript with
              React, initial immersion into the full SDLC, and proficiency in
              Tailwind CSS through practical implementation.
            </div>
          </div>
          <div className="space-x-3">
            <div className="font-semibold">Code Refactoring:</div>
            <div>
              Successfully refactored JavaScript code to TypeScript for enhanced
              maintainability.
            </div>
          </div>
        </div>
        <div id="sectionFive" className="flex max-w-md flex-col gap-y-2">
          <h2 className="text-2xl font-semibold text-gray-100">
            Work Environment
          </h2>
          <div className="space-x-3">
            <div className="font-semibold">First Job:</div>
            <div>Served as my first job in the tech industry.</div>
          </div>
          <div className="space-x-3">
            <div className="font-semibold">Present Day:</div>
            <div>
              The company has recently closed down its website, but the work I
              put in remains in my skillset, Here is a screenshot of one of the
              pages I worked on.
            </div>
          </div>
        </div>
        <div id="sectionSix" className="flex max-w-md justify-center gap-y-2">
          <Image src={gm305} alt="" className="rounded-md" />
        </div>
        <div className=" flex w-full justify-around text-sm text-gray-500">
          <button
            onClick={() =>
              router
                .push("/PreviousWork")
                .catch(() => console.log("Error in back form p1"))
            }
            className="rounded-md border border-gray-500 px-3 py-1"
          >
            Back
          </button>
          <button
            onClick={() =>
              router.push("/").catch(() => console.log("Error in back form p1"))
            }
            className="rounded-md border border-gray-500 px-3 py-1"
          >
            Home
          </button>
          <button
            onClick={() =>
              router
                .push("/LatestWork")
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

export default History;
