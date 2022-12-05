import Profile from "./components/Profile";
import Gallery from "./components/Gallery";
import photo1 from "./images/photo1.png";
import photo2 from "./images/photo2.png";
import photo3 from "./images/photo3.png";
import photo4 from "./images/photo4.png";
import photo5 from "./images/photo5.png";
import photo6 from "./images/photo6.png";

function App() {
  const photoArr = [photo1, photo2, photo3, photo4, photo5, photo6];
  return (
    <div className="App">
      <Profile />
      <Gallery photos={photoArr} />
    </div>
  );
}

export default App;
