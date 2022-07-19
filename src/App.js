import './App.css';
import Header from './components/Header';
import Body from './components/Body';
import Projects from './components/Projects';
import Footer from './components/Footer';

function App() {


  // Props 

  const projects = [
    {
      title: "Memory Card Game",
      type: "frontend",
      tech: "HTML, CSS, Javascript, React",
      liveDemoUrl: "https://blevinspercussion.github.io/memory-card/",
      codeUrl: "https://github.com/blevinspercussion/memory-card",
      imageUrl: "",
      key: "memcard",
      about: "<div><h1>Test</h1></div>",
    },
    {
      title: "Store Front and Shopping Cart",
      type: "frontend",
      tech: "HTML, CSS, Javascript, React",
      liveDemoUrl: "https://blevinspercussion.github.io/shopping-cart/",
      codeUrl: "https://github.com/blevinspercussion/shopping-cart",
      imageUrl: "",
      key: "shop",
      about: "",
    },
    {
      title: "Personal Website",
      type: "frontend",
      tech: "HTML, CSS, React",
      liveDemoUrl: "http://blevinspercussion.com",
      codeUrl: "",
      imageUrl: "",
      key: "blevperc",
      about: "",
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
      <Footer />
    </div>
  );
}

export default App;
