import Hero from './components/Hero';
import Stats from './components/Stats';
import HowItWorks from './components/HowItWorks';
import DashboardShowcase from './components/DashboardShowcase';

function App() {
  return (
    <div className="min-h-screen scroll-smooth bg-[#0a0a0c] font-inter text-white">
      <Hero />
      <Stats />
      <HowItWorks />
      <DashboardShowcase />
      <footer className="border-t border-white/10 bg-[#0a0a0c] py-10 text-center text-white/60">
        <div className="mx-auto max-w-7xl px-6">
          <p>
            Blood Donor & Seeker Platform for Nepal — blending humanity and technology to save lives.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
