import Navbar from "./components/Navbar";
import Hero from './components/Hero';
import Highlights from './components/Highlights';
import Model from './components/Model';
import Features from "./components/Features";
import HowItWorks from "./components/HowItWorks";
import Footer from "./components/Footer";
import { SpeedInsights } from "@vercel/speed-insights/next";

const App = () => {
  return (
    <main className="bg-black">
    <SpeedInsights />
    <Navbar />
    <Hero />
    <Highlights />
    <Model />
    <Features />
    <HowItWorks />
    <Footer />
    </main>
  )
}

export default App;
