import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import LinkDropper from "./LinkDrooper";
import { AppContext } from "../../../context/AppContext";
// Helper function to check if any of the list items match the current breadcrumb
const isAnyChildActive = (list, breadCrumb) => {
  return list?.some((e) => breadCrumb?.some((bc) => bc.path === e.slug));
};

const MenuDropper = ({ data, label, styles }) => {
  const [linkType, setLinkType] = useState(null); // Set initially null to control dropdown opening
  const [linkActive, setLinkActive] = useState("Default");
  const { breadCrumb } = useContext(AppContext);

  useEffect(() => {
    if (breadCrumb?.length > 0) {
      setLinkActive(breadCrumb[breadCrumb.length - 1].label);
    }

    // Automatically open the dropdown if any of its child items are active
    data?.forEach((item) => {
      if (isAnyChildActive(item.list, breadCrumb)) {
        setLinkType(item.type?.label);
      }
    });
  }, [breadCrumb, data]);

  return (
    <div className={styles?.menuDropperContainer}>
      <div className={`${styles?.menuDropperHeading} regular-14 w-400`}>
        {label}
      </div>
      {data?.map((e, index) => {
        const { icon, type, list } = e || {};
        const isActive = breadCrumb?.some((bc) => bc.path === type?.slug); // Check if the current slug matches breadcrumb

        return (
          <React.Fragment key={index}>
            <Link
              to={type?.slug}
              onClick={() => {
                setLinkType((prev) =>
                  prev === type?.label ? null : type?.label
                );
              }}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className={`${styles?.menuDropperDiv} ${
                  isActive && !list
                    ? styles.active
                    : type?.label === linkType
                    ? styles.menuOpened
                    : ""
                } regular-14 w-400`}
              >
                {list && (
                  <svg
                    className={styles?.rightIcon}
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M5.65967 12.3536C5.44678 12.1583 5.44678 11.8417 5.65967 11.6464L9.25 8.35355C9.4629 8.15829 9.4629 7.84171 9.25 7.64645L5.65968 4.35355C5.44678 4.15829 5.44678 3.84171 5.65968 3.64645C5.87257 3.45118 6.21775 3.45118 6.43065 3.64645L10.021 6.93934C10.6597 7.52513 10.6597 8.47487 10.021 9.06066L6.43065 12.3536C6.21775 12.5488 5.87257 12.5488 5.65967 12.3536Z"
                    />
                  </svg>
                )}
                <div
                  dangerouslySetInnerHTML={{ __html: icon }}
                  className={styles?.menuDropperIcon}
                />
                <span className={styles?.menuDropperSpan}>{type?.label}</span>
              </motion.div>
            </Link>
            {type?.label === linkType ? (
              <LinkDropper
                list={list}
                label={label}
                setLinkActive={setLinkActive}
                linkActive={linkActive}
                styles={styles}
              />
            ) : null}
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default MenuDropper;
