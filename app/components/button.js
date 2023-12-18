import React from "react";
import Link from "next/link";

const Button = ({ title, icon, active, href }) => {
  const isActive = active;
  return (
    <>
      <Link
        href={href}
        className="button btn-link flex items-center"
        style={
          isActive
            ? {
                fontWeight: "bold",
                color: "#1da1f2",
              }
            : null
        }
      >
        <i
          className={isActive ? "material-icons" : "material-icons-outlined"}
          style={{ fontSize: "26px", fontWeight: "100" }}
        >
          {icon === "bookmark" && !isActive ? "bookmark_outline" : icon}
        </i>
        <p className="ml-3 max-xl:hidden">{title}</p>
      </Link>
    </>
  );
};

export default Button;
