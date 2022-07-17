import './App.css';
import Header from './components/Header';
import Body from './components/Body';

function App() {


  // Props 

  const projects = [
    {
      title: "Memory Card Game",
      type: "frontend",
      tech: "HTML, CSS, Javascript, React",
      liveDemoUrl: "",
      codeUrl: "",
      imageUrl: "",
    },
    {
      title: "Store Front and Shopping Cart",
      type: "frontend",
      tech: "HTML, CSS, Javascript, React",
      liveDemoUrl: "",
      codeUrl: "",
      imageUrl: "",
    },
  ]

  return (
    <div className="App">
      <Header />
      <hr />
      <Body />
      <Projects  
        projectTypes={projectTypes}
        />
    </div>
  );
}

export default App;
