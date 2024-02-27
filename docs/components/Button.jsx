import Link from "next/link";

import styles from "./Button.module.css";

const Button = ({ children, type = "", href, title, ...props }) => {
  if (href) {
    return (
      <Link
        href={href}
        className={`${styles.Button} ${
          type == "primary" ? styles.ButtonPrimary : ""
        }`}
        {...props}
      >
        {title}
      </Link>
    );
  }
  return (
    <button
      className={`${styles.Button} ${
        type == "primary" ? styles.ButtonPrimary : ""
      }`}
      {...props}
    >
      {title}
    </button>
  );
};

export default Button;
