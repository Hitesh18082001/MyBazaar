import './App.css';
import Prenavbar from './components/Prenavbar';
import Navbar from './components/Navbar.js';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import Slider from './components/Slider.js'
import data from './data/data.json'
import Offers from './components/Offers.js'
import Heading from './components/Heading.js'
import StarProducts from './components/StarProducts.js'
import HotAccessoriesMenu from'./components/HotAccessoriesMenu.js'
import HotAccessories from'./components/HotAccessories.js'
import ProductReviews from './components/ProductReviews.js'
import Videos from './components/Videos.js'
import Press from './components/Press.js'
import Footer from './components/Footer.js'
import NavOptions from'./components/NavOptions.js'
function App() {
  return (
    <Router>
        <Prenavbar/>
        <Navbar/>
        <Routes>
        <Route path="/miphones" exact 
        element={< NavOptions miPhones={data.miPhones}/>}>
        </Route>
        <Route path="/redmiphones" exact 
        element={<NavOptions  redmiPhones={data.redmiPhones}/>}>
        </Route>
        <Route path="/tv" exact 
        element={<NavOptions tv={data.tv}/>}>
        </Route>
        <Route path="/lifestyle1" exact 
        element={<NavOptions fitnessAndLifeStyle={data.fitnessAndLifeStyle}/>}>
        </Route>
        <Route path="/laptops" exact 
        element={<NavOptions laptop={data.laptop}/>}>
        </Route>
        <Route path="/home1" exact 
        element={<NavOptions home={data.home}/>}>
        </Route>
        <Route path="/audio" exact 
        element={<NavOptions audio={data.audio} />}>
        </Route>
        <Route path="/accessories" exact 
        element={<NavOptions accessories={data.accessories}/>}>
        </Route>

        </Routes>


        <Slider start={data.banner.start}/>
        <Offers offers={data.offer}/>
        <Heading text="STAR PRODUCTS"/>
        <StarProducts starProducts={data.starProduct}/>
        <Heading text="HOT ACCESSORIES"/>
        <HotAccessoriesMenu/>
        <Routes>
        <Route path="/music" exact 
        element={<HotAccessories music={data.hotAccessories.music} musicCover={data.hotAccessoriesCover.music}/>}>
        </Route>
        <Route path="/smartDevice" exact 
        element={<HotAccessories smartDevice={data.hotAccessories.smartDevice} smartDeviceCover={data.hotAccessoriesCover.smartDevice}/>}>
        </Route>
        <Route path="/home" exact 
        element={<HotAccessories home={data.hotAccessories.home} homeCover={data.hotAccessoriesCover.home}/>}>
        </Route>
        <Route path="/lifestyle" exact 
        element={<HotAccessories lifeStyle={data.hotAccessories.lifeStyle} lifeStyleCover={data.hotAccessoriesCover.lifeStyle}/>}>
        </Route>
        <Route path="/mobileAccessories" exact 
        element={<HotAccessories mobileAccessories={data.hotAccessories.mobileAccessories} mobileAccessoriesCover={data.hotAccessoriesCover.mobileAccessories}/>}>
        </Route>
        </Routes>
        <Heading text="PRODUCT REVIEWS"/>
        <ProductReviews productsReviews={data.productReviews}/>
        <Heading text="VIDEOS" />
        <Videos videos={data.videos} />
        <Heading text="IN THE PRESS" />
        <Press banner={data.banner}/> 
        <Footer footer={data.footer}/>    
    </Router>
  );
}

export default App;
