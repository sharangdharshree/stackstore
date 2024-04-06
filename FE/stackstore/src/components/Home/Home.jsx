import React from "react";
import CategoryNavbar from "./CategoryNavbar";

function Home() {
  return (
    <>
      <CategoryNavbar />
      <div
        style={{
          width: "100%",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        Home
      </div>
    </>
  );
}

export default Home;
