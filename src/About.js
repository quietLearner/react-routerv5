import { useContext, useEffect } from "react";

const About = () => {
  useEffect(() => {
    console.log("hello side effect from About");

    return () => console.log("clean up About");
  }, []); // every thime the component is initialized/created/visited

  return (
    <main className="About">
      <h2>About</h2>
      <p style={{ marginTop: "1rem" }}>
        This blog app is a project in the Learn React tutorial series.
      </p>
    </main>
  );
};

export default About;
