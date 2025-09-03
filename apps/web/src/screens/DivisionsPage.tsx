const divisions = [
  { key: 'agriculture-kadiwa', name: 'Agriculture (Kadiwa)', img: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?q=80&w=1200&auto=format&fit=crop', desc: 'Empowering farmers with technology and distribution networks.' },
  { key: 'aircraft-aia', name: 'Aircraft (AIA)', img: 'https://images.unsplash.com/photo-1504198458649-3128b932f49b?q=80&w=1200&auto=format&fit=crop', desc: 'Aviation innovation and services for modern fleets.' },
  { key: 'fintech-westcoast', name: 'Fintech (WestCoast)', img: 'https://images.unsplash.com/photo-1550565118-3a14e53af8dc?q=80&w=1200&auto=format&fit=crop', desc: 'Secure, scalable financial technologies.' },
  { key: 'health-tech-clinic', name: 'Health (Health Tech Clinic)', img: 'https://images.unsplash.com/photo-1584982751601-97dcc096659c?q=80&w=1200&auto=format&fit=crop', desc: 'Digital-first healthcare experiences.' },
  { key: 'marine-vertex', name: 'Marine (Vertex Maritime)', img: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop', desc: 'Solutions for maritime logistics and safety.' },
  { key: 'transportation-dotr', name: 'Transportation (DOTR)', img: 'https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=1200&auto=format&fit=crop', desc: 'Smart transport systems for cities and nations.' },
  { key: 'it-department', name: 'IT Department', img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop', desc: 'Cloud, data, and bespoke software development.' },
]

export default function DivisionsPage() {
  return (
    <section id="divisions" className="section">
      <div className="container">
        <h2 style={{color:'var(--darkBlue)', marginTop:0}}>Our Divisions</h2>
        <div className="grid">
          {divisions.map((d) => (
            <div key={d.key} className="card">
              <img src={d.img} alt={d.name} />
              <h3>{d.name}</h3>
              <p>{d.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}


