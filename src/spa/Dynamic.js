import React, { Suspense } from "react";

const ProfileComponent = React.lazy(() => import("./profile/Profile"));

const Dynamic = () => {
  return (
    <div className="bg-dark text-warning">
      <h1>I am lazy loaded component (Profile)</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <ProfileComponent />
      </Suspense>
    </div>
  );
};

export default Dynamic;

// 1. Loadable -> npm install react-loadable
// 2. React.lazy()
// 3. Higher order component - HOC
