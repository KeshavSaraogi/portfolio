import "./App.css"
import Profile from "./PortfolioContainer/Home/Profile"
import { useTypewriter, Cursor } from "react-simple-typewriter"

function App() {
  const [typeEffect] = useTypewriter({
    words: ["Full Stack Dev 💻", "Mobile Dev 📱", "Cross Platform Dev 🌐"],
    loop: {},
    typeSpeed: 100,
    deleteSpeed: 40,
  })
  return (
    <div className="App">
      <h1>
        I'm a{" "}
        <span style={{ fontweight: "bold", color: "green", marginLeft: "5px" }}>
          {typeEffect}
        </span>
      </h1>
    </div>
  )
}

export default App
