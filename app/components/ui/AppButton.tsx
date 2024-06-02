import Link from "next/link";

type TAppButton = {
  label: string;
  type?: "button" | "reset" | "submit";
  href?: string;
  variant?: "filled" | "outlined" | "noDesign";
};

const AppButton = ({
  label,
  type = "button",
  href,
  variant = "filled",
}: TAppButton) => {
  const filledClass =
    "border border-primary bg-primary/90 text-white px-4 py-2 rounded-full hover:bg-primary transition-all ";
  const outlineClass =
    "text-white px-4 py-2 rounded-full border hover:bg-primary hover:border-primary transition-all";
  const noDesignClass =
    "text-white/80 px-4 py-2 hover:text-white  transition-all";

  return href ? (
    <Link href={href}>
      <button
        className={
          variant === "filled"
            ? filledClass
            : variant === "outlined"
            ? outlineClass
            : noDesignClass
        }
        type={type}
      >
        {label}
      </button>
    </Link>
  ) : (
    <button
      className={
        variant === "filled"
          ? filledClass
          : variant === "outlined"
          ? outlineClass
          : noDesignClass
      }
      type={type}
    >
      {label}
    </button>
  );
};

export default AppButton;
