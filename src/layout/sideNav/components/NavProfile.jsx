import React from "react";

export default function NavProfile({ profile, styles }) {
  const { name, image } = profile || {};
  return (
    <div className={styles?.navProfileDiv}>
      <img src={image || "/"} />
      <p className="regular-14 w-400">{name}</p>
    </div>
  );
}
