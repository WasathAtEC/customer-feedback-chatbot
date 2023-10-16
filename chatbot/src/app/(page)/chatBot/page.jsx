"use client";

import Image from "next/image";
import Link from "next/link";
import CollapsibleIssue from "@/components/CollapsibleIssue/page";
import { useState } from "react";

const ChatBotPage = () => {
  const [open, setOpen] = useState(false);

  const toggle = (index) => {
    if (open === index) {
      setOpen(null);
    } else {
      setOpen(index);
    }
  };

  const issues = [
    {
      issue: "How to Register/Create a profile",
      details: (
        <div>
          <p className="pb-2">Company Registration : Tutorial for existing exporters with DoC</p>
          <a href="https://www.youtube.com/watch?v=vrMAwJkKHaE&list=PLw-SKwgtg9pVjxeGM59-Q9sfq32lVHkJ8&index=2">
          <Image
            src="/youtubeImg.png"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "auto", height: "auto"}} 
            alt="tutorial for Company registration"
          />
          </a>
          
          <p>
            For more information, please visit our 
            <a href="https://www.example.com" className="text-purple-800 "> Department of Commerce Sri Lanka youtube channel</a>.
          </p>
        </div>
      ),
    },
    {
      issue: "How to Login/Sign In to your profile",
      details: (
        <div>
          <p>Details for Issue 01</p>
          <Image
            src="/youtubeImg.png"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "auto", height: "auto" }}
            alt="Tutorial for login/sign in"
          />
          <p>
            For more information, please visit our{" "}
            <a href="https://www.example.com">website</a>.
          </p>
        </div>
      ),
    },
    {
      issue: "How to get started with eCoO",
      details: (
        <div>
          <p>Details for Issue 01</p>
          <Image
            src="/youtubeImg.png"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "auto", height: "auto" }}
            alt="Tutorials for get started with eCoO"
          />
          <p>
            For more information, please visit our{" "}
            <a href="https://www.youtube.com/watch?v=vrMAwJkKHaE&list=PLw-SKwgtg9pVjxeGM59-Q9sfq32lVHkJ8&index=2">
              web
            </a>
            .
          </p>
        </div>
      ),
    },
  ];

  return (
    <div className="max-w-md mx-auto my-10 shadow-md rounded-xl bg-[#C7EFF8]">
      <div className="bg-gradient-to-r from-[rgb(48,84,217)] to-[#50ADF2] p-5 mb-2 rounded-t-xl drop-shadow-lg flex flex-row gap-8 justify-center items-center">
        <div>
          <Image src="/Vector.svg" width={60} height={60} alt="chat bot"/>
        </div>
        <div>
          <h1 className="text-center text-white text-[32px] font-extrabold pb-1">
            Hi there!👋
          </h1>
        </div>
      </div>

      <div className="px-10 pt-2 pb-8">
        <div className="w-auto h-10 px-[21px] py-[9px] bg-gray-400 bg-opacity-50 rounded-[20px] shadow border border-stone-600 border-opacity-20 justify-center items-center gap-2.5 inline-flex mb-3">
          <p className="text-stone-950 text-opacity-70 text-[16px] font-semibold ">
            Hi, I'm DOC ChatBot
          </p>
        </div>

        <div className="w-auto h-10 px-[21px] py-[9px] bg-gray-400 bg-opacity-50 rounded-[20px] shadow border border-stone-600 border-opacity-20 justify-center items-center gap-2.5 inline-flex mb-3">
          <p className="text-stone-950 text-opacity-70 text-[16px] font-semibold ">
            How can I help you today?
          </p>
        </div>

        <div className="w-auto h-[70px] px-[21px] py-[9px] bg-gray-400 bg-opacity-50 rounded-[20px] shadow border border-stone-600 border-opacity-20 justify-center items-center gap-2.5 inline-flex mb-5">
          <p className="text-stone-950 text-opacity-70 text-[16px] font-semibold leading-[28px]">
            Please choose one of the topics. <br />
            What would you like to explore?
          </p>
        </div>

        <div className="w-auto h-auto gap-[18px] flex flex-wrap px-2 my-3">
          {issues.map((data, index) => {
            return (
              <CollapsibleIssue
                key={index}
                open={index === open}
                issue={data.issue}
                details={data.details}
                toggle={() => toggle(index)}
              />
            );
          })}
        </div>

        <div className="w-auto h-[98px] px-[21px] py-[9px] bg-gray-400 bg-opacity-50 rounded-[20px] shadow border border-stone-600 border-opacity-20 justify-center items-center gap-2.5 inline-flex my-4">
          <p className="text-stone-950 text-opacity-70 text-[16px] font-semibold leading-[25px]">
            For complex issues,
            <br />
            please use our Support Form. <br /> We'll respond promptly.
          </p>
        </div>

        <div className="flex justify-center">
          <Link href="/customerServiceForm">
            <p className="outline-dashed outline-2 outline-offset-0 rounded-lg bg-[#9ACAF6] opacity-58 text-blue-600 text-opacity-90 text-md font-semibold font-['Inter'] leading-[25px] px-4 py-1 mt-2">
              Support Form
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ChatBotPage;
