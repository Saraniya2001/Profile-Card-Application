import React from "react";
import "./App.css";
import ProfileCard from "./ProfileCard";

const App  = () => {
    return (
        <div className="app-container">
            <h1>Profile Cards</h1>
            <div className="cards-container">
                {/* Passing props to ProfileCard component */}
                <ProfileCard
                    name="Alice Johnson"
                    age={25}
                    location="New York, USA"
                    image="/src/assets/image/man3.webp"
                    email="alice@example.com"
                />
                <ProfileCard
                    name="Bob Williams"
                    age={30}
                    location="London, UK"
                    image="/src/assets/image/man2.webp"
                    email="bob@example.com"
                />
                <ProfileCard
                    name="Charlie Brown"
                    age={28}
                    location="Paris, France"
                    image="/src/assets/image/man1.webp"
                    email="charlie@example.com"
                />
            </div>
        </div>
    );
}

export default App;
