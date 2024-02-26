import BelowVitPark from "./Components/BelowVitPark";
import Footer from "./Components/Footer";
import HeroSection from "./Components/HeroSection";
import ImageSlider from "./Components/ImageSider";
import InfoBox from "./Components/InfoBox";
import Navbar from "./Components/Navbar";
import OurProducts from "./Components/OurProduct";
import UpperFooter from "./Components/UpperFooter";
import UpperHeader from "./Components/UpperHeader";



function App() {
  return (
    <div> 
<UpperHeader/>
<Navbar/>
<HeroSection/>
{/* <BelowVitPark/> */}
<InfoBox/>
<OurProducts/>
<ImageSlider/>
<UpperFooter/>
<Footer/>

     
    </div>
  );
}

export default App;
