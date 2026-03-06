import { Sparkles, Diamond, ShieldCheck, Instagram, Facebook, Twitter } from 'lucide-react';
import EmailForm from './components/EmailForm';

function App() {
  return (
    <div className="app-container">
      {/* Dynamic Background */}
      <div className="bg-mesh"></div>
      <div className="noise-overlay"></div>

      {/* Main Content Content */}
      <main className="flex-1 flex flex-col items-center justify-center p-6 sm:p-12 z-10">

        {/* Brand Header */}
        <div className="text-center mb-8 animate-fade-up">
          <div className="inline-block p-4 mb-4 rounded-full" style={{ background: 'rgba(201, 162, 101, 0.1)', boxShadow: '0 0 30px rgba(201, 162, 101, 0.2)' }}>
            <Diamond size={48} className="text-[#c9a265]" />
          </div>
          <h1 className="text-5xl sm:text-7xl font-bold tracking-tight mb-4">
            <span className="gold-text">Multanish</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-400 font-light tracking-widest uppercase">
            A Legacy Reimagined • Coming Soon
          </p>
        </div>

        {/* Hero Concept */}
        <div className="max-w-3xl text-center space-y-6 animate-fade-up delay-200">
          <h2 className="text-3xl sm:text-4xl font-medium leading-relaxed">
            Discover the pinnacle of traditional Pakistani craftsmanship, elevated for the modern era.
          </h2>
          <p className="text-gray-400 text-lg md:text-xl font-light">
            We are meticulously curating an exclusive collection of luxury heritage pieces. Experience an online store where timeless elegance meets exceptional quality.
          </p>
        </div>

        {/* Email Capture Form Component */}
        <div className="w-full mt-12 animate-fade-up delay-400">
          <h3 className="text-center text-sm font-semibold tracking-widest text-[#c9a265] uppercase mb-4">
            Join the exclusive waitlist
          </h3>
          <EmailForm />
        </div>

        {/* Feature Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mt-24 animate-fade-up delay-500 w-full">
          <div className="glass-panel p-8 text-center feature-card">
            <div className="feature-icon-wrapper">
              <Sparkles size={28} />
            </div>
            <h4 className="text-xl font-semibold mb-3">Authentic Heritage</h4>
            <p className="text-gray-400 text-sm leading-relaxed">Curated directly from master artisans, preserving the authentic soul of Pakistani culture.</p>
          </div>
          <div className="glass-panel p-8 text-center feature-card">
            <div className="feature-icon-wrapper">
              <Diamond size={28} />
            </div>
            <h4 className="text-xl font-semibold mb-3">Premium Quality</h4>
            <p className="text-gray-400 text-sm leading-relaxed">Every piece is rigorously inspected to meet our uncompromising standard of luxury.</p>
          </div>
          <div className="glass-panel p-8 text-center feature-card">
            <div className="feature-icon-wrapper">
              <ShieldCheck size={28} />
            </div>
            <h4 className="text-xl font-semibold mb-3">Secure Shopping</h4>
            <p className="text-gray-400 text-sm leading-relaxed">A seamless, safe, and sophisticated e-commerce experience tailored for our clients.</p>
          </div>
        </div>

      </main>

      {/* Footer */}
      <footer className="w-full p-6 sm:p-10 border-t border-white/10 mt-auto z-10 bg-black/40 backdrop-blur-md">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <Diamond size={20} className="text-[#c9a265]" />
            <span className="font-bold text-lg tracking-wider">MULTANISH</span>
          </div>

          <div className="flex gap-6">
            <a href="#" className="text-gray-400 hover:text-[#c9a265] transition-colors"><Instagram size={22} /></a>
            <a href="#" className="text-gray-400 hover:text-[#c9a265] transition-colors"><Facebook size={22} /></a>
            <a href="#" className="text-gray-400 hover:text-[#c9a265] transition-colors"><Twitter size={22} /></a>
          </div>

          <p className="text-gray-500 text-sm font-light">
            &copy; {new Date().getFullYear()} Multanish. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
