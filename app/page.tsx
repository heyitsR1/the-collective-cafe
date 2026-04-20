'use client';

import Image from 'next/image';
import { useState } from 'react';

/* ─── Data ─── */
const NAV_ITEMS = [
  { label: 'Our Story', href: '#story' },
  { label: 'Menu', href: '#menu' },
  { label: 'Gallery', href: '#menu' },
  { label: 'Find Us', href: '#find-us' },
];

const MENU_ITEMS = [
  { title: 'Iced Matcha', src: '/assets/food_pictures/iced_matcha.png' },
  { title: 'Hibiscus Refresher', src: '/assets/food_pictures/hibiscus_refresher.png' },
  { title: 'Chocolate Buttercups', src: '/assets/food_pictures/chocolate_buttercups.png' },
  { title: 'Banana Cake', src: '/assets/food_pictures/cake_drink.png' },
];

const REVIEWS = [
  { name: 'Priya S.', stars: 5, text: 'Such a calm and cozy space! The matcha latte is the best I\'ve had in Kathmandu. Highly recommend!' },
  { name: 'Rohan K.', stars: 5, text: 'My go-to spot for a quiet work session. Great coffee, warm vibes, and the staff is incredibly friendly.' },
  { name: 'Anika M.', stars: 4, text: 'Loved the artisan chocolates! The space feels like a warm hug. Will definitely be coming back.' },
];

/* ─── Mountain SVG Logo Mark ─── */
const MountainIcon = () => (
  <svg className="logo-icon" viewBox="0 0 48 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M24 4C20 10 14 14 6 18C10 17 16 16 20 18C18 16 22 10 24 4Z"
      fill="currentColor" fillOpacity="0.15" stroke="currentColor" strokeWidth="1.5"
    />
    <path
      d="M24 4C28 12 34 16 42 18C38 17 32 16 28 18C30 16 26 10 24 4Z"
      fill="currentColor" fillOpacity="0.15" stroke="currentColor" strokeWidth="1.5"
    />
    <path
      d="M2 22C8 20 16 17 24 12C32 17 40 20 46 22"
      stroke="currentColor" strokeWidth="1.2" fill="none"
    />
  </svg>
);

/* ─── Components ─── */

function Header({ onMenuOpen }: { onMenuOpen: () => void }) {
  return (
    <header className="site-header">
      <div className="container">
        <a href="#" className="logo">
          <MountainIcon />
          <div className="logo-text">
            <span className="logo-the">the</span>
            <span className="logo-collective">collective</span>
            <span className="logo-cafe">Cafe</span>
          </div>
        </a>

        <nav>
          <ul className="nav-links">
            {NAV_ITEMS.map(item => (
              <li key={item.href}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <button className="hamburger" onClick={onMenuOpen} aria-label="Open menu">
          <span /><span /><span />
        </button>
      </div>
    </header>
  );
}

function MobileNav({ open, onClose }: { open: boolean; onClose: () => void }) {
  return (
    <div className={`mobile-nav ${open ? 'open' : ''}`}>
      <button className="mobile-nav-close" onClick={onClose} aria-label="Close menu">×</button>
      {NAV_ITEMS.map(item => (
        <a key={item.href} href={item.href} onClick={onClose}>{item.label}</a>
      ))}
    </div>
  );
}

function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero-inner">
        <div className="hero-image-wrapper">
          <Image
            src="/assets/cafe_pictures/cafe_inside.png"
            alt="The Collective Cafe interior — warm lights, green wall, mountain counter"
            fill
            style={{ objectFit: 'cover', objectPosition: 'center' }}
            priority
            sizes="100vw"
          />
        </div>
        <div className="hero-content">
          <h1>Your Cozy Coffee Retreat</h1>
          <a href="#menu" className="btn-cta">Discover Our Blends</a>
        </div>
      </div>
    </section>
  );
}

function Philosophy() {
  return (
    <section className="philosophy" id="story">
      {/* Decorative leaves */}
      <Image
        src="/assets/brand/coffee_leaf_illustration.png"
        alt="" aria-hidden="true"
        width={220} height={220}
        className="leaf-decor leaf-top-right"
      />
      <Image
        src="/assets/brand/coffee_leaf_illustration.png"
        alt="" aria-hidden="true"
        width={260} height={260}
        className="leaf-decor leaf-bottom-left"
      />

      <div className="container philosophy-inner">
        {/* Polaroid with offset shadow */}
        <div className="polaroid-frame">
          <div className="polaroid-card">
            <div className="polaroid-img-wrap" style={{ position: 'relative', width: '100%', aspectRatio: '4/3' }}>
              <Image
                src="/assets/cafe_pictures/cafe_outside.jpeg"
                alt="The Collective exterior"
                fill
                style={{ objectFit: 'cover' }}
                sizes="(max-width: 900px) 300px, 400px"
              />
            </div>
          </div>
        </div>

        {/* Text */}
        <div className="philosophy-text">
          <h2>Our Philosophy</h2>
          <p>
            We source our coffee with intention — building relationships with local growers,
            honouring traditional methods, and prioritising quality at every step.
          </p>
          <p>
            The Collective Cafe is built on community, sustainable practices, and the joy of
            shared spaces. We celebrate locally-sourced ingredients, hand-crafted goods, and a
            warm atmosphere where everyone is welcome.
          </p>
          <a href="#menu" className="btn-cta" style={{ marginTop: '24px' }}>Discover Our Blends</a>
        </div>
      </div>
    </section>
  );
}

function CuratedMenu() {
  return (
    <section className="menu-section" id="menu">
      <div className="container">
        <h2>A Curated Menu</h2>
        <div className="menu-grid">
          {MENU_ITEMS.map((item, i) => (
            <div className="menu-polaroid" key={item.title}>
              <div className="menu-card">
                <div className={`tape-strip ${i % 2 !== 0 ? 'alt' : ''}`} />
                <div className="menu-card-img">
                  <Image
                    src={item.src}
                    alt={item.title}
                    fill
                    style={{ objectFit: 'cover' }}
                    sizes="(max-width: 640px) 45vw, 280px"
                  />
                </div>
                <div className="menu-card-caption">{item.title}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Reviews() {
  return (
    <section style={{ padding: '0 0 60px' }}>
      <div className="container">
        <h2 style={{ fontSize: '2rem', textAlign: 'center', marginBottom: '40px' }}>What People Say</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '24px' }}>
          {REVIEWS.map((r, i) => (
            <div key={i} style={{
              background: '#fff',
              borderRadius: '12px',
              padding: '28px 24px',
              boxShadow: '0 2px 12px rgba(0,0,0,0.05)',
            }}>
              <div style={{ marginBottom: '12px', color: '#e0a830', fontSize: '1.1rem', letterSpacing: '2px' }}>
                {'★'.repeat(r.stars)}{'☆'.repeat(5 - r.stars)}
              </div>
              <p style={{ fontSize: '0.95rem', lineHeight: 1.7, marginBottom: '16px', fontStyle: 'italic' }}>
                &ldquo;{r.text}&rdquo;
              </p>
              <p style={{ fontWeight: 600, fontSize: '0.9rem' }}>{r.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="site-footer" id="find-us">
      {/* Gentle wave transition to sage green */}
      <svg className="footer-wave" viewBox="0 0 1440 120" preserveAspectRatio="none">
        <path
          fill="var(--bg-sage)"
          d="M0,60 C360,120 720,0 1080,80 C1260,100 1380,60 1440,40 L1440,120 L0,120 Z"
        />
      </svg>

      <div className="footer-body">
        <div className="container footer-inner">
          <div className="footer-contact">
            <h3>Find Us</h3>
            <p><span className="contact-icon">📍</span> M8QH+G5, Kathmandu, Nepal</p>
            <p><span className="contact-icon">📞</span> +977 986-0889356</p>
            <p><span className="contact-icon">✉️</span> hello@thecollective.com.np</p>
            <p><span className="contact-icon">🌐</span> www.thecollectivecafe.com</p>
          </div>

          <div className="footer-map-wrap">
            <iframe
              src="https://maps.google.com/maps?q=the+collective+cafe+kathmandu&t=&z=15&ie=UTF8&iwloc=&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="The Collective Cafe location on Google Maps"
            />
          </div>
        </div>

        <div className="container" style={{ textAlign: 'center', marginTop: '40px', fontSize: '0.85rem', opacity: 0.7 }}>
          © {new Date().getFullYear()} The Collective Cafe · Brewing a better tomorrow
        </div>
      </div>
    </footer>
  );
}

/* ─── Page ─── */
export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <Header onMenuOpen={() => setMobileMenuOpen(true)} />
      <MobileNav open={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
      <main>
        <Hero />
        <Philosophy />
        <CuratedMenu />
        <Reviews />
      </main>
      <Footer />
    </>
  );
}
