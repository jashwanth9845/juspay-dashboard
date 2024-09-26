import { useContext } from "react";
import { Link } from "react-router-dom";
import NoData from "../../../components/NoData";
import { AppContext } from "../../../context/AppContext";

const SideList = ({ data, styles }) => {
  const { list, type } = data || {};
  const { breadCrumb } = useContext(AppContext);

  if (!data || !list) return <NoData data={`no available ${type}`} />;

  return (
    <ul className={styles?.sideListContainer}>
      {list.map((e, index) => {
        const { label = "label", slug = "/" } = e || {};
        const isActive = breadCrumb?.some((bc) => bc.path === slug); // Check if breadcrumb matches slug
        return (
          <li key={index}>
            <Link
              className={`${styles?.sideListLink} regular-14 w-400 ${
                isActive ? styles.active : ""
              }`}
              to={slug}
            >
              {label}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default SideList;
