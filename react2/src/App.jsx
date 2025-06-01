import Card from "./Card";

function App() {
  return (
    <div className="card-container">
      <Card />
      <Card />
      {/* add as many <Card /> as you like; they will wrap as needed */}
    </div>
  );
}

export default App;
