import Student from "./Student";

function App() {
  return (
    <>
      <Student name="Eshaan" age={21} isStudent={true}/>
      <Student name = "Oozher" age={51} isStudent={false}/>
      <Student name = "Shaheen" age = {49} isStudent={false}/>
    </>
  );
}

export default App
