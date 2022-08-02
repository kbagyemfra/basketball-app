import React from "react";
import Analytics from "../DasboardContent/Analytics";

const Selection = () => {
  return (
    <section className="dashboard">
      {/* <Header /> */}
      <div className="grid">
        <div className="row-b">
          <Analytics />
        </div>
      </div>
    </section>
  );
};

export default Selection;
