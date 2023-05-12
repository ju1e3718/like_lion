import './App.css';
import Slide from "./Slide";
import img1 from "./img/img1.png";
import img2 from "./img/img2.png";
import img3 from "./img/img3.png";
import img4 from "./img/img4.png";


function App() {
  return (
    <div className="app">
      <div className="container">
        <Slide
          imgSrc={img1}
          dest="상하이, 중국"
          rate="4.96"
          dist="869km 거리"
          date="6월 8일-14일"
          cost="₩68,191"
        />
        <Slide
          imgSrc={img2}
          dest="상하이, 중국"
          rate="4.67"
          dist="870km 거리"
          date="6월 8일-13일"
          cost="₩177,052"
        />
        <Slide
          imgSrc={img3}
          dest="Jeju-si, 한국"
          rate="4.97"
          dist="466km 거리"
          date="9월 2일-8일"
          cost="₩720,134"
        />
        <Slide
          imgSrc={img4}
          dest="상하이, 중국"
          rate="NEW"
          dist="디자인: Alexis Dornier, Stefanie Strachwit..."
          date="6월 12일-17일"
          cost="₩2,599,280"
        />
      </div>
    </div>
  );
}

export default App;
