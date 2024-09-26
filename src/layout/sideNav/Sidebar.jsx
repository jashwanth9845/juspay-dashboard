import React, { useContext, useState, Suspense, lazy } from "react";
import styles from "./css/sidebar.module.css";
import { SideNavData } from "../../utils/helper";
import { AppContext } from "../../context/AppContext";
import ErrorBoundary from "../../components/ErrorBoundary/ErrorBoundary";

// Lazy load the MenuDropper and SideList components
const MenuDropper = lazy(() => import("./components/MenuDropper"));
const SideList = lazy(() => import("./components/SideList"));
const NavProfile = lazy(() => import("./components/NavProfile")); // Lazy load NavProfile

const Sidebar = () => {
  const { sideNav } = useContext(AppContext);
  const { activities, dashboard, pages, profile } = SideNavData || {};
  const [sideData, setSideData] = useState(activities ? activities[0] : {});

  return (
    <ErrorBoundary>
      {" "}
      {/* Wrap the entire sidebar in ErrorBoundary */}
      <aside className={`${styles?.sidebar} ${!sideNav ? styles.close : ""}`}>
        <Suspense fallback={<div>Loading Profile...</div>}>
          {" "}
          {/* Loading state for NavProfile */}
          <NavProfile profile={profile} styles={styles} />
        </Suspense>
        <div className={styles?.activitiesContainer}>
          <div className={styles?.activitiesListContainer}>
            {activities?.map((e, index) => {
              return (
                <div
                  key={index}
                  onClick={() => setSideData(e)}
                  className={`${styles?.activitiesList} ${
                    sideData.type === e.type ? styles?.active : ""
                  }`}
                >
                  {e?.type}
                </div>
              );
            })}
          </div>
          <Suspense fallback={<div>Loading Side List...</div>}>
            {" "}
            {/* Loading state for SideList */}
            <SideList data={sideData} styles={styles} />
          </Suspense>
        </div>
        {dashboard && (
          <Suspense fallback={<div>Loading Dashboard Menu...</div>}>
            {/* Loading state for MenuDropper */}
            <MenuDropper
              data={dashboard.data}
              label={dashboard.label}
              styles={styles}
            />
          </Suspense>
        )}
        {pages && (
          <Suspense fallback={<div>Loading Pages Menu...</div>}>
            {" "}
            {/* Loading state for MenuDropper */}
            <MenuDropper
              data={pages.data}
              label={pages.label}
              styles={styles}
              setSideData={setSideData}
            />
          </Suspense>
        )}
      </aside>
    </ErrorBoundary>
  );
};

export default Sidebar;
