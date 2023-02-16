import "./App.css"
import Card from "./components/cards/Card"
import Header from "./components/header/Header"
import Navbar from "./components/navbar/Navbar"
import data from "./helper/data"

function App() {
  return (
    <div>
      <Navbar />
      <Header />
      {data.map(({ id, title, desc, image }) => (
        <Card key={id} title={title} desc={desc} image={image} />
      ))}
    </div>
  )
}

export default App
