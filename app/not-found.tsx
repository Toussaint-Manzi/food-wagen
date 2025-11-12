"use client";
import { useRouter } from "next/navigation";
import { Button } from "@/components/atoms/button/button";
import { IconWrapper } from "@/components/atoms/icon-wrapper/IconWrapper";

export default function NotFound() {
  const router = useRouter();

  const handleGoHome = () => {
    router.push("/");
  };

  return (
    <div
      className="relative w-screen h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url(/images/404-bg.png)",
      }}
    >
      <div className="flex flex-col items-center justify-center text-center px-4">
        <h1
          className="font-black text-[100px] leading-none mb-6"
          style={{
            background:
              "linear-gradient(180deg, rgba(30, 30, 30, 0.3) 0%, rgba(30, 30, 30, 0) 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          404
        </h1>

        <p className="text-[14px] text-text-secondary font-medium mb-8 max-w-md">
          We couldn't locate the page you requested. Please check the URL or
          return to the homepage.
        </p>

        <Button
          onClick={handleGoHome}
          className="flex flex-row items-center justify-center px-4 text-[14px] py-[11px] text-white font-semibold rounded-lg gap-2 cursor-pointer mx-auto"
          style={{
            background: "linear-gradient(90deg, #FFBA26 0%, #FF9A0E 100%)",
            boxShadow:
              "0px 20px 40px 0px rgba(255, 174, 0, 0.29), 0px 5px 10px 0px rgba(255, 174, 0, 0.26)",
          }}
        >
          <span>Go Back to Home</span>
          <IconWrapper iconName="arrow" className="text-white" size={20} />
        </Button>
      </div>
    </div>
  );
}
