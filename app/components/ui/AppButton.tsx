import Link from "next/link";
import { ReactNode } from "react";
type TAppButton = {
  label: string;
  className?: string;
  type?: "button" | "reset" | "submit";
  href?: string;
  variant?: "filled" | "outlined" | "noDesign";
  icon?: ReactNode;
  iconPosition?: "left" | "right";
};

const AppButton = ({
  label,
  className,
  type = "button",
  href,
  variant = "filled",
  icon,
  iconPosition = "right",
}: TAppButton) => {
  const filledClass =
    "border border-primary bg-primary/90 text-white px-4 py-2 rounded-full hover:bg-primary transition-all ";
  const outlineClass =
    "text-primary px-4 py-2 rounded-full border border-primary hover:bg-primary hover:border-primary hover:text-white transition-all";
  const noDesignClass =
    "text-white/80 px-4 py-2 hover:text-white  transition-all";

  return href ? (
    <Link href={href}>
      <button
        className={`${icon && "flex items-center gap-2"} ${
          variant === "filled"
            ? filledClass
            : variant === "outlined"
            ? outlineClass
            : noDesignClass
        } ${className}`}
        type={type}
      >
        {iconPosition === "left" && icon} {label}{" "}
        {iconPosition === "right" && icon}
      </button>
    </Link>
  ) : (
    <button
      className={`${icon && "flex items-center gap-2"} ${
        variant === "filled"
          ? filledClass
          : variant === "outlined"
          ? outlineClass
          : noDesignClass
      } ${className}`}
      type={type}
    >
      {iconPosition === "left" && icon} {label}{" "}
      {iconPosition === "right" && icon}
    </button>
  );
};

export default AppButton;
