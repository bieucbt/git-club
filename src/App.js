import './App.css';
import Hero from './components/Hero/Hero';
import { Testimonial } from './components/TESTIMONIALS/Testimonial';
import Footer from './components/footer/Footer';
import { Join } from './components/join/Join';
import Plans from './components/plans/Plans';
import Programs from './components/programs/Programs';
import Reasons from './components/reasons/Reasons';
function App() {
  return (
    <div className="App">
          <Hero />
          <Programs />
          <Reasons />
          <Plans />
          <Testimonial />
          <Join />
          <Footer />
    </div>
  );
}

export default App;
