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
import ModalItem from "components/ModalItem";
import Modal from "components/Modal";
import Header from "components/Header";

const Home: NextPage = () => {
  const [showModal, setShowModal] = useState(false);

  const onClickProduct = () => {
    setShowModal((prev) => !prev);
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
        <Header />

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
          <div className="w-full h-fit flex flex-wrap justify-center items-center mx-5 mt-[-1rem]">
            <div className="flex flex-wrap justify-center">
              <div className="w-56">
                <NetflixLogo className="h-12 px-2 mt-4 mx-auto" />
              </div>
              <div className="w-56 flex">
                <ShopifyLogo className="h-12 px-2 mt-4 mx-auto" />
              </div>
            </div>
            <div className="flex flex-wrap justify-center">
              <div className="w-56">
                <SpotifyLogo className="h-12 px-2 mt-4 mx-auto" />
              </div>
              <div className="w-56">
                <WalmartLogo className="h-12 px-2 mt-4 mx-auto" />
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Home;
