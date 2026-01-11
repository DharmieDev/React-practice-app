import React from "react";
import "./App.css";
import Welcome from "./Welcome";

function App() {
  const people = [
    { name: "Alice Johnson", job: "Software Engineer" },
    { name: "Brian Thompson", job: "Graphic Designer" },
    { name: "Carlos Rivera", job: "Data Scientist" },
    { name: "Dana Lee", job: "Marketing Specialist" },
  ];

  return (
    <>
      {/* <Welcome name="Dharmie" />
      <h2>List of people and their occupations</h2>
      <ul>
        {people.map((person) => (
          <li key={person.name}>
            {person.name}: {person.job}
          </li>
        ))}
      </ul> */}
      <h1>My Favourite Books</h1>
      <Book1 title="Devil You Know" />
      <Book2 title="Moments to Tresure" />
      <Book3 title="Cost of Honor" />
    </>
  );
}

function Book1({ title }) {
  return (
    <div>
      <h2>{title}</h2>
      <p>By Ali Vali</p>
    </div>
  );
}

function Book2({ title }) {
  return (
    <div>
      <h2>{title}</h2>
      <p>By Ali Vali</p>
    </div>
  );
}

function Book3({ title }) {
  return (
    <div>
      <h2>{title}</h2>
      <p>By Radclyffe</p>
    </div>
  );
}

export default App;
