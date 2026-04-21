'use client';

import Image from 'next/image';
import { useState } from 'react';

/* ─── Data ─── */
const NAV_ITEMS = [
  { label: 'Our Story', href: '#story' },
  { label: 'Menu', href: '#menu' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Find Us', href: '#find-us' },
];

const MENU_ITEMS = [
  { title: 'Matcha Latte', src: '/assets/food_pictures/MatchaLatte.jpg' },
  { title: 'Cafe Latte', src: '/assets/food_pictures/cafe_latte.webp' },
  { title: 'Banana Cake', src: '/assets/food_pictures/cake_drink.png' },
  { title: 'Butter Croissant', src: '/assets/food_pictures/crossiant.webp' },
  { title: 'Mocha Combo', src: '/assets/food_pictures/mocha-combo.webp' },
  { title: 'Hibiscus Refresher', src: '/assets/food_pictures/ai-generated/hibiscus_refresher.png' },
];

const GALLERY_IMAGES = [
  { src: '/assets/gallery/1.jpg', alt: 'Gallery Image 1' },
  { src: '/assets/gallery/2.jpg', alt: 'Gallery Image 2' },
  { src: '/assets/gallery/3.jpg', alt: 'Gallery Image 3' },
  { src: '/assets/gallery/4.png', alt: 'Gallery Image 4' },
  { src: '/assets/gallery/5.png', alt: 'Gallery Image 5' },
  { src: '/assets/gallery/6.png', alt: 'Gallery Image 6' },
];

const REVIEWS = [
  { name: 'Vyshnavi C.', stars: 5, text: 'Cosy café to stop by and have a yummy cake and relaxing time. The staff is very friendly', image: '/assets/review_person_images/Vyshnavi C.png' },
  { name: 'Sahas Shrestha', stars: 5, text: 'Love thee Awakee tea bagss, and Matchaa heree...', image: '/assets/review_person_images/Sahas Shrestha.png' },
  { name: 'Maria Sunam', stars: 5, text: 'I got the chocolate buttercups, which was chocolate covered pumpkin seed butter and shredded chicken sandwich. I loveeeddddd the chocolates. I just finished these chocolates and I am craving more already!', image: '/assets/review_person_images/Maria Sunam.png' },
];



/* ─── Components ─── */

function Header({ onMenuOpen }: { onMenuOpen: () => void }) {
  return (
    <header className="site-header">
      <div className="container">
        <a href="#" className="logo">
          <Image 
            src="/assets/brand/the_collective_logo_transparent.png" 
            alt="The Collective Cafe Logo" 
            width={320} 
            height={96} 
            style={{ objectFit: 'contain' }}
            priority
          />
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
        <div className="container hero-content-container">
          <div className="hero-content">
            <h1>Your Cozy Coffee Retreat</h1>
            <a href="#menu" className="btn-cta">Discover Our Blends</a>
          </div>
        </div>
      </div>
    </section>
  );
}

const CoffeeCupSVG = () => (
  <svg 
    viewBox="0 0 100 100" 
    width="120" 
    height="120" 
    fill="none" 
    stroke="var(--color-logo-green)" 
    strokeWidth="3" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <path d="M35 25 Q 40 15 35 5" className="steam" />
    <path d="M50 25 Q 55 15 50 5" className="steam" style={{ animationDelay: '0.2s' }} />
    <path d="M65 25 Q 70 15 65 5" className="steam" style={{ animationDelay: '0.4s' }} />
    
    <path d="M25 35 H 75 V 55 C 75 75 62.5 85 50 85 C 37.5 85 25 75 25 55 Z" fill="var(--color-logo-green)" fillOpacity="0.1" />
    <path d="M75 45 H 85 C 90 45 90 60 75 60" />
    <path d="M15 85 Q 50 95 85 85" />
  </svg>
);

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
        {/* Mobile Coffee Cup Icon */}
        <div className="mobile-coffee-icon-wrapper">
          <CoffeeCupSVG />
        </div>

        {/* Polaroid with offset shadow (Desktop only) */}
        <div className="polaroid-frame">
          <div className="polaroid-card">
            <div className="polaroid-img-wrap" style={{ position: 'relative', width: '100%', aspectRatio: '4/3' }}>
              <Image
                src="/assets/cafe_pictures/cafe_outside_pic.jpg"
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
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '50px' }}>
          <button className="btn-cta">Browse Menu</button>
        </div>
      </div>
    </section>
  );
}

function Gallery() {
  return (
    <section className="gallery-section" id="gallery">
      <div className="container">
        <h2>Scrapbook Memories</h2>
        <div className="gallery-grid">
          {GALLERY_IMAGES.map((img, i) => (
            <div className="gallery-polaroid" key={i}>
              <div className="polaroid-card">
                <div className={`tape-strip ${i % 2 !== 0 ? 'alt' : ''}`} />
                <div className="polaroid-img-wrap">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    style={{ objectFit: 'cover' }}
                    sizes="(max-width: 640px) 45vw, 280px"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Reviews() {
  const REVIEW_ITEMS = [...REVIEWS, ...REVIEWS, ...REVIEWS]; // Triple it for continuous flow

  return (
    <section className="reviews-section" id="reviews">
      <div className="container">
        <h2>What People Say</h2>
      </div>
      
      <div className="reviews-marquee-wrapper">
        <div className="reviews-marquee-container">
          <div className="review-list">
            {REVIEW_ITEMS.map((r, i) => (
              <div key={i} className="review-card">
                <div className="review-card-header">
                  <Image src={r.image} alt={r.name} width={56} height={56} className="review-card-img" />
                  <div>
                    <div className="review-card-name">{r.name}</div>
                    <div className="review-card-stars">{'★'.repeat(r.stars)}{'☆'.repeat(5 - r.stars)}</div>
                  </div>
                </div>
                <p className="review-card-text">&ldquo;{r.text}&rdquo;</p>
              </div>
            ))}
          </div>
          <div className="review-list" aria-hidden="true">
            {REVIEW_ITEMS.map((r, i) => (
              <div key={i} className="review-card">
                <div className="review-card-header">
                  <Image src={r.image} alt={r.name} width={56} height={56} className="review-card-img" />
                  <div>
                    <div className="review-card-name">{r.name}</div>
                    <div className="review-card-stars">{'★'.repeat(r.stars)}{'☆'.repeat(5 - r.stars)}</div>
                  </div>
                </div>
                <p className="review-card-text">&ldquo;{r.text}&rdquo;</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <div className="container" style={{ display: 'flex', justifyContent: 'center', marginTop: '60px' }}>
        <a 
          href="https://www.google.com/maps/place/The+Collective+Cafe/@27.6888722,85.3279131,911m/data=!3m1!1e3!4m8!3m7!1s0x39eb199baa92f81d:0xd3d9db450c791f64!8m2!3d27.6888722!4d85.3279131!9m1!1b1!16s%2Fg%2F11ym_k22z0!5m1!1e2?hl=en-GB&entry=ttu&g_ep=EgoyMDI2MDQxOS4wIKXMDSoASAFQAw%3D%3D"
          target="_blank" 
          rel="noopener noreferrer"
          className="btn-google-review"
        >
          <svg viewBox="0 0 24 24" fill="none" style={{ width: '22px', height: '22px', marginRight: '10px' }}>
            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
          </svg>
          Read all Reviews on Google
        </a>
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
        <Gallery />
        <Reviews />
      </main>
      <Footer />
    </>
  );
}
