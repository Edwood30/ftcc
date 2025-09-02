import './index.css'

function App() {
  return (
    <div>
      <header className="navbar">
        <div className="container navbar-inner">
          <div className="brand">
            <div className="brand-badge" />
            <span>FTCC Solutions Inc.</span>
          </div>
          <nav className="nav-links">
            <a href="#divisions">Divisions</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <section className="hero">
        <div className="container">
          <h1>Building the Future, Together</h1>
          <p>Innovating across agriculture, aviation, finance, health, marine, transport, and IT.</p>
          <a className="btn-primary" href="#divisions">Explore Divisions</a>
        </div>
      </section>

      <section id="divisions" className="section">
        <div className="container">
          <h2 style={{color:'var(--darkBlue)', marginTop:0}}>Our Divisions</h2>
          <div className="grid">
            {[{
              name:'Agriculture (Kadiwa)',
              img:'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?q=80&w=1200&auto=format&fit=crop',
              desc:'Empowering farmers with technology and distribution networks.'
            },{
              name:'Aircraft (AIA)',
              img:'https://images.unsplash.com/photo-1504198458649-3128b932f49b?q=80&w=1200&auto=format&fit=crop',
              desc:'Aviation innovation and services for modern fleets.'
            },{
              name:'Fintech (WestCoast)',
              img:'https://images.unsplash.com/photo-1550565118-3a14e53af8dc?q=80&w=1200&auto=format&fit=crop',
              desc:'Secure, scalable financial technologies.'
            },{
              name:'Health (Health Tech Clinic)',
              img:'https://images.unsplash.com/photo-1584982751601-97dcc096659c?q=80&w=1200&auto=format&fit=crop',
              desc:'Digital-first healthcare experiences.'
            },{
              name:'Marine (Vertex Maritime)',
              img:'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop',
              desc:'Solutions for maritime logistics and safety.'
            },{
              name:'Transportation (DOTR)',
              img:'https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=1200&auto=format&fit=crop',
              desc:'Smart transport systems for cities and nations.'
            },{
              name:'IT Department',
              img:'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop',
              desc:'Cloud, data, and bespoke software development.'
            }].map((d) => (
              <div key={d.name} className="card">
                <img src={d.img} alt={d.name} />
                <h3>{d.name}</h3>
                <p>{d.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer id="contact" className="footer">
        <div className="container">
          © {new Date().getFullYear()} FTCC Solutions Inc. · info@ftcc.com · +1 (000) 000-0000
        </div>
      </footer>
    </div>
  )
}

export default App
