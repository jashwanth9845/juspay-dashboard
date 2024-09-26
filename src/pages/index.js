import React, { useContext, useEffect, lazy, Suspense } from "react";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { flattenSideNavData, SideNavData } from "../utils/helper";

// Lazy load dashboard components
const Dashboard = lazy(() => import("./Dashboard/Default"));
const ECommerceOverview = lazy(() =>
  import("./Dashboard/ECommerce/Overview/Overview")
);
const ECommerceAnalytics = lazy(() =>
  import("./Dashboard/ECommerce/Analytics/Analytics")
);
const ECommerceDocuments = lazy(() =>
  import("./Dashboard/ECommerce/Documents/Documents")
);
const ProjectOverview = lazy(() =>
  import("./Dashboard/Projects/Overview/OverView")
);
const ProjectAnalytics = lazy(() =>
  import("./Dashboard/Projects/Analytics/Analytics")
);
const ProjectOrders = lazy(() => import("./Dashboard/Projects/Orders/Orders"));
const OnlineCoursesAnalytics = lazy(() =>
  import("./Dashboard/OnlineCourses/Analytics/Analytics")
);
const OnlineCoursesDocuments = lazy(() =>
  import("./Dashboard/OnlineCourses/Documents/Documents")
);
const ProfileOverview = lazy(() => import("./Profile/Overview"));
const ProfileProjects = lazy(() => import("./Profile/Projects"));
const ProfileDocuments = lazy(() => import("./Profile/Documents"));
const ProfileFollowers = lazy(() => import("./Profile/Followers"));
const AccountOverview = lazy(() => import("./Account/Overview"));
const AccountProjects = lazy(() => import("./Account/Projects"));
const AccountDocuments = lazy(() => import("./Account/Documents"));
const AccountFollowers = lazy(() => import("./Account/Followers"));
const CorporateOverview = lazy(() => import("./Corporate/Overview"));
const CorporateProjects = lazy(() => import("./Corporate/Projects"));
const CorporateDocuments = lazy(() => import("./Corporate/Documents"));
const CorporateFollowers = lazy(() => import("./Corporate/Followers"));
const BlogOverview = lazy(() => import("./Blog/Overview"));
const BlogProjects = lazy(() => import("./Blog/Projects"));
const BlogDocuments = lazy(() => import("./Blog/Documents"));
const BlogFollowers = lazy(() => import("./Blog/Followers"));
const SocialOverview = lazy(() => import("./Social/Overview"));
const SocialProjects = lazy(() => import("./Social/Projects"));
const SocialDocuments = lazy(() => import("./Social/Documents"));
const SocialFollowers = lazy(() => import("./Social/Followers"));
const SocialCampaigns = lazy(() => import("./Social/Campaigns"));
const AccountCampaigns = lazy(() => import("./Account/Campaigns"));
const CorporateCampaigns = lazy(() => import("./Corporate/Campaigns"));
const BlogCampaigns = lazy(() => import("./Blog/Campaigns"));
const ProfileCampaigns = lazy(() => import("./Profile/Campaigns"));
const ErrorBoundary = lazy(() =>
  import("../components/ErrorBoundary/ErrorBoundary")
); // Lazy load ErrorBoundary

const MainContent = () => {
  const location = useLocation();
  const { handleBreadCrumb } = useContext(AppContext);

  useEffect(() => {
    // Get the flattened side nav data
    const flatSideNavData = flattenSideNavData(SideNavData);

    // Split the current pathname into segments
    const pathnames = location.pathname.split("/").filter((x) => x);

    // Build breadcrumb based on matching slugs from flatSideNavData
    const breadcrumbData = pathnames.map((value, index) => {
      const path = `/${pathnames.slice(0, index + 1).join("/")}`;
      const matchedItem = flatSideNavData.find((item) => item.slug === path);
      return {
        label: matchedItem
          ? matchedItem.label
          : value.charAt(0).toUpperCase() + value.slice(1), // Use path if not found in data
        path,
        level: index,
      };
    });

    handleBreadCrumb(breadcrumbData);
  }, [location, handleBreadCrumb]);

  return (
    <Suspense fallback={<div>Loading Main Content...</div>}>
      {" "}
      {/* Loading state for the entire component */}
      <ErrorBoundary>
        {" "}
        {/* Wrap the entire MainContent in ErrorBoundary */}
        <Routes>
          {/* Flat route structure without nesting */}
          <Route
            path="/dashboard"
            element={<Navigate to={"/dashboard/default"} />}
          />
          <Route path="/dashboard/default" element={<Dashboard />} />

          {/* E-Commerce Dashboard Routes */}
          <Route
            path="/dashboard/e-commerce"
            element={<Navigate to={"/dashboard/e-commerce/overview"} />}
          />
          <Route
            path="/dashboard/e-commerce/overview"
            element={<ECommerceOverview />}
          />
          <Route
            path="/dashboard/e-commerce/analytics"
            element={<ECommerceAnalytics />}
          />
          <Route
            path="/dashboard/e-commerce/documents"
            element={<ECommerceDocuments />}
          />

          {/* Projects Dashboard Routes */}
          <Route
            path="/dashboard/projects"
            element={<Navigate to={"/dashboard/projects/overview"} />}
          />
          <Route
            path="/dashboard/projects/overview"
            element={<ProjectOverview />}
          />
          <Route
            path="/dashboard/projects/analytics"
            element={<ProjectAnalytics />}
          />
          <Route
            path="/dashboard/projects/orders"
            element={<ProjectOrders />}
          />

          {/* Online Courses Dashboard Routes */}
          <Route
            path="/dashboard/online-courses"
            element={<Navigate to={"/dashboard/online-courses/analytics"} />}
          />
          <Route
            path="/dashboard/online-courses/analytics"
            element={<OnlineCoursesAnalytics />}
          />
          <Route
            path="/dashboard/online-courses/documents"
            element={<OnlineCoursesDocuments />}
          />

          {/* Profile Routes */}
          <Route
            path="/pages/profile/"
            element={<Navigate to={"/pages/profile/overview"} />}
          />
          <Route path="/pages/profile/overview" element={<ProfileOverview />} />
          <Route path="/pages/profile/projects" element={<ProfileProjects />} />
          <Route
            path="/pages/profile/documents"
            element={<ProfileDocuments />}
          />
          <Route
            path="/pages/profile/followers"
            element={<ProfileFollowers />}
          />
          <Route
            path="/pages/profile/campaigns"
            element={<ProfileCampaigns />}
          />

          {/* Account Routes */}
          <Route
            path="/pages/account/"
            element={<Navigate to={"/pages/account/overview"} />}
          />
          <Route path="/pages/account/overview" element={<AccountOverview />} />
          <Route path="/pages/account/projects" element={<AccountProjects />} />
          <Route
            path="/pages/account/documents"
            element={<AccountDocuments />}
          />
          <Route
            path="/pages/account/followers"
            element={<AccountFollowers />}
          />
          <Route
            path="/pages/account/campaigns"
            element={<AccountCampaigns />}
          />

          {/* Corporate Routes */}
          <Route
            path="/pages/corporate/"
            element={<Navigate to={"/pages/corporate/overview"} />}
          />
          <Route
            path="/pages/corporate/overview"
            element={<CorporateOverview />}
          />
          <Route
            path="/pages/corporate/projects"
            element={<CorporateProjects />}
          />
          <Route
            path="/pages/corporate/documents"
            element={<CorporateDocuments />}
          />
          <Route
            path="/pages/corporate/followers"
            element={<CorporateFollowers />}
          />
          <Route
            path="/pages/corporate/campaigns"
            element={<CorporateCampaigns />}
          />

          {/* Blog Routes */}
          <Route
            path="/pages/blog/"
            element={<Navigate to={"/pages/blog/overview"} />}
          />
          <Route path="/pages/blog/overview" element={<BlogOverview />} />
          <Route path="/pages/blog/projects" element={<BlogProjects />} />
          <Route path="/pages/blog/documents" element={<BlogDocuments />} />
          <Route path="/pages/blog/followers" element={<BlogFollowers />} />
          <Route path="/pages/blog/campaigns" element={<BlogCampaigns />} />

          {/* Social Routes */}
          <Route
            path="/pages/social/"
            element={<Navigate to={"/pages/social/overview"} />}
          />
          <Route path="/pages/social/overview" element={<SocialOverview />} />
          <Route path="/pages/social/projects" element={<SocialProjects />} />
          <Route path="/pages/social/documents" element={<SocialDocuments />} />
          <Route path="/pages/social/followers" element={<SocialFollowers />} />
          <Route path="/pages/social/campaigns" element={<SocialCampaigns />} />

          {/* Default Redirect */}
          <Route path="/" element={<Navigate to="/dashboard/default" />} />
        </Routes>
      </ErrorBoundary>
    </Suspense>
  );
};

export default MainContent;
