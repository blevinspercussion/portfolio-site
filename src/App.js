import './App.css';
import Header from './components/Header';
import Body from './components/Body';
import Projects from './components/Projects';

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
      key: "memcard",
    },
    {
      title: "Store Front and Shopping Cart",
      type: "frontend",
      tech: "HTML, CSS, Javascript, React",
      liveDemoUrl: "",
      codeUrl: "",
      imageUrl: "",
      key: "shop",
    },
    {
      title: "Personal Website",
      type: "frontend",
      tech: "HTML, CSS, React",
      liveDemoUrl: "blevinspercussion.com",
      codeUrl: "",
      imageUrl: "",
      key: "blevperc",
    },
  ]

  return (
    <div className="App">
      <Header />
      <hr />
      <Body />
      <Projects  
        projects={projects}
        />
    </div>
  );
}

export default App;
