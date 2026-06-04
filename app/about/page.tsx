'use client';
import React from 'react';

export default function AboutPage() {
  return (
    <main>
      <section className="features" id="about-story" style={{ marginTop: '3.5rem', marginBottom: '2.5rem' }}>
        <div className="feature-card" tabIndex={0} style={{ gridColumn: '1 / -1', maxWidth: 700, margin: '0 auto' }}>
          <div className="feature-card__icon" aria-hidden="true">🌿</div>
          <div className="feature-card__title">Our Story</div>
          <div className="feature-card__desc">
            <p>
              EcoTidy was founded with a simple mission: to help people organize their homes beautifully while caring for the planet. We believe that sustainable living should be effortless and stylish. Every EcoTidy product is thoughtfully designed using renewable or recycled materials, so you can declutter your space and your conscience.
            </p>
            <p style={{ marginTop: '1.2em' }}>
              From bamboo storage bins to biodegradable drawer dividers, our collection empowers you to make eco-friendly choices every day. Join us as we create a cleaner, greener, and more organized world—one home at a time.
            </p>
          </div>
        </div>
      </section>
      <section className="features" id="values">
        <div className="feature-card" tabIndex={0}>
          <div className="feature-card__icon" aria-hidden="true">♻️</div>
          <div className="feature-card__title">Sustainable Materials</div>
          <div className="feature-card__desc">We use renewable, recycled, and biodegradable resources to minimize environmental impact.</div>
        </div>
        <div className="feature-card" tabIndex={0}>
          <div className="feature-card__icon" aria-hidden="true">🌱</div>
          <div className="feature-card__title">Conscious Design</div>
          <div className="feature-card__desc">Our minimalist, versatile products fit any home and encourage mindful living.</div>
        </div>
        <div className="feature-card" tabIndex={0}>
          <div className="feature-card__icon" aria-hidden="true">🤝</div>
          <div className="feature-card__title">Community & Impact</div>
          <div className="feature-card__desc">A portion of every purchase supports environmental initiatives and local communities.</div>
        </div>
      </section>
    </main>
  );
}
