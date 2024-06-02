import Link from "next/link";

type TAppButton = {
  label: string;
  type?: "button" | "reset" | "submit";
  href?: string;
  variant?: "filled" | "outlined";
};

const AppButton = ({
  label,
  type = "button",
  href,
  variant = "filled",
}: TAppButton) => {
  return href ? (
    <Link href={href}>
      <button className="text-white" type={type}>
        {label}
      </button>
      ;
    </Link>
  ) : (
    <button
      className={variant === "filled" ? "appBtn" : "appOutlineBtn"}
      type={type}
    >
      {label}
    </button>
  );
};

export default AppButton;
