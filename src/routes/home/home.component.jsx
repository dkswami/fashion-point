import './home.styles.scss';
import Simmi from '../../assets/simmi.jpg';


const Home = () => {
    return(
      <div className='home-container'>
        <h2>This is a test website for SIMMI foundation</h2>
        <p>
           Technologies used: ReactJs, BootStrap, Firebase, Sass, React router and more!
        </p>
        <p>
            Please use the Navigation bar to check the website.
        </p>
        <img classname="simmi-image" src={Simmi}/>
      </div>     
    )
  }
  
  export default Home;