import { useState } from 'react';

function App() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 3000);
      setEmail('');
    }
  };

  return (
    <>
      <div className="hero-background"></div>
      <div className="overlay"></div>

      <main className="content-wrapper">
        <h2 className="tagline">The Essence of Multan</h2>
        <h1 className="multanish-logo">Multanish</h1>
        <p className="main-title">
          Experience the authentic soul of tradition. An exclusive collection featuring Multan's finest <strong style={{ color: '#D4AF37', fontWeight: 400 }}>masalas</strong>, heritage <strong style={{ color: '#D4AF37', fontWeight: 400 }}>pottery</strong>, pure <strong style={{ color: '#D4AF37', fontWeight: 400 }}>Multani mitti</strong>, and timeless <strong style={{ color: '#D4AF37', fontWeight: 400 }}>handicrafts</strong> is arriving soon.
        </p>

        <div className="subscribe-container">
          {!submitted ? (
            <form onSubmit={handleSubmit} style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="input-field"
                placeholder="Enter email for the waitlist"
                required
              />
              <button type="submit" className="action-btn">
                Notify Me
              </button>
            </form>
          ) : (
            <p className="tagline" style={{ color: '#D4AF37', marginTop: '20px' }}>
              Welcome to the waitlist.
            </p>
          )}
        </div>
      </main>

      <footer className="footer">
        &copy; {new Date().getFullYear()} Multanish. All rights reserved.
      </footer>
    </>
  );
}

export default App;
