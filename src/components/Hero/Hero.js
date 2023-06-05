import './Hero.scss'
import { Header } from '../Header/Header';
import hero_image from '../../assets/hero_image.png'
import hero_image_back from '../../assets/hero_image_back.png'
import heart from '../../assets/heart.png'
import calories from '../../assets/calories.png'
import './responsive.scss'

function Hero() {
    return ( 
        <div className='hero flex between'>
            <div className="blur blur-hero"></div>
            <div className="left-h">
                <Header />

                <div className="the-best-ad flex align">
                    <div></div>
                    <span>the best fitness club in the town</span>
                </div>

                <div className="hero-text flex">
                    <div><span className='stroke-text'>Shape</span> your</div>
                    <div>Ideal body</div>
                    <div>
                        <span>In here we will help you to shape and build your ideal body and live up your life to fullest</span>
                    </div>
                </div>

                <div className="figures flex">
                    <div className='flex'>
                        <span>+ 140</span>
                        <span>EXPERT COACHES</span>
                    </div>
                    <div className='flex'>
                        <span>+ 980</span>
                        <span>MEMBERS JOINED</span>
                    </div>
                    <div className='flex'>
                        <span>+ 50</span>
                        <span>FITNESS PROGRAMS</span>
                    </div>
                </div>

                <div className="hero-buttons flex">
                    <button className="btn">Get Started</button>
                    <button className="btn">Learn More</button>
                </div>
            </div>
            <div className="right-h">
                <button className="btn">Join now</button>

                <div className="heart-rate flex">
                    <img src={heart} alt="" />
                    <span>Heart rate</span>
                    <span>116 bpm</span>
                </div>

                <img src={hero_image} alt="" />
                <img src={hero_image_back} alt="" />

                <div className="calories flex">
                    <img src={calories} alt="" />
                    <div>
                        <p>Calories burned</p>
                        <p>220 kcal</p>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Hero;