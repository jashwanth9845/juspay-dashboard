import { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../../../context/AppContext";

const LinkDropper = ({ list, setLinkActive, styles }) => {
  // Using context to access breadcrumb data
  const { breadCrumb } = useContext(AppContext);

  // If the list is not provided, return null to avoid rendering
  if (!list) return null;

  return (
    <div className={styles?.linkDivContainer}>
      {list?.map((e, index) => {
        // Destructure label and slug from each link object, providing defaults
        const { label = "label", slug = "/" } = e || {};
        // Check if the current slug is active by matching with breadcrumbs
        const isActive = breadCrumb?.some((bc) => bc.path === slug);

        return (
          <Link
            onClick={() => setLinkActive(label)} // Set active link when clicked
            className={`${styles.linkDiv} ${
              isActive ? styles?.active : ""
            } regular-14 w-400`} // Apply active class if the link is active
            to={slug}
            key={index}
          >
            {label}
          </Link>
        );
      })}
    </div>
  );
};

export default LinkDropper;
