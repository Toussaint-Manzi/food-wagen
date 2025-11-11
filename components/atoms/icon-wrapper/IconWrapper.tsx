import { IconWrapperProps } from "./IconWrapper.types";

export const IconWrapper: React.FC<IconWrapperProps> = ({
  iconName,
  className = "",
  size = 24,
}) => (
  <div
    className={`icon-${iconName} ${className}`}
    style={{
      width: size,
      height: size,
      backgroundColor: "currentColor",
      mask: `url(/icons/${iconName}.svg) no-repeat center`,
      maskSize: "contain",
    }}
  />
);
