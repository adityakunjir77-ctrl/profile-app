import ProfileCard from "./ProfileCard";
import "./App.css";

function App() {
  return (
    <div className="app">
      <ProfileCard
        name="Aditya Kunjir"
        imageUrl="/avatar.svg"
        description="Aspiring web developer who loves learning React and building cool projects."
      />
    </div>
  );
}

export default App;
