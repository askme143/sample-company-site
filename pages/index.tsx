import type { NextPage } from "next";
import Head from "next/head";
import CapterraLogo from "public/Capterra Logo.svg";
import AlternativeToLogo from "public/AlternativeTo Logo.svg";
import ShopifySmallLogo from "public/Shopify Small Logo.svg";
import SpotifyLogo from "public/Spotify Logo.svg";
import NetflixLogo from "public/Netflix Logo.svg";
import ShopifyLogo from "public/Shopify Logo.svg";
import WalmartLogo from "public/Walmart Logo.svg";
import { useState } from "react";
import Header from "components/Header";
import Image from "next/image";
import HeroImage from "public/Hero Image.png";

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

      <div className="w-full max-w-[1220px] mx-auto px-5 lg:px-10 flex flex-col items-center ">
        <Header />

        <main className="w-full flex justify-between items-center mt-10 lg:mt-28">
          <div className="max-w-[713px] flex flex-col items-start mx-auto lg:m-0 lg:mr-10">
            <div className="font-bold text-4xl mb-2">
              Ondeck is your remote{" "}
              <span className="text-[#F6B300]">conference calling tool</span>
            </div>
            <div className="text-gray mb-4">
              Ondeck is a service that allows you to create beautiful, online,
              and encrypted video calls for you and your remote team.
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
          </div>
          <div className="w-[337px] h-[404px] relative hidden lg:block shrink-0">
            <Image
              loader={({ src, width, quality }) => {
                return `https://askme143.github.io/sample-company-site/${src}?w=${width}&q=${
                  quality || 75
                }`;
              }}
              src={"./Hero Image.png"}
              alt="image"
            />
          </div>
        </main>

        <footer className="w-full h-fit flex flex-col items-center my-20 lg:mt-28">
          <div className="text-gray mb-6 text-center">
            Trusted by 3+ million people at companies like
          </div>
          <div className="w-full h-fit flex flex-wrap justify-center items-center mt-[-1rem]">
            <div className="flex flex-wrap justify-center grow">
              <NetflixLogo className="h-12 mt-4 px-1 mx-auto" />
              <ShopifyLogo className="h-12 mt-4 px-1 mx-auto" />
            </div>
            <div className="flex flex-wrap justify-center grow">
              <SpotifyLogo className="h-12 mt-4 px-1 mx-auto" />
              <WalmartLogo className="h-12 mt-4 px-1 mx-auto" />
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Home;
