import Image from "next/image";
import { LogoProps } from "./Logo.types";

function Logo({
  className = "food-logo-wrapper flex items-center gap-2",
}: LogoProps) {
  return (
    <div className={`${className}`}>
      <Image
        src="/images/logo.png"
        alt="FoodWagen Logo"
        width={28}
        height={29.98}
        className="food-logo-image"
      />
      <h1
        className="food-logo-text text-[20px] md:text-[31.11px] font-bold leading-[120%] tracking-[-0.025em]"
        style={{ letterSpacing: "-2.5%" }}
      >
        <span className="text-selected">Food</span>
        <span className="text-primary">Wagen</span>
      </h1>
    </div>
  );
}

export default Logo;
