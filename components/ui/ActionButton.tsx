import Link from "next/link";
import clsx from "clsx";
import styles from "./ActionButton.module.css";

type ActionButtonProps = {
  label: string;
  href?: string;
  type?: "button" | "submit";
  variant?: "primary" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
  onClick?: () => void;
};

export default function ActionButton({
  label,
  href,
  type = "button",
  variant = "primary",
  size = "md",
  className,
  onClick,
}: ActionButtonProps) {
  const composedClassName = clsx(styles.button, styles[variant], styles[size], className);

  if (href) {
    return (
      <Link href={href} className={composedClassName}>
        {label}
      </Link>
    );
  }

  return (
    <button type={type} className={composedClassName} onClick={onClick}>
      {label}
    </button>
  );
}
