'use client';
import './globals.css';
import React, { useEffect } from 'react';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Mobile nav toggle
    const menuBtn = document.querySelector('.nav__menu-btn') as HTMLButtonElement | null;
    const navLinks = document.getElementById('navLinks');
    if (!menuBtn || !navLinks) return;
    const handleMenu = () => {
      navLinks.classList.toggle('open');
      const expanded = menuBtn.getAttribute('aria-expanded') === 'true';
      menuBtn.setAttribute('aria-expanded', (!expanded).toString());
    };
    menuBtn.addEventListener('click', handleMenu);
    // Close nav on link click (mobile)
    const navLinkEls = document.querySelectorAll('.nav__link');
    const closeNav = () => {
      if (window.innerWidth <= 700) {
        navLinks.classList.remove('open');
        menuBtn.setAttribute('aria-expanded', 'false');
      }
    };
    navLinkEls.forEach(link => link.addEventListener('click', closeNav));
    // Smooth scroll for anchor links
    const anchorEls = document.querySelectorAll('a[href^="#"]');
    const smoothScroll = (e: Event) => {
      const anchor = e.currentTarget as HTMLAnchorElement;
      const targetId = anchor.getAttribute('href')?.slice(1);
      if (targetId) {
        const target = document.getElementById(targetId);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    };
    anchorEls.forEach(anchor => anchor.addEventListener('click', smoothScroll));
    return () => {
      menuBtn.removeEventListener('click', handleMenu);
      navLinkEls.forEach(link => link.removeEventListener('click', closeNav));
      anchorEls.forEach(anchor => anchor.removeEventListener('click', smoothScroll));
    };
  }, []);

  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1.0" />
        <title>EcoTidy | Organize Sustainably, Live Beautifully</title>
        <link href="https://fonts.googleapis.com/css?family=Poppins:400,500,700&display=swap" rel="stylesheet" />
      </head>
      <body>
        {/* Sticky Navigation */}
        <nav className="nav" role="navigation">
          <a href="/" className="nav__logo" aria-label="EcoTidy Home">
            <span style={{ fontSize: '1.3em', verticalAlign: 'middle' }}>🌿</span> EcoTidy
          </a>
          <button className="nav__menu-btn" aria-label="Open Menu" aria-expanded="false">
            &#9776;
          </button>
          <div className="nav__links" id="navLinks">
            <a href="/#features" className="nav__link">Features</a>
            <a href="/products" className="nav__link">Shop</a>
            <a href="/about" className="nav__link">About</a>
            <a href="#footer" className="nav__link">Contact</a>
            <a href="/products" className="nav__cta">Shop Now</a>
          </div>
        </nav>
        {children}
        {/* Footer */}
        <footer className="footer" id="footer">
          <div className="footer__cols">
            <div>
              <a href="/" className="footer__brand">EcoTidy</a>
              <div className="footer__desc">Eco-friendly home organization solutions for conscious living. Organize sustainably, live beautifully.</div>
            </div>
            <div>
              <div className="footer__links-title">Shop</div>
              <ul className="footer__links">
                <li><a href="/products" className="footer__link">All Products</a></li>
                <li><a href="/products" className="footer__link">Bamboo Storage Bins</a></li>
                <li><a href="/products" className="footer__link">Closet Organizers</a></li>
                <li><a href="/products" className="footer__link">Drawer Dividers</a></li>
              </ul>
            </div>
            <div>
              <div className="footer__links-title">Company</div>
              <ul className="footer__links">
                <li><a href="/about" className="footer__link">About Us</a></li>
                <li><a href="/#features" className="footer__link">Our Values</a></li>
                <li><a href="#footer" className="footer__link">Contact</a></li>
                <li><a href="#footer" className="footer__link">Privacy Policy</a></li>
              </ul>
            </div>
          </div>
          <div className="footer__copy">
            &copy; 2024 EcoTidy. All rights reserved.
          </div>
        </footer>
      </body>
    </html>
  );
}
