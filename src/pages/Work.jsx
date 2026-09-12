import { useState } from 'react'
import './Work.css'
import './PageHero.css'

const projects = [
  {
    title: 'Maison Lumiere',
    category: 'Fine Dining',
    image: 'https://images.pexels.com/photos/1327393/pexels-photo-1327393.jpeg?auto=compress&cs=tinysrgb&w=800',
    result: '3x weekend covers in six weeks',
    span: 'large',
  },  {
    title: 'Salt & Stone',
    category: 'Casual Dining',
    image: 'https://images.pexels.com/photos/8357241/pexels-photo-8357241.jpeg?auto=compress&cs=tinysrgb&w=700',
    result: '1.2M video views, 340 covers',
  },
  {
    title: 'Olive & Ember',
    category: 'New Launch',
    image: 'https://images.pexels.com/photos/7627408/pexels-photo-7627408.jpeg?auto=compress&cs=tinysrgb&w=700',
    result: 'Sold out opening week',
  },
  {
    title: 'Kintsu',
    category: 'Japanese',
    image: 'https://images.pexels.com/photos/15671371/pexels-photo-15671371.jpeg?auto=compress&cs=tinysrgb&w=700',
    result: 'Waitlist of 600+ in month one',
  },
  {
    title: 'The Copper Pot',
    category: 'Casual Dining',
    image: 'https://images.pexels.com/photos/5491046/pexels-photo-5491046.jpeg?auto=compress&cs=tinysrgb&w=700',
    result: '4.8x ROI on campaign spend',
  },
  {
    title: 'Botanica',
    category: 'Cafe / Bakery',
    image: 'https://images.pexels.com/photos/12679999/pexels-photo-12679999.jpeg?auto=compress&cs=tinysrgb&w=700',
    result: 'Daily queue out the door',
  },
  {
    title: 'Marée',
    category: 'Fine Dining',
    image: 'https://images.pexels.com/photos/24289165/pexels-photo-24289165.jpeg?auto=compress&cs=tinysrgb&w=700',
    result: 'Featured in 3 national publications',
  },
  {
    title: 'Verde Kitchen',
    category: 'Plant-Based',
    image: 'https://images.pexels.com/photos/7791108/pexels-photo-7791108.jpeg?auto=compress&cs=tinysrgb&w=700',
    result: '45% increase in weekday covers',
  },
]

const categories = ['All', 'Fine Dining', 'Casual Dining', 'New Launch', 'Japanese', 'Cafe / Bakery', 'Plant-Based']

export default function Work() {
  const [filter, setFilter] = useState('All')

  const filtered = filter === 'All'
    ? projects
    : projects.filter((p) => p.category === filter)

  return (
    <div className="work-page">
      <section className="page-hero work-hero">
        <div className="page-hero-overlay" />
        <div className="container page-hero-content">
          <p className="eyebrow animate-fade" style={{ color: 'var(--accent-400)' }}>Selected Work</p>
          <h1 className="animate-fade-up delay-1">
            Campaigns that<br />
            <span className="serif-italic" style={{ color: 'var(--accent-400)' }}>moved the needle</span>
          </h1>
          <p className="page-hero-sub animate-fade-up delay-2">
            A selection of restaurants we've helped fill, launch, and grow through
            creator partnerships. Real campaigns, real results.
          </p>
        </div>
      </section>

      <section className="section work-section">
        <div className="container">
          <div className="work-filters reveal">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`work-filter ${filter === cat ? 'work-filter-active' : ''}`}
                onClick={() => setFilter(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="work-grid">
            {filtered.map((project, i) => (
              <article
                key={project.title}
                className={`work-item ${project.span === 'large' ? 'work-item-large' : ''} reveal`}
                style={{ animationDelay: `${i * 0.05}s` }}
              >
                <div className="work-item-image">
                  <img src={project.image} alt={project.title} loading="lazy" />
                </div>
                <div className="work-item-overlay">
                  <span className="work-item-category">{project.category}</span>
                  <h3>{project.title}</h3>
                  <p>{project.result}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section work-cta">
        <div className="container-narrow">
          <div className="work-cta-content reveal">
            <h2>Want results like these?</h2>
            <p>Every restaurant is different. Let's talk about what's possible for yours.</p>
            <a href="/restaurants#enquiry" className="btn btn-accent btn-lg">Start Your Enquiry</a>
          </div>
        </div>
      </section>
    </div>
  )
}
