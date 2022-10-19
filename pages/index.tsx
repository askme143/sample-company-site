import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Logo from "public/Logo.svg";
import Menu from "public/Menu.svg";
import CapterraLogo from "public/Capterra Logo.svg";
import AlternativeToLogo from "public/AlternativeTo Logo.svg";
import ShopifySmallLogo from "public/Shopify Small Logo.svg";
import SpotifyLogo from "public/Spotify Logo.svg";
import NetflixLogo from "public/Netflix Logo.svg";
import ShopifyLogo from "public/Shopify Logo.svg";
import WalmartLogo from "public/Walmart Logo.svg";
import Close from "public/Close.svg";
import SpenseIcon from "public/Spense_Icon.svg";
import FiberIcon from "public/Fiber_Icon.svg";
import GradieIcon from "public/Gradie_Icon.svg";
import { useState } from "react";

const Home: NextPage = () => {
  const [showModal, setShowModal] = useState(false);

  const onClickMenu = () => {
    setShowModal(true);
  };

  const onClickCancel = () => {
    setShowModal(false);
  };

  return (
    <div className="bg-[#F3EDE5]">
      <Head>
        <title>Ondeck</title>
        <meta name="description" content="Sample company website" />
        <link rel="icon" href="/favicon.svg" />
        <link rel="mask-icon" href="/favicon.svg" color="#000000" />
      </Head>

      <div>
        <header className="flex justify-between items-center mx-5 mt-5 mb-10 relative">
          <Logo />
          <button className="w-6 h-6" onClick={onClickMenu}>
            <Menu />
          </button>

          <div
            className={`modal w-full rounded-[14px] p-9 bg-white absolute left-0 top-0 ${
              showModal ? "block" : "hidden"
            }`}
          >
            <div className="flex justify-between">
              <div className="font-semibold text-[#8898AA]">PRODUCTS</div>
              <button onClick={onClickCancel}>
                <Close />
              </button>
            </div>
            <div className="flex flex-col space-y-6 mt-6">
              <div className="flex">
                <SpenseIcon className="mr-2 shrink-0" />
                <div className="flex flex-col text-sm">
                  <div className="font-bold">Spense</div>
                  <div>
                    Spense is a landing page for writers. Great for practicing
                    absolute positioning and flex layouts.
                  </div>
                </div>
              </div>
              <div className="flex">
                <FiberIcon className="mr-2 shrink-0" />
                <div className="flex flex-col text-sm">
                  <div className="font-bold">Fiber Landing Page</div>
                  <div>
                    An online portfolio generator. Great to practice flex/grid
                    layouts, and absolute positioning.
                  </div>
                </div>
              </div>
              <div className="flex">
                <GradieIcon className="mr-2 shrink-0" />
                <div className="flex flex-col text-sm">
                  <div className="font-bold">Gradie Sign Up Page</div>
                  <div>
                    Gradie is a simple sign up page, great to practice centering
                    layouts.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>

        <main className="flex flex-col items-start mx-[20px]">
          <div className="font-bold text-4xl mb-2">
            Ondeck is your remote{" "}
            <span className="text-[#F6B300]">conference calling tool</span>
          </div>
          <div className="text-gray mb-4">
            Ondeck is a service that allows you to create beautiful, online, and
            encrypted video calls for you and your remote team.
          </div>
          <button className="bg-[#133416] rounded text-white px-9 py-4 mb-8">
            Try For Free
          </button>
          <div className="flex items-center">
            <div className="text-gray mr-[19px]">
              5.0 Rating based on reviews from:
            </div>
            <div className="flex space-x-[1rem]">
              <CapterraLogo />
              <AlternativeToLogo />
              <ShopifySmallLogo />
            </div>
          </div>
        </main>

        <footer className="w-full h-fit flex flex-col items-center my-20 px-5">
          <div className="text-gray mb-6 text-center">
            Trusted by 3+ million people at companies like
          </div>
          <div className="w-full h-fit flex flex-wrap items-center mx-5 mt-[-1rem]">
            <NetflixLogo className="h-12 mt-4 mx-auto" />
            <ShopifyLogo className="h-12 mt-4 mx-auto" />
            <SpotifyLogo className="h-12 mt-4 mx-auto" />
            <WalmartLogo className="h-12 mt-4 mx-auto" />
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Home;
