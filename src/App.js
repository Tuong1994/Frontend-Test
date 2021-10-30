import './sass/main.scss';
import Header from './components/Header/Header';
import Banner from './components/Banner/Banner';
import Introduction from './components/Introduction/Introduction';
import BestProduct from './components/BestProduct/BestProduct';
import Products from './components/Products/Products';
import BrandStory from './components/BrandStory/BrandStory';
import Issue from './components/Issue/Issue';
import VideoImage from './components/VideoImage/VideoImage';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <Introduction />
      <BestProduct />
      <Products />
      <BrandStory />
      <Issue />
      <VideoImage />
      <Footer />
    </div>
  );
}

export default App;
